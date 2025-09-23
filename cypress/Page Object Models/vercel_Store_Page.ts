export class VercelStorePage{

    search = "//input[@name='q']"
    productA = "//img[@alt='Acme Circles T-Shirt']"
    productB = "//img[@alt='Acme Circles T-Shirt - t-shirt-2']"
    productC = "//img[@alt='Acme Circles T-Shirt - t-shirt-circles-blue']"
    cart = "//div[@class='relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white']"
    addToCart = "//button[contains(@class, 'bg-blue-600')]"
    outOfStockProduct = "//button[contains(., 'Blue')]"
    productColor = "//button[.='White']"
    productSize = "//button[.='XS']"
    proceedToCheckout = "//button[contains(text(),'Proceed to Checkout')]"

    closeToast = "//button[@aria-label='Close toast']"

    validationMessage = "//p[@class='mb-4']"
    verifyEmptyCart = "//p[@class='mt-6 text-center text-2xl font-bold']"

    rightArrow = "//div[@class='mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80']/button[2]"
    leftArrow = "//div[@class='mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80']/button[1]"
    

    cross = "//button[@class='flex h-[24px] w-[24px] items-center justify-center rounded-full bg-neutral-500']"
    plusSign = "//button[@class='ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80']"
    minusSign = "//button[@class='ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto']"

    navigateToVercelStore(){

         cy.fixture('vercelNavigationTestData.json').then((vercelLandingPageTestData) => {

            cy.visit(vercelLandingPageTestData.vercel_store_url)
            cy.wait(2000)

        })

    }

    maximizeTheWindow(){

        cy.viewport(window.screen.width, window.screen.height)

    }

    enterBlankSpace(){

        cy.fixture('vercelStoreTestData.json').then((vercelStorePageTestData) => {

             cy.xpath(this.search)
            .type(vercelStorePageTestData.searchWithBlankSpace + '{enter}')

        }) 

    }

    enterLongstring(){

        cy.fixture('vercelStoreTestData.json').then((vercelStorePageTestData) => {

             cy.xpath(this.search)
            .type(vercelStorePageTestData.searchWithAlphanumericLongString + '{enter}')

        }) 

    }

    enterValidInput(){

        cy.fixture('vercelStoreTestData.json').then((vercelStorePageTestData) => {

             cy.xpath(this.search)
            .type(vercelStorePageTestData.searchWithValidInput + '{enter}')

        })       

    }

    clickProductA(){

        cy.xpath(this.productA)
        .click()
        .wait(2000)


    }

    verifyAddToCartIsDisabled(){

        cy.xpath(this.addToCart)
        .should('be.disabled');


    }

    verifyColorButtonIsDisabled(){

        cy.xpath(this.outOfStockProduct)
        .should('be.disabled')
        .and('have.attr', 'title', 'Color Blue (Out of Stock)')

    }

    clickProductColor(){

        cy.xpath(this.productColor)
        .click()

    }

    clickProductSize(){

        cy.xpath(this.productSize)
        .click()

    }

    clickAddToCart(){

        cy.xpath(this.addToCart)
        .click()
        .wait(2000)

    }

    closeToastMessage(){

        cy.xpath(this.closeToast)
        .click()

    }

    clickProceedtoCheckout(){

        cy.xpath(this.proceedToCheckout)
        .click()

    }

    verifySearchValidationMessage(){

        cy.xpath(this.validationMessage)
        .should('be.visible')

    }

    clickRightArrow(){

        cy.xpath(this.rightArrow)
        .click()

    }

    clickLeftArrow(){

        cy.xpath(this.leftArrow)
        .click()

    }

    clickProductB(){

        cy.xpath(this.productB)
        .click()
        .wait(2000)

    }

     clickProductC(){

        cy.xpath(this.productC)
        .click()

    }

    clickCart(){

        cy.xpath(this.cart)
        .click()

    }

    verifyCartIsEmpty(){

        cy.xpath(this.verifyEmptyCart)
        .should('be.visible')

    }

    clickCross(){

        cy.xpath(this.cross)
        .click()

    }

    clickPlusSign(){

        cy.xpath(this.plusSign)
        .click()
        .wait(2000)

    }

    clickMinusSign(){

        cy.xpath(this.minusSign)
        .click()

    }


}