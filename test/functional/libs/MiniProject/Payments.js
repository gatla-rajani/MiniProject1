
class Payments{


    getProccedtoLayoutButton(){
        return browser.element(`//div[@id='layer_cart']//a[@title='Proceed to checkout']`);
    }

    // * @param {pagenumber} page number '01'
    getProccedtoLayoutButtonSummaryPage(){
        return browser.element(`//div[./ul[@id='order_step']/li[contains(@class, 'step_current')]/span/em[text()='01.']]//a[@title='Proceed to checkout']`);        
    }


    getProccedtoLayoutButtonAddressPage(){
        return browser.element(`//div[./ul[@id='order_step']/li[contains(@class, 'step_current')]/span/em[text()='03.']]//button[@name='processAddress']`);        
    }

    getProccedtoLayoutButtonShippingPage(){
        return browser.element(`//div[./ul[@id='order_step']/li[contains(@class, 'step_current')]/span/em[text()='04.']]//button[@name='processCarrier']`);        
    }

    get getcheckboxInAddressPageObj(){
        return browser.element(`//div[./ul[@id='order_step']/li[contains(@class, 'step_current')]/span/em[text()='04.']]//input[@type='checkbox']`);        
    }

    get getProductNameShippingPageObj(){
        return browser.element("//div[./ul[@id='order_step']/li[contains(@class, 'step_current')]/span/em[text()='05.']]//td[@class='cart_description']/p/a");
    }

    getProductNameShippingPage(){
        return this.getProductNameShippingPageObj.getText();
    }

    getProductUnitShippingPage(){
        return browser.element(`//div[./ul[@id='order_step']/li[contains(@class, 'step_current')]/span/em[text()='05.']]//td[@class='cart_unit']/span/span`).getText();
    }
}


export default new Payments();

