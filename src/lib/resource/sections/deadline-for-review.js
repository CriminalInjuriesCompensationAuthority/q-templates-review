'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-reason-for-missing-review-deadline'],
            additionalProperties: false,
            properties: {
                'reason-for-missing-review-deadline-info': {
                    title: 'Deadline for asking for a review',
                    description: `
                    <p class="govuk-body">You missed the deadline to ask for a review. The deadline was ||/meta/personalisation/expiry-date||.</p>
                    <p class="govuk-body">We can sometimes extend the time limit for reviews if there are exceptional circumstances.</p>
                    <p class="govuk-body">Before we look at your reason for wanting a review, we'll decide whether to extend the time limit or not. If we decide <b>not</b> to extend the time limit, we will not review your case.</p>
                    <p class="govuk-body"><b>We can only extend the time limit once.</b> If you've already asked for an extension and have missed the deadline, we cannot consider your request for a review.</p>
                    `,
                },
                'q-reason-for-missing-review-deadline': {
                    type: 'string',
                    title: 'Tell us why you missed the deadline for asking for a review',
                    maxLength: 10000,
                    errorMessage: {
                        maxLength: 'Reasons must be 10000 characters or less',
                    },
                    meta: {
                        classifications: {
                            theme: 'request-a-review',
                        },
                    },
                },
            },
            errorMessage: {
                required: {
                    'q-reason-for-missing-review-deadline': 'Enter why you missed the deadline',
                },
            },

            examples: [
                {
                    'q-reason-for-missing-review-deadline': 'some text',
                },
            ],
            invalidExamples: [
                {
                    'q-reason-for-missing-review-deadline': false,
                },
            ],
            options: {
                showSurvey: 'beta',
                outputOrder: [
                    'reason-for-missing-review-deadline-info',
                    'q-reason-for-missing-review-deadline',
                ],
                properties: {
                    'q-reason-for-missing-review-deadline': {
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
                    target: 'p-why-do-you-want-a-review',
                },
            ],
        },
    },
};
