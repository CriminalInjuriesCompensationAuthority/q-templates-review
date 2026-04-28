'use strict';

const {version} = require('../package.json');

const askForReview = require('./lib/resource/sections/ask-for-a-review');
const decisionLetter = require('./lib/resource/sections/decision');
const doYouHaveSupportingInfo = require('./lib/resource/sections/do-you-have-supporting-info');
const checkYourAnswers = require('./lib/resource/sections/check-your-answers');
const reviewConfirmation = require('./lib/resource/sections/review-confirmation');
const sendingSupportingInfo = require('./lib/resource/sections/sending-supporting-information');
const whyDoYouWantReview = require('./lib/resource/sections/why-do-you-want-a-review');
const system = require('./lib/resource/sections/system');
const owner = require('./lib/resource/sections/owner');
const origin = require('./lib/resource/sections/origin');
const deadlineForReview = require('./lib/resource/sections/deadline-for-review');
module.exports = {
    type: 'request-a-review',
    version,
    sections: {
        'p--ask-for-a-review': askForReview.section,
        'p--decision': decisionLetter.section,
        'p-do-you-have-supporting-info': doYouHaveSupportingInfo.section,
        'p--check-your-answers': checkYourAnswers.section,
        'p--review-confirmation': reviewConfirmation.section,
        'p--sending-supporting-information': sendingSupportingInfo.section,
        'p-why-do-you-want-a-review': whyDoYouWantReview.section,
        'p-deadline-for-review': deadlineForReview.section,
        system: system.section,
        owner: owner.section,
        origin: origin.section,
    },
    routes: {
        initial: 'p--decision',
        referrer: 'https://www.gov.uk/claim-compensation-criminal-injury/make-claim',
        summary: ['p--check-your-answers'],
        confirmation: 'p--review-confirmation',
        states: {
            'p--ask-for-a-review': askForReview.route,
            'p--decision': decisionLetter.route,
            'p-do-you-have-supporting-info': doYouHaveSupportingInfo.route,
            'p--check-your-answers': checkYourAnswers.route,
            'p--review-confirmation': reviewConfirmation.route,
            'p--sending-supporting-information': sendingSupportingInfo.route,
            'p-why-do-you-want-a-review': whyDoYouWantReview.route,
            'p-deadline-for-review': deadlineForReview.route,
            system: system.route,
            owner: owner.route,
            origin: origin.route,
        },
    },
    answers: {},
    onSubmit: {
        id: 'task0',
        type: 'sequential',
        retries: 0,
        data: [
            {
                id: 'task1',
                type: 'transformAndUpload',
                retries: 0,
                data: {
                    questionnaireDef: '$.questionnaireDef',
                    logger: '$.logger',
                },
            },
            {
                id: 'task2',
                type: 'sendSubmissionMessageToSQS',
                retries: 0,
                data: {
                    questionnaire: '$.questionnaireDef',
                    logger: '$.logger',
                },
            },
            {
                id: 'task3',
                type: 'sendNotifyMessageToSQS',
                retries: 0,
                data: {
                    questionnaire: '$.questionnaireDef',
                    logger: '$.logger',
                },
            },
            {
                id: 'task4',
                type: 'createStubs',
                retries: 0,
                data: {
                    questionnaire: '$.questionnaireDef',
                    logger: '$.logger',
                },
            },
        ],
    },
    onCreate: {
        id: 'task0',
        type: 'sequential',
        retries: 0,
        data: [
            {
                id: 'task1',
                type: 'sendNotifyMessageToSQS',
                retries: 0,
                data: {
                    questionnaire: '$.questionnaireDef',
                    logger: '$.logger',
                    type: '$.type',
                },
            },
        ],
    },
    progress: ['p--decision'],
    taxonomies: {
        theme: {
            taxa: {
                'request-a-review': {
                    title: 'Request a review',
                },
            },
        },
    },
    meta: {
        questionnaireDocumentVersion: '5.0.0',
        onCreate: {
            actions: [
                {
                    description: 'Decision notification email',
                    type: 'sendEmail',
                    cond: ['==', '$.answers.owner.contact-preference', 'E'],
                    // prettier-ignore
                    data: {
                        templateId: '42b812dd-0fa6-48e5-a7cf-de7ae0bfc37c',
                        emailAddress:
                            '||/answers/owner/email||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||',
                            content: 'https://uat.claim-criminal-injuries-compensation.service.justice.gov.uk/account/login?qid=||/id||&target=||/answers/system/case-reference||'
                        },
                        reference: null
                    },
                },
                {
                    description: 'Decision notification sms',
                    type: 'sendSms',
                    cond: ['==', '$.answers.owner.contact-preference', 'T'],
                    // prettier-ignore
                    data: {
                        templateId: 'a5c5a52c-d99f-459e-ad53-cf5a6c24f1a9',
                        phoneNumber:
                            '||/answers/owner/phone||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||',    
                            content: 'https://uat.claim-criminal-injuries-compensation.service.justice.gov.uk/account/login?qid=||/id||&target=||/answers/system/case-reference||'

                        },
                        reference: null
                    },
                },
            ],
        },
        onComplete: {
            actions: [
                {
                    description: 'Review confirmation email',
                    type: 'sendEmail',
                    cond: [
                        'and',
                        ['|role.all', 'inTime'],
                        ['==', '$.answers.owner.contact-preference', 'E'],
                    ],
                    // prettier-ignore
                    data: {
                        templateId: 'd0fca60f-3c94-4e09-8c99-a76b67d67476',
                        emailAddress:
                            '||/answers/owner/email||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||',
                            'review deadline': '||/answers/system/expiry-date||'
                        },
                        reference: null
                    },
                },
                {
                    description: 'Review confirmation text',
                    type: 'sendSms',
                    cond: [
                        'and',
                        ['|role.all', 'inTime'],
                        ['==', '$.answers.owner.contact-preference', 'T'],
                    ],
                    // prettier-ignore
                    data: {
                        templateId: 'd7a9a257-2e04-40cf-b0e8-791d4e587704',
                        phoneNumber:
                            '||/answers/owner/phone||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    },
                },
                {
                    description: 'Out of time review confirmation email',
                    type: 'sendEmail',
                    cond: [
                        'and',
                        ['|role.all', 'expired'],
                        ['==', '$.answers.owner.contact-preference', 'E'],
                    ],
                    // prettier-ignore
                    data: {
                        templateId: 'a7e93501-e7f3-4712-a9bf-2ef78ee03ad5',
                        emailAddress:
                            '||/answers/owner/email||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||',
                            'review deadline': '||/answers/system/expiry-date||'
                        },
                        reference: null
                    },
                },
                {
                    description: 'Out of time review confirmation text',
                    type: 'sendSms',
                    cond: [
                        'and',
                        ['|role.all', 'expired'],
                        ['==', '$.answers.owner.contact-preference', 'T'],
                    ],
                    // prettier-ignore
                    data: {
                        templateId: '780a3300-27ee-4bc0-93bd-9de646a12ae1',
                        phoneNumber:
                            '||/answers/owner/phone||',
                        personalisation: {
                            caseReference: '||/answers/system/case-reference||'
                        },
                        reference: null
                    },
                },
                {
                    description: 'Create a stub template for the decision',
                    type: 'createStub',
                    sectionIds: ['p--decision', 'system', 'owner', 'origin'],
                    summaryBlocks: {
                        read: {
                            condition: 'always-visible',
                            link: '<a href="/apply/resume/||questionnaireId||" class="govuk-link">Read our decision about your application</a><strong class="govuk-tag govuk-tag--blue" style="margin-left:auto">VIEWED</strong>',
                        },
                    },
                },
                {
                    description: 'Create a stub template for sending supporting information',
                    type: 'createStub',
                    sectionIds: ['p--sending-supporting-information', 'system', 'owner', 'origin'],
                    summaryBlocks: {
                        read: {
                            condition: 'always-visible',
                            link: '<a href="/apply/resume/||questionnaireId||" class="govuk-link">Find out how to send supporting information for a review</a>',
                        },
                    },
                },
            ],
        },
        summaryBlocks: {
            read: {
                condition: 'unopened',
                link: '<a href="/apply/resume/||questionnaireId||" class="govuk-link">Read our decision about your application</a><strong class="govuk-tag govuk-tag--orange" style="margin-left:auto">TO DO</strong>',
            },
            're-read': {
                condition: 'viewed',
                link: '<a href="/apply/resume/||questionnaireId||" class="govuk-link">Read our decision about your application</a><strong class="govuk-tag govuk-tag--blue" style="margin-left:auto">VIEWED</strong>',
            },
        },
    },
    attributes: {
        q__roles: {
            expired: {
                schema: {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'Someone requesting a review pass the deadline',
                    type: 'boolean',
                    // prettier-ignore
                    const: [
                        'dateCompare',
                        '$.answers.system.expiry-date', // this date ...
                        '>=', // is more than or equal to ...
                        '-1', // 1 ...
                        'days', // day (before, due to the negative (-1)) ...
                        // today's date (no second date given. defaults to today's date).
                    ],
                    examples: [{}],
                    invalidExamples: [{}],
                },
            },
            inTime: {
                schema: {
                    $schema: 'http://json-schema.org/draft-07/schema#',
                    title: 'Someone requesting a review before the deadline',
                    type: 'boolean',
                    // prettier-ignore
                    const: [
                        'dateCompare',
                        '$.answers.system.expiry-date', // this date ...
                        '>=', // is more than or equal to
                        '0', // 0 ...
                        'days', // days (after) ...
                        // today's date (no second date given. defaults to today's date).
                    ],
                    examples: [{}],
                    invalidExamples: [{}],
                },
            },
        },
    },
    // prettier-ignore
    "inputSchema": {
        "$id": "inputSchema:tx45",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
        "additionalProperties": false,
        "required": [
            "caseReferenceNumber",
            "applicantForename",
            "applicantSurname",
            "dateSent",
            "shortExplanation",
            "longExplanation",
            "paragraph1",
            "requestReviewBy"
        ],
        "properties": {
            "caseReferenceNumber": {
                "type": "string"
            },
            "applicantForename": {
                "type": "string"
            },
            "applicantSurname": {
                "type": "string"
            },
            "dateSent": {
                "type": "string",
                "format": "date"
            },
            "shortExplanation": {
                "type": "string"
            },
            "longExplanation": {
                "type": "string"
            },
            "paragraph1": {
                "type": "string"
            },
            "paragraph2": {
                "type": "string"
            },
            "paragraph3": {
                "type": "string"
            },
            "requestReviewBy": {
                "type": "string",
                "format": "date"
            },
            "expiryDate": {
                "type": "string",
                "format": "date"
            }
        },
        "allOf": [
            {
                "if": {
                    "required": [
                        "paragraph2"
                    ]
                },
                "then": {
                    "required": [
                        "paragraph1"
                    ]
                }
            },
            {
                "if": {
                    "required": [
                        "paragraph3"
                    ]
                },
                "then": {
                    "required": [
                        "paragraph2"
                    ]
                }
            }
        ]
    },
};
