describe('Listing restaurants', () => {
  it('show restaurant from the server', () => {
    const mcdonald = "McDonald's";
    const zrestaurant = 'Restaurant le Z';

    cy.intercept('https://api.outsidein.dev/*/restaurants', [
      {
        id: 1,
        name: mcdonald,
      },
      {
        id: 2,
        name: zrestaurant,
      },
    ]);

    cy.visit('/');
    cy.contains(mcdonald);
    cy.contains(zrestaurant);
  });
});
