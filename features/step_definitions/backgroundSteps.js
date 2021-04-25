import { Given } from "@cucumber/cucumber";
import { TestDefaults } from "../../configs/testDefaults.config";
import { WebDriverHelper } from "../../utilities/webDriverHelper";

const timeout = TestDefaults["timeout"];

Given("the browser {string} is loaded", { timeout }, async function (browser) {
  await WebDriverHelper.setWebDriver(browser);
});
