import { VercelCheckoutPage } from "../Page Object Models/vercel_Checkout_Page"
import { VercelShippingPage } from "../Page Object Models/vercel_Shipping_Page"

const vercelCheckoutPage = new VercelCheckoutPage()
const vercelShippingPage = new VercelShippingPage()

describe('Vercel Shipping Test', () => {

    it('Verify Users are redirected to Shipping Info Page', () => {

        vercelCheckoutPage.navigateToVercelCheckout()
        vercelCheckoutPage.maximizeTheWindow()

    })

    it('Verify validation messages are displayed when no required fields are filled & "Continue to shipping"  button is clicked', () => {

        vercelCheckoutPage.navigateToVercelCheckout()
        vercelCheckoutPage.maximizeTheWindow()
        vercelCheckoutPage.clickContinueShipping()
        vercelCheckoutPage.verifyEmailValidationMessageIsDisplayed()
        vercelCheckoutPage.verifyLastnameValidationMessageIsDisplayed()
        vercelCheckoutPage.verifyAddressValidationMessage()
        vercelCheckoutPage.verifyCityValidationMessage()
        vercelCheckoutPage.verifyStateValidationMessage()
        vercelCheckoutPage.verifyZipValidationMessage()

    })

    it('Verify guest users are navigated to "Shipping" sub tab when all valid information are provided & "Continue as shopping" button is clicked', () => {

        vercelCheckoutPage.navigateToVercelCheckout()
        vercelCheckoutPage.maximizeTheWindow()
        vercelCheckoutPage.enterEmail()
        vercelCheckoutPage.enterFirstname()
        vercelCheckoutPage.enterLastname()
        vercelCheckoutPage.searchAddress()
        vercelCheckoutPage.clickAddress()
        vercelCheckoutPage.enterCity()
        vercelCheckoutPage.clickContinueShipping()

   })

   it('Verify guest users are navigated to "Payment" subtab when "Continue to payment" button is clicked', () => {

        vercelCheckoutPage.navigateToVercelCheckout()
        vercelCheckoutPage.maximizeTheWindow()
        vercelCheckoutPage.enterEmail()
        vercelCheckoutPage.enterFirstname()
        vercelCheckoutPage.enterLastname()
        vercelCheckoutPage.searchAddress()
        vercelCheckoutPage.clickAddress()
        vercelCheckoutPage.enterCity()
        vercelCheckoutPage.clickContinueShipping()

        vercelShippingPage.clickContinueToPayment()

   })

})