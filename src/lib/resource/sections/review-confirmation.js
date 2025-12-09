'use strict';

/* eslint-disable no-useless-escape */
module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                confirmation: {
                    title: 'Confirmation',
                    description: `{{ govukPanel({
                                  titleText: "We've received your request"
                                })}}
                                <p class="govuk-body">Thank you for asking for a review.</p>
                                <h3 class="govuk-heading-m">Next steps</h2>
                                <p class="govuk-body">A different case officer will look at your application again to see if the decision was accurate.</p>
                                <p class="govuk-body">We make most review decisions within 6 months. Sometimes it can take longer depending on the circumstances of your claim.</p>
                                <p class="govuk-body">If you do not agree with the review decision, you can appeal to a tribunal. When we send you our review decision, we'll let you know how to do this.</p>
                                <h3 class="govuk-heading-m">Contact us</h2>
                                <p class="govuk-body"><a href="" class="govuk-link">Contact us if you have any queries<a>.</p>
                                  `,
                },
            },
            examples: [{}],
            invalidExamples: [
                {
                    foo: 'bar',
                },
            ],
            options: {
                showBackButton: false,
            },
        },
    },
    route: {
        type: 'final',
    },
};
