describe('PODCAST DETAIL spec', () => {

  it('PODCAST DETAIL LOAD', () => {
    cy.visit('')
    cy.get('[data-testid="label-filter"]').should('have.html', '100')
    cy.get('[data-testid="filter"]').clear().type('drink champs')
    cy.get('[data-testid="label-filter"]').should('have.html', '1')
    cy.get('[data-testid="podcast-1096830182"]').click()
    cy.url().should('include', '/podcast/1096830182')
    cy.get('[data-testid="podcast-summary-1096830182"]').should('exist')
    cy.get('[data-testid="podcast-episode-list"]').should('exist')

  })

  it('NAVIGATE PODCAST EPISODE', () => {
    cy.visit('')
    cy.get('[data-testid="label-filter"]').should('have.html', '100')
    cy.get('[data-testid="filter"]').clear().type('drink champs')
    cy.get('[data-testid="label-filter"]').should('have.html', '1')
    cy.get('[data-testid="podcast-1096830182"]').click()
    cy.url().should('include', '/podcast/1096830182')
    cy.get('[data-testid="podcast-summary-1096830182"]').should('exist')
    cy.get('[data-testid="podcast-episode-list"]').should('exist')
    cy.get('[data-testid="podcast-episode-1"]').click()
    cy.url().should('include', '/podcast/1096830182/episode')
    cy.get('[data-testid="podcast-player"]').should('exist')


  })

  it('PLAY PODCAST EPISODE', () => {
    cy.visit('')
    cy.get('[data-testid="label-filter"]').should('have.html', '100')
    cy.get('[data-testid="filter"]').clear().type('drink champs')
    cy.get('[data-testid="label-filter"]').should('have.html', '1')
    cy.get('[data-testid="podcast-1096830182"]').click()
    cy.url().should('include', '/podcast/1096830182')
    cy.get('[data-testid="podcast-summary-1096830182"]').should('exist')
    cy.get('[data-testid="podcast-episode-list"]').should('exist')
    cy.get('[data-testid="podcast-episode-1"]').click()
    cy.url().should('include', '/podcast/1096830182/episode')
    cy.get('[data-testid="podcast-player"]').click()

    cy.get('source')
      .invoke('attr', 'src')
      .then((audiofile) => {
        const audio = new Audio(audiofile);
        audio.play();
      });


  })
})