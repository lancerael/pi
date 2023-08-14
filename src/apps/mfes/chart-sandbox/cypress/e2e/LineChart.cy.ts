describe('LineChart', () => {
  beforeEach(cy.setUpTests)

  it('displays the correct section labels', () => {
    cy.compareLabelInputs('line')
  })

  it('allows changing of labels', () => {
    cy.changeRangeOfInputs('[data-selector="chart-label-input"]', 'label')
    cy.compareLabelInputs('line')
  })

  it('displays the correct key names', () => {
    cy.compareKeyInputs('line')
  })

  it('allows the changing of key names', () => {
    cy.changeRangeOfInputs('[data-selector="chart-key-input"]', 'key')
    cy.compareKeyInputs('line')
  })

  it('displays the correct colours', () => {
    cy.checkColorDisplays('line', 'circle.circles')
  })

  it('allows colours to be changed', () => {
    cy.checkColorChanges('line', 'circle.circles')
  })

  it('displays the correct values', () => {
    cy.checkValueDisplays('line', 'circle.circles')
  })

  it('allows values to be changed', () => {
    cy.checkValueChanges('line', 'circle.circles')
  })
})

export {}
