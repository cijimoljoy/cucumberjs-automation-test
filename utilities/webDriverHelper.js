import { Builder, WebDriver } from "selenium-webdriver";
import edge from "@microsoft/edge-selenium-tools";

/**
 * implements webdriver helper
 */
export class WebDriverHelper {
  /** webdriver instance */
  static driver = new WebDriver();

  /**
   * sets web driver as per the provided `browser`
   * @param {string} browser
   */
  static async setWebDriver(browser) {
    switch (browser) {
      case "chrome":
      case "firefox":
        this.driver = await new Builder().forBrowser(browser).build();
        break;
      case "edge": {
        let options = new edge.Options();
        options.setEdgeChromium(true);
        this.driver = edge.Driver.createSession(options);
        break;
      }
      default:
        this.driver = await new Builder().forBrowser(browser).build();
        break;
    }
  }

  /**
   * quits the driver
   */
  static async quit() {
    if (this.driver) {
      await this.driver.quit();
      this.driver = null;
    }
  }
}
