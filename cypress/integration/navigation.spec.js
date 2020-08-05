describe('Navigation', () => {
  it('navigates between mealplan and recipe page', () => {
    cy.visit('/');

    cy.get('[name="navbutton"]').click();
    cy.url().should('match', /recipes/);

    cy.get('[name="navbutton"]').click();
    cy.url().should('equal', 'http://localhost:3000/');
  });

  it('navigates between recipe page and recipe detail page', () => {
    cy.visit('/recipes');

    cy.get('#recipes li:eq(6) a').click();
    cy.url().should('equal', 'http://localhost:3000/recipes/7');

    cy.get('[data-testid="back-arrow"]').click();
    cy.url().should('match', /recipes/);
  });
});
