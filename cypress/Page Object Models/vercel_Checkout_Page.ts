export class VercelCheckoutPage{

    email = "//input[@id='email']"
    firstName = "//div[@class='r62YW']/div[@class='_1ip0g651 _1ip0g650 _1fragemn2 _1fragem50 _1fragem6t _1fragem41']//input[@name='firstName']"
    lastName = "//div[@class='r62YW']/div[@class='_1ip0g651 _1ip0g650 _1fragemn2 _1fragem50 _1fragem6t _1fragem41']//input[@name='lastName']"
    address = "//input[@class='_7ozb2uq _7ozb2up _1fragemn2 _1fragemuo _1fragemq0 _1fragemtt _7ozb2ut _7ozb2us _1fragemua _1fragemu5 _1fragemuk _7ozb2u11 _7ozb2uv _7ozb2uu _1fragemqo _1fragemr0 _7ozb2u16 _7ozb2u1o _7ozb2ur']"
    city = "//div[@class='r62YW']/div[@class='_1ip0g651 _1ip0g650 _1fragemn2 _1fragem50 _1fragem6t _1fragem41']//input[@name='city']"
    state = "//select[@name='zone']"
    selectAddress = "//li[.='47 W 13th St, New York, NY 10011, USA']"

    continueShipping = "._1m2hr9ge"

    emailValidationMessage = "//p[@id='error-for-email']"
    lastNameValidationMessage = "//p[.='Enter a last name']"
    addressValidationMessage = "//p[.='Enter an address']"
    cityValidationMessage = "//p[.='Enter a city']"
    stateValidationMessage = "//p[.='Select a state / province']"
    zipValidationMessage = "//p[.='Select a state / province']"

    navigateToVercelCheckout(){

         cy.fixture('vercelNavigationTestData.json').then((vercelCheckoutPageTestData) => {

            cy.visit(vercelCheckoutPageTestData.vercel_checkout_url)
            cy.wait(2000)

        })

    }

    maximizeTheWindow(){

        cy.viewport(window.screen.width, window.screen.height)

    }
    enterEmail(){

         cy.fixture('vercelInformationTestData.json').then((data) => {

             cy.xpath(this.email)
             .type(data.email)

        })       

    }
    enterFirstname(){

         cy.fixture('vercelInformationTestData.json').then((data) => {

             cy.xpath(this.firstName)
             .type(data.firstName)

        })

    }

    enterLastname(){

        cy.fixture('vercelInformationTestData.json').then((data) => {

             cy.xpath(this.lastName)
             .type(data.lastName)

        })

    }

    searchAddress(){

        cy.fixture('vercelInformationTestData.json').then((data) => {

             cy.xpath(this.address)
             .type(data.address)
             .wait(2000)

        })

    }

    clickAddress(){

        cy.xpath(this.selectAddress)
        .click()

    }

    enterCity(){

        cy.fixture('vercelInformationTestData.json').then((data) => {

             cy.xpath(this.city)
             .type(data.city)
             .wait(2000)

        })

    }


    clickContinueShipping(){

        cy.get(this.continueShipping)
        .click()

    }

    verifyEmailValidationMessageIsDisplayed(){

        cy.xpath(this.emailValidationMessage)
        .should('be.visible')

    }

    verifyLastnameValidationMessageIsDisplayed(){

        cy.xpath(this.lastNameValidationMessage)
        .should('be.visible')

    }

    verifyAddressValidationMessage(){

        cy.xpath(this.addressValidationMessage)
        .should('be.visible')

    }

    verifyCityValidationMessage(){

         cy.xpath(this.cityValidationMessage)
        .should('be.visible')

    }

    verifyStateValidationMessage(){

         cy.xpath(this.stateValidationMessage)
        .should('be.visible')

    }

    verifyZipValidationMessage(){

         cy.xpath(this.zipValidationMessage)
        .should('be.visible')

    }

}