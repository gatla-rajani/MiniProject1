
import assert from "assert";

const url = "http://automationpractice.com/";
const userEmail = "testing1806@gmail.com"
const pwd = "testinghere"

describe(`Sign IN to application`, () => {
    it(`Navigating to Study Test Mode`, () => {

    });
});



describe(`E2E -Login  , Add a product , Proceed to the checkout, Validate on the payments , Logout. `, () => {
    before(() => LoginUtility.login(envInfo));

    it(`Add a product to the cart`, () => {
    });

    it(`Proceed to the checkout page and continue till payments`, () => {
    });

    it(`Validate on the payments page if the product details are correct,`, () => {
    });

    it(`Log out from the application`, () => {
		LoginUtility.logout(envInfo);
	});

    after(() => {
	});
});