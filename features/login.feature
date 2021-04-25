Feature: Login

    As a subscribed member I can log in using my credentials so that my account is securely accessible

    Scenario Outline: Blank username and password
        Given the browser "<browser>" is loaded
        And that I am on the login page
        When I click “Log in” with no username or password
        Then an error will be thrown below the form stating "Epic sadface: Username is required"

        Examples:
            | browser |
            | chrome  |
            | firefox |
            | edge    |

    Scenario Outline: Valid username and no password
        Given the browser "<browser>" is loaded
        And that I am on the login page
        And that I have entered a username but no password
        When I click “Log in”
        Then an error will be thrown below the form stating "Epic sadface: Password is required"
        Examples:
            | browser |
            | chrome  |
            | firefox |
            | edge    |

    Scenario Outline: Incorrect username and password
        Given the browser "<browser>" is loaded
        And that I am on the login page
        And that I have entered an incorrect username and password
        When I click “Log in”
        Then an error will be thrown below the form stating "Epic sadface: Username and password do not match any user in this service"
        Examples:
            | browser |
            | chrome  |
            | firefox |
            | edge    |

    Scenario Outline: Valid username and password
        Given the browser "<browser>" is loaded
        And that I am on the login page
        Given that I have entered a valid username and password
        When I click “Log in”
        Then it will successfully redirect me to "/inventory.html"
        Examples:
            | browser |
            | chrome  |
            | firefox |
            | edge    |