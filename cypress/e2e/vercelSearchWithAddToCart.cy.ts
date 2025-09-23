import { VercelStorePage } from "../Page Object Models/vercel_Store_Page";

const vercelStorePage = new VercelStorePage()

describe('Vercel Add To Cart Test', () => {

  it('Verify Guest users are navigated to "Vercel Store" page when "View Demo" button is clicked on Vercel Dashboard page', () => {

      vercelStorePage.navigateToVercelStore()
      vercelStorePage.maximizeTheWindow()
      cy.url().should('eq', 'https://demo.vercel.store/')

  })

  it('Verify Products are displayed as per serched text entered in search bar', () => {
    
     vercelStorePage.navigateToVercelStore()
     vercelStorePage.maximizeTheWindow()
     vercelStorePage.enterValidInput()

  })

  it('Verify Validation message is displayed when blank space is entered in the search bar & enter is hit from the keyboard', () => {

     vercelStorePage.navigateToVercelStore()
     vercelStorePage.maximizeTheWindow()
     vercelStorePage.enterBlankSpace()

  })

  it('Verify Validation message is displayed when a long alphanumeric string is entered in the search bar & enter is hit from the keyboard', () => {

     vercelStorePage.navigateToVercelStore()
     vercelStorePage.maximizeTheWindow()
     vercelStorePage.enterLongstring()
     vercelStorePage.verifySearchValidationMessage()

  })

  it('Verify guest users are redirected when products are clicked after successful search', () => {

     vercelStorePage.navigateToVercelStore()
     vercelStorePage.maximizeTheWindow()
     vercelStorePage.enterValidInput()
     vercelStorePage.clickProductA()

  })

  it('Verify guest users are able to view all colors product when right arrow or left arrow button is clicked', () => {

     
     vercelStorePage.navigateToVercelStore()
     vercelStorePage.maximizeTheWindow()
     vercelStorePage.enterValidInput()
     vercelStorePage.clickProductA()
     vercelStorePage.clickRightArrow()
     vercelStorePage.clickLeftArrow()

  })

   it('Verify guest users are able to view all colors product when specific color of product is clicked', () => {

     
     vercelStorePage.navigateToVercelStore()
     vercelStorePage.maximizeTheWindow()
     vercelStorePage.enterValidInput()
     vercelStorePage.clickProductA()
     vercelStorePage.clickProductB()
     vercelStorePage.clickProductC()

  })

  it('Verify NO products are displayed in the cart modal when NO product is added', () => {

     vercelStorePage.navigateToVercelStore()
     vercelStorePage.maximizeTheWindow()
     vercelStorePage.enterValidInput()
     vercelStorePage.clickProductA()
     vercelStorePage.clickCart()
     vercelStorePage.verifyCartIsEmpty()

  })


  it('Verify "Add To Cart" button is disabled when "Colro" & "Size" are NOT selected', () => {

     vercelStorePage.navigateToVercelStore()
     vercelStorePage.maximizeTheWindow()
     vercelStorePage.enterValidInput()
     vercelStorePage.clickProductA()
     vercelStorePage.verifyAddToCartIsDisabled()

  })

  it('Verify Color button is disabled when product is out of stock & toast message is displayed', () => {

     vercelStorePage.navigateToVercelStore()
     vercelStorePage.maximizeTheWindow()
     vercelStorePage.enterValidInput()
     vercelStorePage.clickProductA()
     vercelStorePage.verifyColorButtonIsDisabled()

  })

  it('Verify "Add To Cart" button is NOT disabled when only "Color is selected"' , () => {

     vercelStorePage.navigateToVercelStore()
     vercelStorePage.maximizeTheWindow()
     vercelStorePage.enterValidInput()
     vercelStorePage.clickProductA()
     vercelStorePage.clickProductColor()
     vercelStorePage.verifyAddToCartIsDisabled()

  })

  it('Verify "Add To Cart" button is enabled color & size is selected', () => {

     vercelStorePage.navigateToVercelStore()
     vercelStorePage.maximizeTheWindow()
     vercelStorePage.enterValidInput()
     vercelStorePage.clickProductA()
     vercelStorePage.clickProductColor()
     vercelStorePage.clickProductSize()

  })

  it('Verify "Cart" modal is opened when "Add To Cart" button is clicked', () => {

     vercelStorePage.navigateToVercelStore()
     vercelStorePage.maximizeTheWindow()
     vercelStorePage.enterValidInput()
     vercelStorePage.clickProductA()
     vercelStorePage.clickProductColor()
     vercelStorePage.clickProductSize()
     vercelStorePage.clickAddToCart()
     vercelStorePage.closeToastMessage()

  })

  it('Verify items can be removed when cross icon is clicked on product top left corner within the cart modal', () => {

     vercelStorePage.navigateToVercelStore()
     vercelStorePage.maximizeTheWindow()
     vercelStorePage.enterValidInput()
     vercelStorePage.clickProductA()
     vercelStorePage.clickProductColor()
     vercelStorePage.clickProductSize()
     vercelStorePage.clickAddToCart()
     vercelStorePage.closeToastMessage()
     vercelStorePage.clickCross()   

  })

  it('Verify items quantity can be increased or decreased when + or - button is clicked on product right or left side within the cart modal', () => {

     vercelStorePage.navigateToVercelStore()
     vercelStorePage.maximizeTheWindow()
     vercelStorePage.enterValidInput()
     vercelStorePage.clickProductA()
     vercelStorePage.clickProductColor()
     vercelStorePage.clickProductSize()
     vercelStorePage.clickAddToCart()
     vercelStorePage.closeToastMessage()
     vercelStorePage.clickPlusSign()
     vercelStorePage.clickMinusSign()   

  })



  it('Verify guest users are redirected to Checkout page when "Process To Checkout" button is clicked', () => {

     vercelStorePage.navigateToVercelStore()
     vercelStorePage.maximizeTheWindow()
     vercelStorePage.enterValidInput()
     vercelStorePage.clickProductA()
     vercelStorePage.clickProductColor()
     vercelStorePage.clickProductSize()
     vercelStorePage.clickAddToCart()
     vercelStorePage.closeToastMessage()
     vercelStorePage.clickProceedtoCheckout()

  })

})