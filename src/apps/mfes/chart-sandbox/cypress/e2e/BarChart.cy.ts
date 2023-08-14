describe('BarChart', () => {
  beforeEach(cy.setUpTests)

  it('displays the correct section labels', () => {
    cy.compareLabelInputs()
  })

  it('allows changing of labels', () => {
    cy.changeRangeOfInputs('[data-selector="chart-label-input"]', 'label')
    cy.compareLabelInputs()
  })

  it('displays the correct key names', () => {
    cy.compareKeyInputs()
  })

  it('allows the changing of key names', () => {
    cy.changeRangeOfInputs('[data-selector="chart-key-input"]', 'key')
    cy.compareKeyInputs()
  })

  it('displays the correct colours', () => {
    cy.checkColorDisplays()
  })

  it('allows colours to be changed', () => {
    cy.checkColorChanges()
  })

  it('displays the correct values', () => {
    cy.checkValueDisplays()
  })

  it('allows values to be changed', () => {
    cy.checkValueChanges()
  })
})

export {}
