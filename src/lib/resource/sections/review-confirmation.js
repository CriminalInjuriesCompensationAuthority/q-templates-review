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
                    description:`{{ govukPanel({
                                  titleText: "Review requested",
                                  html: "<p>Review requested</p>"
                                })}}`
                }
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
        type: 'final'
    }
};
