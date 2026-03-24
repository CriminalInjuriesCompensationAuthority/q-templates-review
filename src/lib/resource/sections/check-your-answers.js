'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'p-check-your-answers': {
                    title: 'Confirm your answers',
                    description: 'Confirm your answers',
                    type: 'object',
                    properties: {
                        summaryInfo: {
                            type: 'object',
                            urlPath: 'apply',
                            editAnswerText: 'Change',
                            summaryStructure: [],
                            lookup: {},
                        },
                    },
                },
            },
            examples: [{}],
            invalidExamples: [
                {
                    foo: 'bar',
                },
            ],
            options: {
                ordering: {},
                buttonText: 'Accept and send',
                showSurvey: 'beta',

                pageContext: 'submission',
            },
        },
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--review-confirmation',
                },
            ],
        },
    },
};
