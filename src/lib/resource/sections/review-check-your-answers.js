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
                    type: 'object',
                    properties: {
                        summaryInfo: {
                            type: 'object',
                            urlPath: 'claim',
                            editAnswerText: 'Change',
                            summaryStructure: [],
                            lookup: {}
                        }
                    }
                }
            },
            examples: [{}],
            invalidExamples: [
                {
                    foo: 'bar'
                }
            ],
            options: {
                ordering: {}
            }
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--review-confirmation'
                }
            ]
        }
    }
};
