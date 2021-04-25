import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "chai";
import { TestDefaults } from "../../configs/testDefaults.config";
import { AddProductPage } from "../../page_objects/addProductPage";

const timeout = TestDefaults["timeout"];

Given('that I am on the inventory page with items in my basket', { timeout }, async function () {
    const redirectionResult = await this.addProductPage.redirectTo("inventory.html");
    expect(redirectionResult).to.be.eq(true);

    const actualCount = await this.addProductPage.getBasketCount();
    expect(actualCount).to.be.eq(1);
});

When('I click “Remove” on an item {string} I have in my basket', { timeout }, async function (productName) {
    await this.addProductPage.removeProduct(productName);
});

Then("it will change the “Remove” button to “Add to cart” button of product {string}",
    { timeout },
    async function (productName) {
        const removeButtonExists = await this.addProductPage.verifyButtonStatus(productName, "ADD TO CART")
        expect(removeButtonExists).to.be.eq(true);
    }
);

Then('it will reduce the basket counter icon accordingly',
    { timeout },
    async function () {
        const verificationResult = await this.addProductPage.verifyProductCount();
        expect(verificationResult).to.be.eq(true);
    }
);
