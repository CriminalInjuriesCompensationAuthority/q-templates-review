'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-why-do-you-want-a-review'],
            properties: {
                'q-why-do-you-want-a-review': {
                    type: 'string',
                    title: 'Tell us why you want a review',
                    description: `<p class="govuk-body">Explain why you do not agree with our decision. Let us know if you:</p>
                        <ul class='govuk-list govuk-list--bullet'>
                        <li>do not think we’ve considered all the information you gave us</li>
                        <li>think we’ve looked at the wrong information</li>
                        <li>have any extra information you’d like to give us</li>
                        <li>think our decision was wrong for another reason</li>
                        </ul>
                        <p class="govuk-body">Do not include personal or financial information, like your National Insurance number or credit card details.</p>
                        `,
                    maxLength: 10000,
                    errorMessage: {
                        maxLength: 'Reasons must be 10000 characters or less',
                    },
                    meta: {
                        classifications: {
                            theme: 'request-a-review',
                        },
                        summary: {
                            title: 'Tell us why you want a review',
                        },
                    },
                },
            },
            errorMessage: {
                required: {
                    'q-why-do-you-want-a-review': 'Enter your reasons for wanting a review',
                },
            },
            examples: [
                {
                    'q-why-do-you-want-a-review': 'Some description',
                },
            ],
            invalidExamples: [
                {
                    'q-why-do-you-want-a-review': 12345,
                },
            ],
        },
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-do-you-have-supporting-info',
                },
            ],
        },
    },
};
