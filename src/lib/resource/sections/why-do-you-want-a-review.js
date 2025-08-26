'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q--why-do-you-want-a-review'],
            properties: {
                'q--why-do-you-want-a-review': {
                    type: 'string',
                    title: 'Tell us why you want a review',
                    description:
                        'Give reasons why we should review your decision',
                    maxLength: 10000,
                    errorMessage: {
                        maxLength: 'Reasons must be 10000 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'request-a-review'
                        },
                        summary: {
                            title: 'Tell us why you want a review'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q--why-do-you-want-a-review': 'Enter your reasons for wanting a review'
                }
            },
            examples: [
                {
                    'q--why-do-you-want-a-review': 'Some description'
                }
            ],
            invalidExamples: [
                {
                    'q--why-do-you-want-a-review': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--do-you-have-supporting-info'
                }
            ]
        }
    }
};
