import CreateAccount from "./CreateAccount";

class LandingPage{

	get createEmail() {
		return browser.element('#email_create');
	}

    get enterEmail() {		
        return browser.element('#email')
	}

    get enterPwd() {		
        return browser.element('#passwd')
	}

    get createAccountButton() {		
        return browser.element('#SubmitCreate')
	}

    get signInButton(){
        return browser.element('#SubmitLogin')
    }

    get CreateAccount() {
        return new CreateAccount();
    }

    get getSignInButton() {
        return browser.element('//a[@title="Log in to your customer account"]');
    }

    get getSuscessMessage() {
        return browser.element('.info-account');
    }

    get getSignOutButton() {
        return browser.element('//a[@title="Log me out"]');
    }


    
	clickSignInButton(){
        this.getSignInButton.click()
    }

    signInAccount(overrideUrl, value){
        browser.url(overrideUrl);
        browser.windowHandleMaximize();
        this.clickSignInButton();
        this.createEmail.waitForVisible();
        this.createEmail.setValue(value);
        this.createAccountButton.click();

    }

    loginAccount(overrideUrl, username, pwd){
        browser.url(overrideUrl);
        browser.windowHandleMaximize();
        this.clickSignInButton();
        this.enterEmail.waitForVisible();
        this.enterEmail.setValue(username);
        this.enterPwd.setValue(pwd);
        this.signInButton.click();
    }

    logoutAccount(){
        this.getSignOutButton.waitForVisible();
        this.getSignOutButton.click();
    }

}

export default new LandingPage();






