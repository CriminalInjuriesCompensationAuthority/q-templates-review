'use strict';

const {version} = require('../package.json');

const askForReview = require('./lib/resource/sections/ask-for-a-review');
const decisionLetter = require('./lib/resource/sections/decision-letter');
const doYouHaveSupportingInfo = require('./lib/resource/sections/do-you-have-supporting-info');
const reviewCheckYourAnswers = require('./lib/resource/sections/review-check-your-answers');
const reviewConfirmation = require('./lib/resource/sections/review-confirmation');
const sendingSupportingInfo = require('./lib/resource/sections/sending-supporting-information');
const whyDoYouWantReview = require('./lib/resource/sections/why-do-you-want-a-review');
const system = require('./lib/resource/sections/system');
const owner = require('./lib/resource/sections/owner');
const origin = require('./lib/resource/sections/origin');
module.exports = {
    type: 'request-a-review',
    version,
    sections: {
        'p--ask-for-a-review': askForReview.section,
        'p--decision-letter': decisionLetter.section,
        'p--do-you-have-supporting-info': doYouHaveSupportingInfo.section,
        'p--review-check-your-answers': reviewCheckYourAnswers.section,
        'p--review-confirmation': reviewConfirmation.section,
        'p--sending-supporting-information': sendingSupportingInfo.section,
        'p--why-do-you-want-a-review': whyDoYouWantReview.section,
        system: system.section,
        owner: owner.section,
        origin: origin.section
    },
    routes: {
        initial: 'p--decision-letter',
        referrer: 'https://www.gov.uk/claim-compensation-criminal-injury/make-claim',
        summary: [
            'p--review-check-your-answers'
        ],
        confirmation: 'p--review-confirmation',
        states: {
            'p--ask-for-a-review': askForReview.route,
            'p--decision-letter': decisionLetter.route,
            'p--do-you-have-supporting-info': doYouHaveSupportingInfo.route,
            'p--review-check-your-answers': reviewCheckYourAnswers.route,
            'p--review-confirmation': reviewConfirmation.route,
            'p--sending-supporting-information': sendingSupportingInfo.route,
            'p--why-do-you-want-a-review': whyDoYouWantReview.route,
            system: system.route,
            owner: owner.route,
            origin: origin.route
        }
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
                    logger: '$.logger'
                }
            },
            {
                id: 'task2',
                type: 'sendSubmissionMessageToSQS',
                retries: 0,
                data: {
                    questionnaire: '$.questionnaireDef',
                    logger: '$.logger'
                }
            }
        ]
    },
    progress: ['p--decision-letter'],
    taxonomies: {
        theme: {
            taxa: {
                'request-a-review': {
                    title: 'Request a review'
                }
            }
        }
    },
    meta: {
        questionnaireDocumentVersion: '5.0.0',
        attributes: {}
    },
    attributes: {
    }
};