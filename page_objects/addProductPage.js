//@ts-check
import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";

/**
 * implements add product page
 */
export class AddProductPage extends BasePage {
    /**
     * constructor
     */
    constructor() {
        super();
    }

    /**
     * initialize the page
     */
    async intialisePage() {
        this.listOfProducts = await this.driver.findElements(By.xpath("//div[@class='inventory_item_name']"));
        this.productCount = 0;
    }

    /**
     * adds the specified product to the basket
     * @param {string} productName 
     */
    async addProductToBasket(productName) {
        for (const product of this.listOfProducts) {
            if (await product.getText() === productName) {
                const addButton = await product.findElement(By.xpath("//ancestor::div[@class='inventory_item_label']/following-sibling::div/button"));
                await addButton.click();
                this.productCount = ++this.productCount;
                break;
            }
        }
    }

    /**
     * verifies the state of add or remove button
     * @param {string} productName 
     * @param {string} status 
     * @returns 
     */
    async verifyButtonStatus(productName, status) {
        for (const product of this.listOfProducts) {
            if (await product.getText() === productName) {
                const button = await product.findElement(By.xpath("//ancestor::div[@class='inventory_item_label']/following-sibling::div/button"));
                const buttonText = await button.getText();
                return buttonText === status
            }
        }
        return false;
    }

    /**
     * gets current cart count
     * @returns count
     */
    async getBasketCount() {
        try {
            this.productCounter = await this.driver.findElement(By.xpath("//div[@id='shopping_cart_container']/a/span"));
            return parseInt(await this.productCounter.getText());
        } catch (error) {
            return 0;
        }
    }

    /**
     * verifies cart count has incremented or not
     * @returns verification result
     */
    async verifyProductCount() {
        const currentBasketCount = await this.getBasketCount();
        return this.productCount === currentBasketCount;
    }

    /**
     * removes the specified product from the basket
     * @param {string} productName 
     */
    async removeProduct(productName) {
        for (const product of this.listOfProducts) {
            if (await product.getText() === productName) {
                const removeButton = await product.findElement(By.xpath("//ancestor::div[@class='inventory_item_label']/following-sibling::div/button"));
                await removeButton.click();
                this.productCount = --this.productCount;
                break;
            }
        }
    }
}