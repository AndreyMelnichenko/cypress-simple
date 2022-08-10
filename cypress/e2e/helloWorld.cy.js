describe('Cypress home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('shoud display logo', () => {
    cy.get('h2')
      .should('have.length', 1)
      .should('have.text','Available Examples')
  })
})