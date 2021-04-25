//@ts-check
import { After, Before } from "@cucumber/cucumber";
import { WebDriverHelper } from "../../utilities/webDriverHelper";

Before(async function () {
  // common logic that needs to be run before each scenario goes here
});

After(async function () {
  if (WebDriverHelper.driver) {
    await WebDriverHelper.quit();
  }
});
