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
                    description: `
                    <p class="govuk-body govuk-!-margin-bottom-0">||/meta/personalisation/first-name|| ||/meta/personalisation/last-name||</p>
                    <p class="govuk-body govuk-!-margin-bottom-0">Reference number: ||/answers/system/case-reference||</p>
                    <p class="govuk-body">||/meta/personalisation/date||</p>
                    <p class="govuk-body">Thank you for your application for criminal injuries compensation.</p>
                    <p class="govuk-body"><b>Unfortunately, you are not eligible for compensation.</b></p>
                    <p class="govuk-body">We are sorry about the experience that led you to apply for compensation. We understand this decision may be upsetting.</p>
                    <h2 class="govuk-heading-m">What you should do</h2>
                    <ol class='govuk-list govuk-list--number'>
                    <li>Read the explanation about why you are not eligible.</li>
                    <li>Decide if you agree with the decision or not</li>
                    <li>If you do <b>not</b> agree with the decision, read about how to ask for a review</li>
                    </ol>
                    <h2 class="govuk-heading-m">Why you are not eligible</h2>
                    <p class="govuk-body">To work out if you're eligible for compensation, a claims officer followed the rules in the <a href="https://assets.publishing.service.gov.uk/media/5d00c89ee5274a3cfa8a4ffe/criminal-injuries-compensation-scheme-2012.pdf" target="_blank" class="govuk-link">Criminal Injuries Compensation Scheme (opens in a new tab).<a></p>
                    <p class="govuk-body"><b>This is what the claims officer says about your claim</b></p>
                    <p class="govuk-body">||/meta/personalisation/decision-reason||</p>
                    <h3 class="govuk-heading-s">Scheme rules which have affected your eligibility to receive an award</h3>
                    <p class="govuk-body">These specific rules in the Scheme apply to this decision.</p>
                    <p class="govuk-body">||/meta/personalisation/decision-paragraphs||</p>
                    <h2 class="govuk-heading-m">What to do next</h2>
                    <p class="govuk-body">You should now decide if you accept this decision or not.</p>
                    <p class="govuk-body">If you accept this decision, you do not need to do anything.</p>
                    <h2 class="govuk-heading-m">Ask for a review</h2>
                    <p class="govuk-body">You may want to ask for a review if you:</p>
                    <ul class='govuk-list govuk-list--bullet'>
                    <li>do not think we've considered all the information you gave us</li>
                    <li>think we've looked at the wrong information</li>
                    <li>have any extra information you'd like to give us</li>
                    <li>think our decision was wrong for another reason</li>
                    </ul>
                    <p class="govuk-body">The deadline for asking for a review is <b>11:59pm on ||/meta/personalisation/expiry-date||.</b></p>
                    <p class="govuk-body">We may be able to extend this date if there are exceptional circumstances.We can only extend the time limit once. Email or write to us if you need an extension to this date.</p>
                    <p class="govuk-body">You can ask for a review yourself. You do not need to pay someone to do this for you. If you choose to pay a legal representative, we cannot pay their fees.</p>
                    <h3 class="govuk-heading-s">What happens when you ask for a review</h3>
                    <p class="govuk-body">A different claims officer will make a new decision about your claim.</p>
                    <p class="govuk-body">We make most review decisions within 6 months. Sometimes it can take longer depending on the circumstances of your claim.</p>
                    <p class="govuk-body">If you do not agree with the review decision, you can appeal to a tribunal.</p>
                    <button type="submit" data-prevent-double-click="true" class="govuk-button govuk-button--start">Ask for a review</button>
                    <article class="moj-ticket-panel" aria-label="Sub navigation 1">
                    <section class="moj-ticket-panel__content moj-ticket-panel__content--blue" aria-label="Section 1">
                        <h2 class="govuk-heading-l govuk-!-margin-bottom-4">Save this decision</h2>
                        <p class="govuk-body"><a class="govuk-link" href="pdf-URL" target="_blank">Download as PDF ()</a></p>     
                        <p class="govuk-body"><a class="govuk-link" href="/download/p--decision" target="_blank">Download as an accessible web page (HTML, )</a></p>                     
                        <p class="govuk-body"><a class="govuk-link" href="javascript:window.print()">Print your decision</a></p>                       
                    </section>
                    </article>
                    <h3 class="govuk-heading-m govuk-!-margin-bottom-0">More information</h3>
                    <p class="govuk-body"><a href="" target="_blank" class="govuk-link">Read our guide to the Criminal Injuries Compensation Scheme<a>.</p>
                    <h3 class="govuk-heading-m govuk-!-margin-bottom-0">Contact us</h3>
                    <p class="govuk-body"><a href="" target="_blank" class="govuk-link">Contact us if you have any queries<a>.</p>
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
                hiddenButton: true,
                showSurvey: 'full',
                showBackButton: false,
            },
        },
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--ask-for-a-review',
                },
            ],
        },
    },
};
