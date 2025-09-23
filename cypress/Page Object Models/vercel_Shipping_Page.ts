export class VercelShippingPage{

    continueToPayment = "//button[@class='_1m2hr9ge _1m2hr9gd _1fragemul _1fragemn2 _1fragemp4 _1fragemty _1fragemue _1fragemug _1fragemu5 _1m2hr9g1p _1m2hr9g1l _1fragemoy _1m2hr9g1f _1m2hr9g1c _1fragemu4 _1fragemts _1m2hr9g20 _1m2hr9g1x _1m2hr9g16 _1m2hr9g13 _1m2hr9gh _1m2hr9gf _1fragem32 _1m2hr9g1w _1m2hr9g19 _1m2hr9g17 _1fragemq0 _1m2hr9g1k']"

    clickContinueToPayment(){

        cy.xpath(this.continueToPayment)
        .click()


    }
}