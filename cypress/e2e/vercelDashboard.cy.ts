import { VercelDashboardPage } from "../Page Object Models/vercel_Dashboard_Page";
import { VercelStorePage } from "../Page Object Models/vercel_Store_Page";

const vercelDahsboardPage =  new VercelDashboardPage()
const vercelStorePage = new VercelStorePage()

describe('Vercel Add To Cart Test', () => {
  beforeEach(() => {
    // 1. Visit the template page first (where "View Demo" lives)
    vercelDahsboardPage.navigateToVerclDashboardPage()
    vercelDahsboardPage.maximizeTheWindow()
    cy.wait(2000)

  });

  it('Verify Guest users are navigated to "Vercel Store" page when "View Demo" button is clicked on Vercel Dashboard page', () => {

      vercelDahsboardPage.clickViewDemo()
      cy.url().should('eq', 'https://demo.vercel.store/')

  })

})