'use strict';

/* eslint-disable no-useless-escape */
module.exports = {
    section: {
        l10n: {
            vars: {
                lng: 'en',
                ns: 'p--confirmation',
            },
            translations: [
                {
                    language: 'en',
                    namespace: 'p--confirmation',
                    resources: {
                        confirmation: {
                            outOfTime: `{{ govukPanel({
                                  titleText: "We've received your request"
                                })}}
                                <p class="govuk-body">Thank you for asking for a review.</p>
                                <h3 class="govuk-heading-l">Next steps</h2>
                                <p class="govuk-body">Before we look at your reason for wanting a review. we'll decide whether to extend the time limit or not. If we decide <b>not</b> to extend the time limit, we will not review your case.</p>
                                <p class="govuk-body"><b>We can only extend the time limit once.</b> If you've already asked for an extension and have missed the deadline, we cannot consider your request for a review.</p>
                                <p class="govuk-body">If we do extend the time limit, a different claims officer will make a new decision about your claim.</p>
                                <p class="govuk-body">We make most review decisions within 6 months. Sometimes it can take longer depending on the circumstances of your claim.</p>
                                <p class="govuk-body">If you do not agree with the review decision, you can appeal to a tribunal.</p>
                                <h3 class="govuk-heading-l">Contact us</h2>
                                <p class="govuk-body"><a href="" class="govuk-link">Contact us if you have any queries<a>.</p>
                                  `,
                            inTime: `{{ govukPanel({
                                  titleText: "We've received your request"
                                })}}
                                <p class="govuk-body">Thank you for asking for a review.</p>
                                <h3 class="govuk-heading-l">Next steps</h2>
                                <p class="govuk-body">A different case officer will look at your application again to see if the decision was accurate.</p>
                                <p class="govuk-body">We make most review decisions within 6 months. Sometimes it can take longer depending on the circumstances of your claim.</p>
                                <p class="govuk-body">If you do not agree with the review decision, you can appeal to a tribunal. When we send you our review decision, we'll let you know how to do this.</p>
                                <h3 class="govuk-heading-l">Contact us</h2>
                                <p class="govuk-body"><a href="" class="govuk-link">Contact us if you have any queries<a>.</p>
                                  `,
                        },
                    },
                },
            ],
        },
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                confirmation: {
                    title: 'Confirmation',
                    description: [
                        '|l10nt',
                        ['|role.all', 'expired'],
                        'confirmation.outOfTime',
                        ['|role.all'],
                        'confirmation.inTime',
                    ],
                },
            },
            examples: [{}],
            invalidExamples: [
                {
                    foo: 'bar',
                },
            ],
            options: {
                showSurvey: 'beta',
                showBackButton: false,
            },
        },
    },
    route: {
        type: 'final',
    },
};
