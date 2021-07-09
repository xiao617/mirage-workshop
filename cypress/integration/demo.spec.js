
describe("Test Mirage", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000/my-event")
    })
    afterEach(() => {

    })
    it("POST & GET", () => {
        cy.get('#inputArea').type('mirage')
        cy.get('button#subBtn').click()
        cy.wait(1000)
        cy.get('#inputArea').clear().type('workshop')
        cy.get('button#subBtn').click()
        cy.wait(1000)
        cy.get('#inputArea').clear().type('at')
        cy.get('button#subBtn').click()
        cy.wait(1000)
        cy.get('#inputArea').clear().type('TSID')
        cy.get('button#subBtn').click()
        cy.wait(1000)
    })
    
    
})