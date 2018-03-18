describe('Hyperapp List', () => {
  context('Initial state', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080');
    });

    it('should have the correct title', () => {
      cy.title()
        .should('equal', 'Hyperapp List');
    });

    it('Can add an item via enter', () => {
      cy.get('input')
        .type('Get eggs {enter}');

      cy.get('li:first')
        .should('contain', 'Get eggs');
    });

    it('Can add an item via the button', () => {
      cy.get('input')
        .type('Get eggs');

      cy.get('button')
        .click();

      cy.get('li:first')
        .should('contain', 'Get eggs');
    });

    it('Cannot add empty strings as items', () => {
      cy.get('button')
        .click();

      cy.get('ul:empty');
    });

    it('Can see all filters', () => {
      cy.get('a[href="#filter-by-Todo"');
      cy.get('a[href="#filter-by-Done"');
      cy.get('a[href="#filter-by-All"');

    });
  });

  context('Filters', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080');
    });

    it('Adding an item makes it visible in All and Todo, but not Done', () => {
      cy.get('input')
        .type('Get eggs {enter}');

      cy.get('a[href="#filter-by-All"]')
        .click();

      cy.get('li:first')
        .should('contain', 'Get eggs');

      cy.get('a[href="#filter-by-Todo"]')
        .click();

      cy.get('li:first')
        .should('contain', 'Get eggs');

      cy.get('a[href="#filter-by-Done"]')
        .click();

      cy.get('ul:empty');
    });
  });
});
