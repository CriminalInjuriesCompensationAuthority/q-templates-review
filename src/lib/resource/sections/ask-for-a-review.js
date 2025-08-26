'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'ask-for-a-review': {
                    title: 'Ask for a review',
                    description:
                        '<p class="govuk-body">We\'re going to ask about your reasons for asking for a review</p>'
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
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--why-do-you-want-a-review'
                }
            ]
        }
    }
};
