import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";

/**
 * implements login page object
 */
export class LoginPage extends BasePage {
  /**
   * constructor
   */
  constructor() {
    super();
  }

  /**
   * initialise login page
   */
  async intialisePage() {
    this.userName = await this.driver.findElement(By.id("user-name"));
    this.password = await this.driver.findElement(By.id("password"));
    this.loginButton = await this.driver.findElement(By.id("login-button"));
  }

  /**
   * sign in
   * @param {string} username 
   * @param {string} password 
   */
  async enterCredentials(username, password) {
    await this.userName.sendKeys(username);
    await this.password.sendKeys(password);
  }

  /**
   * sign in
   */
  async signIn() {
    await this.loginButton.click();
  }

  /**
   * gets error message
   * @returns error meesage
   */
  async getErrorMessage() {
    return await this.driver.findElement(By.xpath("//h3[@data-test='error']")).getText();
  }
}