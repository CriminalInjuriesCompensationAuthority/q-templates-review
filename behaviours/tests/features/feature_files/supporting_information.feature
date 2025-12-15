@review
Feature: journey for user with supporting information

Scenario: user clicks decision link
Given the user clicks the sign in link
Then the user is on page "p--decision"

Scenario: user starts a review within allowed window and is presented with context page
Given the user is on page "p--decision"
When the user continues
Then the user is on page "p--context-ask-for-review"

Scenario: user is presented with context page before giving reasons for decision
Given the user is on page "p--context-ask-for-review"
When the user continues
Then the user is on page "p-reasons-for-review"

Scenario: user enters a valid reason
Given the user is on page "p-reasons-for-review"
When the user answers "reason" to the question "q-reasons-for-review"
And the user continues
Then the user is on page "p-has-supporting-information"

Scenario: user has supporting information to send
Given the user is on page "p-has-supporting-information"
When the user answers "Yes" to the question "p-has-supporting-information"
And the user continues
Then the user is on page "p--context-supporting-information"

Scenario: user is presented with guidance on how to send supporting information

Given the user is on page "p--context-supporting-information"
When the user continues
Then the user is on page "p--review-check-your-answers"

Scenario: user submits their review request
Given the user is on page "p--review-check-your-answers"
When the user continues
Then the user is on page "p--review-confirmation"
