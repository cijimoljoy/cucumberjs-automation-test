import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "chai";
import { TestDefaults } from "../../configs/testDefaults.config";
import { AddProductPage } from "../../page_objects/addProductPage";

const timeout = TestDefaults["timeout"];

Given(
  "that I am on the inventory shop page with an empty basket",
  { timeout },
  async function () {
    this.addProductPage = new AddProductPage();
    await this.addProductPage.intialisePage();

    const redirectionResult = await this.addProductPage.redirectTo("inventory.html");
    expect(redirectionResult).to.be.eq(true);
    
    const actualCount = await this.addProductPage.getBasketCount();
    expect(actualCount).to.be.eq(0);
  }
);

When("I click “Add to cart” on a product {string}", { timeout }, async function (productName) {
  await this.addProductPage.addProductToBasket(productName);
});

Then(
  "it will change the “Add to cart” button to “Remove” button of product {string}",
  { timeout },
  async function (productName) {
    const removeButtonExists = await this.addProductPage.verifyButtonStatus(productName,"REMOVE")
    expect(removeButtonExists).to.be.eq(true);
  }
);

Then(
  "it creates a counter on the basket icon with the value {string} in it",
  { timeout },
  async function (expectedCount) {
    const actualCount = await this.addProductPage.getBasketCount();
    expect(actualCount).to.be.eq(parseInt(expectedCount));
  }
);

Then(
  "it will increment the basket counter by “1”",
  { timeout },
  async function () {
    const verificationResult = await this.addProductPage.verifyProductCount();
    expect(verificationResult).to.be.eq(true);
  }
);
