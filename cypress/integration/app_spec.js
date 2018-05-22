describe('App', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000/');
  });

  it('Should display Hello World!', function() {
    cy.contains('List of Names').should('be.visible');
  });

  it('Should display a name form', function() {
    cy.get('form').find('input').contains('Add name').click();
    cy.contains('Enter Name:').should('be.visible');
  });

  it('Should update the displayed name', function() {
    cy.get('form').find('input').contains('Add name').click();
    cy.get('.text')
      .type('Sam')
      .should('have.value', 'Sam')
    cy.get('form').find('input').contains('Add name').click();
    cy.contains('Sam').should('be.visible');
  });
});
