it('Creating a Mealplan List', () => {
  cy.visit('/');
  cy.get('[name="listtitle"]').type('Tuesday');
  cy.get('[name="listtitle"]').should('have.value', 'Tuesday');

  cy.get('#meals li').eq(0).type('Burritos');
  cy.get('#meals li:eq(0) input[type=text]').should('have.value', 'Burritos');

  cy.get('[name="addbutton"]').click();

  cy.get('#meals li').eq(1).type('Falafel Wrap');
  cy.get('#meals li:eq(1) input[type=text]').should(
    'have.value',
    'Falafel Wrap'
  );

  cy.get('[name="addbutton"]').click();

  cy.get('#meals li').eq(2).type('Yakisoba');
  cy.get('#meals li:eq(2) input[type=text]').should('have.value', 'Yakisoba');

  cy.get('#meals li:eq(0) input[type=text]').clear();
  cy.get('#meals li:eq() input[type=text]').should('have.value', '');

  cy.get('#meals li').eq(0).type('Tacos');
  cy.get('#meals li:eq(0) input[type=text]').should('have.value', 'Tacos');

  cy.get('#meals li:eq(2) input[type=checkbox]').check();
  cy.get('#meals li:eq(2) input[type=checkbox]').should('be.checked');
  cy.get('#meals li:eq(2) input[type=text]').should(
    'have.css',
    'text-decoration',
    'line-through solid rgb(124, 128, 126)'
  );

  cy.get('#meals li:eq(0) input[type=checkbox]').check();
  cy.get('#meals li:eq(0) input[type=checkbox]').should('be.checked');
  cy.get('#meals li:eq(0) input[type=text]').should(
    'have.css',
    'text-decoration',
    'line-through solid rgb(124, 128, 126)'
  );

  cy.get('#meals li:eq(2) input[type=checkbox]').uncheck();
  cy.get('#meals li:eq(2) input[type=checkbox]').should('not.be.checked');

  cy.get('[name="listtitle"]').clear().type('Wednesday');
  cy.get('[name="listtitle"]').should('have.value', 'Wednesday');
});
