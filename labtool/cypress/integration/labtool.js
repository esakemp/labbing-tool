
describe('Labtool tests ', () => {
  beforeEach('front page can be opened', () => {
    cy.visit(Cypress.config().baseUrl)
    cy.contains('Labtool')
  })

  it('Gets measurements', () => {
    cy.contains('Hemoglobiini')
    cy.contains('LDL-kolesteroli')
  })

  it('Can add measure', () => {
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
    cy.contains('test')
    cy.get('i#update.edit.outline.icon').eq(2).click()
    cy.get('#name').type('test change')
    cy.contains('save').click()

    cy.contains('change')
  })

  it('Delete measurement', () => {
    cy.contains('test change')
    cy.get('i#delete.trash.alternate.icon').eq(2).click()
    cy.contains('test').should('not.exist')
  })
})