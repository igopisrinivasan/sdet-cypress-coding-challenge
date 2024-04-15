const currentDate = new Date();

describe('DateRangePicker', () => {

  const formattedDate = currentDate.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
});
    beforeEach(() => {
      cy.visit('/');
      cy.viewport(1920, 1080);
    })

  it('should render', () => {
     cy.get('.DateRangeSelect').should('be.visible');
  });

  ['#mui-4','#mui-5'].forEach(element => {
    it('should show calendar when clicking on Date Fields   :' + element, () => {
      cy.get(element).click({force: true});
      cy.get('[role="tooltip"]').should('be.visible',"Verify calendar is visible");
    });
  });

  it('verify able to select and Enter date range in both start and end field', () => {
    cy.get('#mui-4').click({force: true});
    cy.get('[role="tooltip"]').should('be.visible',"Verify calendar is visible");
    cy.get('button.MuiDateRangePickerDay-day').contains(currentDate.toLocaleString('en-US', {day: '2-digit'})).click();
    cy.get('#mui-4').should('have.value', formattedDate).click();
    cy.get('#mui-5').click({force: true});
    cy.get('#mui-5').type(formattedDate).should('have.value', formattedDate).click();
    cy.get('#mui-4').should('have.value', formattedDate)
  })

  
});

