import assert from 'assert';


class CreateAccount{

    // constructor() {
	// 	this.container.waitForText();
	// }
	// /**
	//  * @type {WebElement}
	//  */
	// get container() {
	// 	return browser.element(`#columns`);
	// }

    getTitle(option){
        console.log(option);
        if(option == 'Mr') return browser.element('#id_gender1');
        else if(option == 'Mrs') return browser.element('#id_gender2')  ;
    } 

    get getFirstName(){
        return browser.element('#customer_firstname')  
    } 

    get getLastName(){
        return browser.element('#customer_lastname')  
    } 

    get getEmail(){
        return browser.element('#email')  
    } 

    emailValue(){
        return this.getEmail.getValue();
    } 

    get getPwd(){
        return browser.element('#passwd')  
    } 

    get getDate_DOB(){
        return browser.element('#days')  
    } 

    get getMonth_DOB(){
        return browser.element('#months')  
    } 

    get getYear_DOB(){
        return browser.element('#years')  
    } 

    get getNewsLetter(){
        return browser.element('#newsletter')  
    } 

    get getSpecialOffer(){
        return browser.element('#optin')  
    } 

    get getFirstNameAddress(){
        // $('#firstname').scrollIntoView();
        return browser.element('#firstname')  
    } 

    get getLastNameAddress(){
        return browser.element('#lastname')  
    } 

    get getCompany(){
        return browser.element('#company')  
    } 

    get getAddress1(){
        return browser.element('#address1')  
    } 

    get getAddress2(){
        // $('#submitAccount').scrollIntoView();
        return browser.element('#address2')  
    } 

    get getCity(){
        return browser.element('#city')  
    } 

    get getState(){
        return browser.element('#id_state')  
    } 

    get getZip(){
        return browser.element('#postcode')  
    } 

    get getCountry(){
        return browser.element('#id_country')  
    }

    get getAdditionalInfo(){
        return browser.element('#other')  
    }

    get getHomePhone(){
        return browser.element('#phone')  
    }

    get getMobilePhone(){
        return browser.element('#phone_mobile')  
    }

    get getAddressAlias(){
        return browser.element('#alias')  
    }

    get getRegisterButton(){
        return browser.element('#submitAccount')  
    }



    /**
     * Set the values to create a new account
     *
     * @param {object} values
     * @param {string} values.title     - The Title of the Visit
     * @param {string} values.firstName        - user first
     * @param {string} values.lastName      - user last name
     * @param {string} values.email       -email
     * @param {string} values.pwd  
     * @param {string} values.date
     * @param {string} values.month       - The Title of the Visit
     * @param {string} values.year        - user first
     * @param {string} values.firstNameA  - user last name
     * @param {string} values.lastNameA    -Last name
     * @param {string} values.company  
     * * @param {string} values.address1  
     * * @param {string} values.address2  
     * * @param {string} values.city  
     * * @param {string} values.state  
     * * @param {string} values.getZip  
     * * @param {string} values.additionalInfo  
     * * @param {string} values.homePhone  
     * * * @param {string} values.mobilePhone  - mobile phone
     * * * @param {string} values.addressAlias  - Address alias
     * 
     */

setValues(values){ 

            this.getFirstName.waitForVisible();

		    this.getTitle(values.title).click();
            this.getFirstName.setValue(values.firstName);
            this.getLastName.setValue(values.lastName);
            this.getPwd.setValue(values.pwd);

            const checkValue = this.emailValue();            
            assert.deepEqual(values.email, checkValue, "Account page email field is not as expected: " + values.email + " , found: " + checkValue );

            
            this.getDate_DOB.selectByVisibleText(values.day);
            this.getMonth_DOB.selectByVisibleText(values.month);
            this.getYear_DOB.selectByVisibleText(values.year);

            if(values.newsLetter) this.getNewsLetter.click();
            if(values.specialOffers) this.getSpecialOffer.click();

            // this.getFirstNameAddress.setValue(values.firstNameA);
            // this.getLastNameAddress.setValue(values.lastNameA);
            // browser.pause(2000);

            this.getCompany.setValue(values.company);

            this.getAddress1.setValue(values.address1);
            this.getAddress2.setValue(values.address2);

            this.getCity.setValue(values.city);


            this.getZip.setValue(values.zip);

            this.getAdditionalInfo.setValue(values.additionalInfo);

            this.getHomePhone.setValue(values.homePhone);
            
            this.getMobilePhone.setValue(values.mobilePhone);
            
            this.getAddressAlias.setValue(values.addressAlias);
           
            this.getState.selectByVisibleText(values.state);
            this.getCountry.selectByVisibleText(values.country);
            this.getRegisterButton.click();
     } 


};

// export default new CreateAccount();

export default new CreateAccount;