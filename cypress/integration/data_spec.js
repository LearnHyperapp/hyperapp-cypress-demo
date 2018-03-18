describe('List actions', () => {
  context('adding items', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080');
    });

    it('can set the input state', () => {
      cy.window()
        .then((win) => {
          const { hyperappInterop } = win;
          expect(hyperappInterop.input({ value: 'test' }))
            .to.deep.eq({ input: 'test' });
        });
    });

    it('can add after setting input', () => {
      cy.window()
        .then((win) => {
          const { hyperappInterop } = win;

          hyperappInterop.input({ value: 'test' });

          expect(hyperappInterop.add())
            .to.deep.eq({
              input: '',
              todos: [{
                done: false,
                value: 'test',
                id: 1,
              }],
            });

          cy.get('li').should('contain', 'test');
        });
    });

  });

});
