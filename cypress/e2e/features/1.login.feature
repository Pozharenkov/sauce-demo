Feature: Login Functionality

    Background:
        Given I am on the login page

    Scenario: 001 - Login as standard user and verify URL
        When I login with a "standard" user
        Then I should be redirected to the inventory page

    Scenario: 004 - Login as locked user and verify error
        When I login with a "locked" user
        Then I should see a locked out error message