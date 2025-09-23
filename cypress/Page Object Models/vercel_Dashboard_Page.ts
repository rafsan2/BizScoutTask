export class VercelDashboardPage {

    navigateToVerclDashboardPage(){

        cy.fixture('vercelNavigationTestData.json').then((vercelLandingPageTestData) => {

            cy.visit(vercelLandingPageTestData.test_url)
            cy.wait(2000)

        })

    }

    maximizeTheWindow(){

        cy.viewport(window.screen.width, window.screen.height)

    }

    clickViewDemo(){

            // 2. Find the "View Demo" link / button
        cy.contains('View Demo')
        // ensure it has an href attribute (optional check)
        .should('have.attr', 'href')
        .then((href) => {
            // Option A: remove target so it opens in same tab
            cy.contains('View Demo')
            .invoke('removeAttr', 'target')
            .click();

            // Option B: directly visit href (as fallback)
            // cy.visit(href);
        })

    }

}