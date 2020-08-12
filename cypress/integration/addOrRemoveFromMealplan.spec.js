describe('Add and remove recipe from Mealplan', () => {
  it('Adds recipe to Mealplan ', () => {
    cy.visit('/recipes');

    cy.get('#recipes li:eq(3) a').click();
    cy.get('[data-testid="add-or-remove-from-mealplan"]').click();

    cy.visit('/');
    cy.get('#meals li').eq(0);
    cy.get('#meals li:eq(0) input[type=text]').should(
      'have.value',
      'Banoffee Pie'
    );
  });

  it('Removes recipe from Mealplan', () => {
    cy.visit('/');

    cy.visit('/recipes');
    cy.get('#recipes li:eq(4) a').click();
    cy.get('[data-testid="add-or-remove-from-mealplan"]').click();

    cy.visit('/recipes');

    cy.get('#recipes li:eq(3) a').click();
    cy.get('[data-testid="add-or-remove-from-mealplan"]').click();

    cy.get('[data-testid="add-or-remove-from-mealplan"]').click();

    cy.visit('/');
    cy.get('#meals li:eq(0) input[type=text]').should(
      'not.have.value',
      'Banoffee Pie'
    );
  });
});
