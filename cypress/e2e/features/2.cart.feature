Feature: Cart Functionality

    Background:
        Given I am on the login page

    Scenario: 002 - Login as standard user, add item to cart and verify
        Given I am logged in as a "standard" user
        When I add "Sauce Labs Backpack" to the cart
        Then The cart badge should show "1"
        And The remove button should be visible for "Sauce Labs Backpack"

    @known-bug
    Scenario: 003 - Login as problem user and check onesie image
        Given I am logged in as a "problem" user
        Then The image for "Sauce Labs Onesie" should match the expected onesie image

    @known-bug
    Scenario: 005 - Login as error user and add fleece jacket
        Given I am logged in as a "error" user
        When I add "Sauce Labs Fleece Jacket" to the cart
        Then The cart badge should show "1"