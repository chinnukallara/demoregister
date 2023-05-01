Feature: The Automation Testing Website demo

  Scenario Outline: As a user, Performing Login

    Given I am on the login page
    When I enter the <username> and <password>
    Then I enter a valid page

    Examples:
        |username|password|
        |chinnu|chinnu123|
        