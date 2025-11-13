'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'ask-for-a-review': {
                    title: "What we'll ask you",
                    description: `
                        <p class="govuk-body">We need to find out more about why you would like us to review our decision about your claim.</p>
                        <p class="govuk-body">To do this we'll ask for your reasons for wanting a review. We'll also ask if you have any supporting information to send us.</p>
                        `,
                },
            },
            meta: {
                pageType: 'context',
            },
            examples: [{}],
            invalidExamples: [
                {
                    foo: 'bar',
                },
            ],
        },
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--why-do-you-want-a-review',
                },
            ],
        },
    },
};
