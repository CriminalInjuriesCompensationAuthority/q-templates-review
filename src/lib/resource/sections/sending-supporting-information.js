'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'context-sending-supporting-info': {
                    title: 'Sending supporting information',
                    description:
                        '<p class="govuk-body">If you want to send us supporting information, do this by post.</p>'
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
                    target: 'p--check-your-answers'
                }
            ]
        }
    }
};
