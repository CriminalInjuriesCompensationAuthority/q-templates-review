@review
Feature: journey for user who starts at start or resume page

Scenario: the user navigates to account/dashboard
Given the user is on page "start-or-resume"
When the user navigates to page "/account/sign-in"
Then the user is on page "sign-in-or-create"

Scenario: the user is on page "sign-in-or-create"
Given the user is on page "sign-in-or-create"
And the user accepts analytics cookies
And the user selects sign in
And the user enters their one-login email
And the user continues
And the user enters their one-login password
And the user continues
And the user enters their security code
And the user continues
Then the user is on optional page "updated-terms-and-conditions"

Scenario: the user is on optional page "updated-terms-and-conditions"
Given the user is on optional page "updated-terms-and-conditions"
When the user continues from the optional page "updated-terms-and-conditions"
Then the user is on page "/account/dashboard"

Scenario: the user clicks the view application link
Given the user is on page "/account/dashboard"
When the user selects "view application"
Then the user is on page "/account/dashboard/{questionnaire-id}"

Scenario: the user clicks view decision link
Given the user is on page "/account/dashboard/{questionnaire-id}"
When the user selects "Read our decision about your applications"
Then the user is on page "p--decision"