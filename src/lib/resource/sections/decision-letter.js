'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'context-decison-letter': {
                    title: 'Decision about your application for compensation',
                    description: '<p class="govuk-body">Thank you for your application for criminal injuries compensation. <strong>Unfortunately, you are not eligible for compensation.</strong>'
                }
            },
            meta: {
                pageType: 'context'
            },
            examples: [{}],
            invalidExamples: [
                {
                    foo: 'bar'
                }
            ],
            options: {
                buttonText: 'Ask for a review'
            }
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--ask-for-a-review'
                }
            ]
        }
    }
};
