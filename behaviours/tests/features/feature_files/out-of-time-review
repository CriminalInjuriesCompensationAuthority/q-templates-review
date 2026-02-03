@review
feature: journey for user when review is out of time

Scenario: user clicks decision link
Given the user clicks the sign in link
Then the user is on page "p--decision"

Scenario: user starts a review out with allowed window and is presented with context page
Given the user is on page "p--decision"
When the user continues
Then the user is on page "p--context-ask-for-review"

Scenario: user is presented with context page before giving reasons for missing the deadline for review
Given the user is on page "p--context-ask-for-review"
When the user continues
Then the user is on page "p-deadline-for-review"

Scenario: user enters a valid reason
Given the user is on page "p-deadline-for-review"
When the user answers "reason" to the question "q-deadline-for-review"
And the user continues
Then the user is on page "p-reasons-for-review"
