
class AddItemToCart{

    // constructor() {
	// 	this.container.waitForText();
	// }
	// /**
	//  * @type {WebElement}
	//  */
	// get container() {
	// 	return browser.element(`//*[@id="center_column"]`);
	// }

    getAddCartPageLink(linkname){
        return browser.element(`//a[@title='${linkname}']`); ////*[text()='Women']
    }

    getProductName(itemcount){
        return browser.element(`//*[@id='center_column']/ul/li[${itemcount}]//div[@class='right-block']//a[@class='product-name']`).getText().trim() ;
    }

    getProductPrice(itemcount){
        return browser.element(`//*[@id='center_column']/ul/li[${itemcount}]//div[@class='right-block']//div[@class='content_price']/span`).getText().trim() ;
    }

    getAddButton(itemcount){
        return browser.element(`//*[@id='center_column']/ul/li[${itemcount}]//div[@class='right-block']/div[@class='button-container']/a[@title='Add to cart']`);
    }

    getItem(itemcount){
        return browser.element(`//*[@id="center_column"]/ul/li[${itemcount}]`);
    }

}


export default new AddItemToCart();

