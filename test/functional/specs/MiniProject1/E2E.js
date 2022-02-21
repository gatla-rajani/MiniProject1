
import assert from 'assert';
import LandingPage from '../../libs/MiniProject/LandingPage';
import CreateAccount from '../../libs/MiniProject/CreateAccount';
import AddItemToCart from '../../libs/MiniProject/AddItemToCart';
import Payments from '../../libs/MiniProject/Payments';


const url = 'http://automationpractice.com/';
const userEmail = 'testing1827@gmail.com';
const pwd = 'testinghere';
const checkValue = 'Welcome to your account. Here you can manage all of your personal information and orders.'
let productName = null ;
let price = null;

describe(`Sign IN to application and log out`, () => {
    it(`Sign IN to application`, () => { 
        
        LandingPage.signInAccount(url, userEmail);

       const values = 
            {
                title : 'Mr',
                firstName : 'testing',
                lastName : 'test',
                email : userEmail,
                pwd : pwd,
                month : 'May',
                day : '5',
                year : '1984',
                specialOffers: true,
                newsLetter: true,
                // firstNameA :'testing',
                // lastNameA :'test',
                company : 'testcompany',
                address1 : 'testing',
                address2 : 'testing',
                city : 'testing',
                state : 'Hawaii',
                country : 'United States',
                zip : '60008',
                additionalInfo :  'None',
                homePhone : '890765878',
                mobilePhone : '890765878',
                addressAlias : 'homeAddress',
            };
        

        //create account
        CreateAccount.setValues(values);
        browser.pause(2000);

        //verify account creation is successully
        const message = $('.info-account').getText();
        assert.deepEqual(message, checkValue, "Account creation message not as expected: " + checkValue + " , found: " + message );

        // logout of application
        LandingPage.logoutAccount();

    });
});



describe(`E2E -Login  , Add a product , Proceed to the checkout, Validate on the payments , Logout. `, () => {
    before(() => LandingPage.loginAccount(url, userEmail,pwd ));

    it(`Verify login success message`, () => {
        //verify login page        
        const message = $('.info-account').getText();
        assert.deepEqual(message, checkValue, "Account creation message not as expected: " + checkValue + " , found: " + message );
    });

    it(`Add a product to the cart`, () => {

        //Click on Women; //Click on Casual dress
        AddItemToCart.getAddCartPageLink('Women').click();
        // AddItemToCart.getAddCartPageLink('Casual Dresses').click();        
        $('//*[@id="center_column"]/ul').waitForVisible();

        browser.pause(2000);
        console.log("waited for browser to load");

        //click on item
        console.log(AddItemToCart.getItem('1').isVisible());
       assert(AddItemToCart.getItem('1').isVisible(),"First item is not visible in the cart");

       productName = AddItemToCart.getProductName('1');
       console.log(productName);
       price = AddItemToCart.getProductPrice('1');
       console.log(price);

       AddItemToCart.getItem('1').click();

       AddItemToCart.getAddButton(1).click();  

       Payments.getProccedtoLayoutButton().waitForVisible();

       Payments.getProccedtoLayoutButton().click();  
       
       browser.pause(10000);
    });


    it(`Go to Payments page and verify details`, () => {

        Payments.getProccedtoLayoutButtonSummaryPage().waitForVisible();

        Payments.getProccedtoLayoutButtonSummaryPage().click();

        assert(Payments.getProccedtoLayoutButtonAddressPage().isVisible(),"Address page Proceed for Payment button not visible");

        Payments.getProccedtoLayoutButtonAddressPage().click();

        browser.pause(1000);

        //Select the checkbox
        // console.log(Payments.getcheckboxInAddressPageObj.isVisible());

        // Payments.getcheckboxInAddressPageObj.waitForVisible();

        // if(Payments.getcheckboxInAddressPageObj.isVisible())
         Payments.getcheckboxInAddressPageObj.click();

        Payments.getProccedtoLayoutButtonShippingPage().click();

        assert(Payments.getProductNameShippingPageObj.isVisible(),"Shipping page Product name is not visible");

        let foundProductName = Payments.getProductNameShippingPage();

        assert.deepEqual(foundProductName,productName, 'Product name added is not as the one in shipping page, found:' + foundProductName + ' , expected:' +  productName)

        let foundProductUnit = Payments.getProductUnitShippingPage();

        assert.deepEqual(foundProductUnit,price, 'Product name unit added is not as the one in shipping page, found:' + foundProductUnit + ' , expected:' +  price)
        
    });

    after(() => {

	});
});

