import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "chai";
import { TestDefaults } from "../../configs/testDefaults.config";
import { LoginPage } from "../../page_objects/loginPage";

const timeout = TestDefaults.timeout;

Given("that I am on the login page", { timeout }, async function () {
  this.loginPage = new LoginPage();
  await this.loginPage.loadUrl(TestDefaults.url);  
  await this.loginPage.intialisePage();  
});

Given(
  "that I have entered a username but no password",
  { timeout },
  async function () {
    await this.loginPage.enterCredentials("standard_user", "");
  }
);

Given(
  "that I have entered an incorrect username and password",
  { timeout },
  async function () {
    await this.loginPage.enterCredentials("something", "something");
  }
);

Given(
  "that I have entered a valid username and password",
  { timeout },
  async function () {
    await this.loginPage.enterCredentials("standard_user", "secret_sauce");
  }
);

When(
  "I click “Log in” with no username or password",
  { timeout },
  async function () {
    await this.loginPage.signIn();
  }
);

When("I click “Log in”", { timeout }, async function () {
  await this.loginPage.signIn();
});

Then(
  "it will successfully redirect me to {string}",
  { timeout },
  async function (redirectUri) {
    const redirectionResult = await this.loginPage.redirectTo(redirectUri);
    expect(redirectionResult).to.be.eq(true);
  }
);

Then(
  "an error will be thrown below the form stating {string}",
  { timeout },
  async function (errorMessage) {
    const actualMessage = await this.loginPage.getErrorMessage();
    expect(actualMessage).to.be.eq(errorMessage);
  }
);
