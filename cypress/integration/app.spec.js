// nprogress

describe('App tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('loads expected data', () => {
    cy.get('.rounded-full').click()
    cy.get('a[href*="about"]').click()
    cy.get('#nprogress').should('exist')
  })
})
