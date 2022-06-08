describe('Smoke Test', () => {
  it('Can view the homepage', () => {
    cy.visit('/');
    cy.contains('Learn React');
  });
});
