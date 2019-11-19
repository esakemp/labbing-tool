
describe('Labtool tests ', () => {
  beforeEach('front page can be opened', () => {

    cy.request('POST', 'http://localhost:3001/api/v1/testing/reset')

    cy.visit(Cypress.config().baseUrl)
    cy.contains('Labtool')
  })

  it('Gets measurements', () => {
    cy.contains('Hemoglobiini')
    cy.contains('LDL-kolesteroli')
  })

  it('Can add measurement', () => {
    cy.contains('create').click()
    cy.get('#name').type('test')
    cy.get('#unit').type('mmol/l')
    cy.get('#lowerbound').type('14')
    cy.get('#upperbound').type('100')
    cy.contains('save').click()

    cy.contains('test')
    cy.contains('100')
  })

  it('Can edit measurement', () => {
    cy.contains('LDL-kolesteroli')
    cy.get('i#update.edit.outline.icon').eq(1).click()
    cy.get('#name').clear().type('test change')
    cy.contains('save').click()

    cy.contains('test change')
    cy.contains('LDL-kolesteroli').should('not.exist')

  })

  it('Can delete measurement', () => {
    cy.contains('LDL-kolesteroli')
    cy.get('i#delete.trash.alternate.icon').eq(1).click()
    cy.contains('LDL-kolesteroli').should('not.exist')
  })
})