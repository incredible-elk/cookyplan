describe('Navigation', () => {
  it('navigates between mealplan and recipe page', () => {
    cy.visit('/');

    cy.get('[name="navbutton"]').click();
    cy.url().should('match', /recipes/);

    cy.get('[name="navbutton"]').click();
    cy.url().should('include', '/');
  });
});
