describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.sp.senac.br')

    cy.get('.mburger').click()

    cy.get('#txtLoginNaoLogadoMob').click()

    cy.get('#login-email').type('carlaodahornet23@hotmail.com')
    cy.get('#login-password').type('carlinhos54321')
    cy.get('#btnLoginHeader').click()

  })

})