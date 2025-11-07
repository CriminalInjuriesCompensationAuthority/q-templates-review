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
                    <p class="govuk-body">Thank you for your application for criminal injuries compensation. <b>Unfortunately, you are not eligible for compensation.</b></p>
                    <p class="govuk-body">||/meta/personalisation/short-reason||</p>
                    <p class="govuk-body">This will be disappointing news and not the decision you were hoping for. The decision is not intended to minimise the impact this incident will have had on you.</p>
                    <h2 class="govuk-heading-m">How we made this decision</h2>
                    <p class="govuk-body">||/meta/personalisation/decision-reason||</p>
                    <h3 class="govuk-heading-s">Scheme paragraphs which have affected your eligibility to receive an award</h3>
                    <p class="govuk-body">||/meta/personalisation/decision-paragraphs||</p>
                    <article class="moj-ticket-panel" aria-label="Sub navigation 1">
                    <section class="moj-ticket-panel__content moj-ticket-panel__content--blue" aria-label="Section 1">
                        <h2 class="govuk-heading-m govuk-!-margin-bottom-2">Save the decision</h2>
                        <p class="govuk-body">To keep a copy of the decision, download or print it.</p>
                        <p class="govuk-body"><a class="govuk-link govuk-!-margin-left-3" href="pdf-URL" target="_blank">Download as PDF ()</a></p>     
                        <p class="govuk-body"><a class="govuk-link govuk-!-margin-left-3" href="/download/p--decision-letter" target="_blank">Download as an accessible web page (HTML, )</a></p>                     
                        <p class="govuk-body"><a class="govuk-link govuk-!-margin-left-3" href="javascript:if(window.print)window.print()">Print your decision</a></p>                       
                    </section>
                    </article>
                    <h2 class="govuk-heading-m">What to do next</h2>
                    <p class="govuk-body">If you accept this decision, you do not need to do anything.</p>
                    <p class="govuk-body">If you do not accept this decision, you can ask for a review.</p>
                    <h2 class="govuk-heading-m">Ask for a review</h2>
                    <p class="govuk-body">You may want to ask for a review if you:</p>
                    <ul class='govuk-list govuk-list--bullet'>
                    <li>do not think we've considered all the information you gave us</li>
                    <li>think we've looked at the wrong information</li>
                    <li>have any extra information you'd like to give us</li>
                    <li>think our decision was wrong for another reason</li>
                    </ul>
                    <p class="govuk-body"><b>If you want to request a review, do this by 11:59pm on ||/meta/personalisation/expiry-date||.</b> We may be able to extend this date if there are exceptional circumstances.</p>
                    <p class="govuk-body">If your case is reviewed, a different person will review it. They might make the same decision or a different one.</p>
                    <p class="govuk-body">We cannot say how long a review will take. It depends on the circumstances of your claim.</p>
                    <p class="govuk-body">You can ask for a review yourself. You do not need to pay someone to do this for you. But if you choose to pay a legal representative, we cannot pay their fees.</p>
                    `
                }
            },
            examples: [{}],
            invalidExamples: [
                {
                    foo: 'bar'
                }
            ],
            options: {
                buttonText: 'Ask for a review',
                showSurvey: true
            }
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--ask-for-a-review'
                }
            ]
        }
    }
};
