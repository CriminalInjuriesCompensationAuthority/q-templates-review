'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'context-sending-supporting-info': {
                    title: 'Send supporting information',
                    description: `
                    <p class="govuk-body">If you have information to support your review request, you must send it to us by post or email.</p>
                    <p class="govuk-body">You must do this by <b>11:59pm on ||/meta/personalisation/expiry-date||.</b></p>
                    <p class="govuk-body">It's fine to send us:</p>
                    <ul class='govuk-list govuk-list--bullet'>
                    <li>photocopies of documents</li>
                    <li>scanned documents</li>
                    <li>images of documents you have taken with a mobile phone</li>
                    </ul>
                    <p class="govuk-body">It's better to send us copies of documents instead of the originals.</p>
                    <p class="govuk-body">You should include your CICA reference number on anything you send us. This is: ||/answers/system/case-reference||</p>
                    <div class="govuk-inset-text">
                        <h3 class="govuk-heading-m">Email</h2>
                        <p class="govuk-body"><a href="mailto:info@cica.gov.uk" target="_blank" rel="noopener noreferrer" class="govuk-link">info@cica.gov.uk</a></p>
                        <h3 class="govuk-heading-m">Address</h2>
                        <p class="govuk-body">Criminal Injuries Compensation Authority
                        <br>10 Clyde Place
                        <br>Buchanan Wharf
                        <br>Glasgow
                        <br>G5 8AQ
                        <br>United Kingdom</p>
                    </div>
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
                    target: 'p--check-your-answers',
                },
            ],
        },
    },
};
