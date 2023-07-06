describe('HOME spec', () => {
  it('LOAD HOME VIEW', () => {
    cy.visit('')
    cy.get('[data-testid="label-filter"]').should('have.html', '100')
  })

  it('FILTER RESULTS', () => {
    cy.visit('')
    cy.get('[data-testid="label-filter"]').should('have.html', '100')
    cy.get('[data-testid="filter"]').clear().type('drink champs')
    cy.get('[data-testid="label-filter"]').should('have.html', '1')
  })

  it('NAVIGATE TO PODCAST', () => {
    cy.visit('')
    cy.get('[data-testid="label-filter"]').should('have.html', '100')
    cy.get('[data-testid="filter"]').clear().type('drink champs')
    cy.get('[data-testid="label-filter"]').should('have.html', '1')
    cy.get('[data-testid="podcast-1096830182"]').click()
    cy.url().should('include', '/podcast/1096830182') //
  })
})