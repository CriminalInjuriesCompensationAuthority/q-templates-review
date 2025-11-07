'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'ask-for-a-review': {
                    title: 'Ask for a review',
                    description: `
                        <p class="govuk-body">We\'re going to ask about your reasons for asking for a review</p>
                        <p class="govuk-body">This will include if you want to send us supporting information along with your review.  
                        <p class="govuk-body">You may want to ask for a review if you:</p>
                        <ul class='govuk-list govuk-list--bullet'>
                        <li>do not think we’ve considered all the information you gave us</li>
                        <li>think we’ve looked at the wrong information</li>
                        <li>have any extra information you’d like to give us</li>
                        <li>think our decision was wrong for another reason</li>
                        </ul>
                        <p class="govuk-body">If your case is reviewed, a different person will review it. They might make the same decision or a different one.</p>
                        `
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
                    target: 'p--why-do-you-want-a-review'
                }
            ]
        }
    }
};
