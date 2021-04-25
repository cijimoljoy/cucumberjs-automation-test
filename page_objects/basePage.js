//@ts-check
import { WebDriverHelper } from "../utilities/webDriverHelper";

/**
 * Implements base page for all page objects
 */
export class BasePage {
  constructor() {
    this.driver = WebDriverHelper.driver;
  }

  /**
   * loads the provided url in the browser
   * @param {string} url
   */
  async loadUrl(url) {
    await this.driver.get(url);
  }

  /**
   * redirects to a new page and returns the redirection result
   * @param {string} redirectUri
   * @returns redirection result
   */
  async redirectTo(redirectUri) {
    const currentUrl = await this.driver.getCurrentUrl();
    return currentUrl.endsWith(redirectUri);
  }
}
