'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-why-do-you-want-a-review'],
            properties: {
                'why-do-you-want-a-review-info': {
                    title: 'Your reason for wanting a review',
                    description: `<p class="govuk-body">We need to know why you do not agree with our decision.</p>
                        <p class="govuk-body">In your request for a review, things you might want to include are:</p>
                        <ul class='govuk-list govuk-list--bullet'>
                        <li>if you do not think we’ve considered all the information you gave us</li>
                        <li>if you think we’ve looked at the wrong information</li>
                        <li>any new information you’d like to give us</li>
                        <li>if you think our decision was wrong for another reason</li>
                        </ul>
                        <p class="govuk-body">Do not include personal or financial information, like your National Insurance number or credit card details.</p>`,
                },
                'q-why-do-you-want-a-review': {
                    type: 'string',
                    title: 'Tell us why you want a review',
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
            options: {
                showSurvey: 'beta',
                outputOrder: ['why-do-you-want-a-review-info', 'q-why-do-you-want-a-review'],
                properties: {
                    'q-why-do-you-want-a-review': {
                        options: {
                            macroOptions: {
                                label: {
                                    classes: 'govuk-label--m',
                                },
                            },
                        },
                    },
                },
            },
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
