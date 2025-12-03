@review
Feature: journey for user with no supporting information

Scenario: user clicks decision
Given the user clicks the sign in link
Then the user is on page "p-decision"

Scenario: user is on decision page
Given the user is on page "p-decision"
When the user continues
Then the user is on page "p--context-review"
