'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q--supporting-info'],
            additionalProperties: false,
            properties: {
                'q--supporting-info': {
                    type: 'boolean',
                    title: 'Do you have supporting information you want to send us?',
                    oneOf: [
                        {
                            title: 'Yes',
                            const: true
                        },
                        {
                            title: 'No',
                            const: false
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'request-a-review'
                        },
                        summary: {
                            title: 'Do you have supporting information?'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q--supporting-info': 'Do you have supporting information?'
                }
            },
            examples: [
                {
                    'q--supporting-info': true
                },
                {
                    'q--supporting-info': false
                }
            ],
            invalidExamples: [
                {
                    'q--supporting-info': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--sending-supporting-information',
                    cond: [
                        '==',
                        '$.answers.p--do-you-have-supporting-info.q--supporting-info',
                        true
                    ]
                },
                {
                    target: 'p--review-check-your-answers'
                }
            ]
        }
    }
};
