import { fnRgbTohex } from './../support/helpers'

describe('BarChart', () => {
  before(() => {
    cy.visit('http://localhost:8081/')
    cy.wait(1000) // allow bars to transition into view
  })

  it('displays the correct section labels', () => {
    cy.compareInputs('.dt-label-input', '#container-bar-test .x-axis text')
  })

  it('allows changing of labels', () => {
    cy.changeRangeOfInputs('.dt-label-input', 'new label')
    cy.compareInputs('.dt-label-input', '#container-bar-test .x-axis text')
  })

  it('displays the correct key names', () => {
    cy.compareInputs('.dt-key-input', '#container-bar-test .key text')
  })

  it('allows the changing of key names', () => {
    cy.changeRangeOfInputs('.dt-key-input', 'new key')
    cy.compareInputs('.dt-key-input', '#container-bar-test .key text')
  })

  it('displays the correct colours', () => {
    let aColors = []
    let iColorLength = 0
    cy.get('.dt-color-input').each(($element) => {
      aColors.push($element[0].value)
      iColorLength++
    })
    cy.log('...on the chart')
    cy.get('#container-bar-test rect.bars').each(($element, i, $collection) => {
      let iDataLength = $collection.length / iColorLength
      let iColorIndex = (i - (i % iDataLength)) / iDataLength
      expect(fnRgbTohex($element[0].attributes.fill.value)).to.eq(
        aColors[iColorIndex]
      )
    })
    cy.log('...on the key')
    cy.get('#container-bar-test rect.key').each(($element, i) => {
      expect(fnRgbTohex($element[0].attributes.fill.value)).to.eq(aColors[i])
    })
  })

  it('allows colours to be changed', () => {
    cy.get('.dt-color-input').each(($element) => {
      $element[0].type = 'text' // need to do this as cypress doesn't trigger react color input onchange
      cy.wrap($element[0]).clear().type('#223344')
    })
    cy.get('#container-bar-test rect.bars').each(($element) => {
      expect(fnRgbTohex($element[0].attributes.fill.value)).to.eq('#223344')
    })
  })

  it('displays the correct values', () => {
    let aValues = []
    let iColorLength = 0
    cy.get('.dt-color-input').each(() => {
      iColorLength++
    })
    cy.get('.dt-value-input').each(($element) => {
      aValues.push($element[0].value)
    })
    cy.get('#container-bar-test rect.bars').each(($bar, i, $collection) => {
      let iDataLength = $collection.length / iColorLength
      let iGroupCount = Math.floor(i / iDataLength)
      let iItemIndex =
        (i - iGroupCount * iDataLength) * iColorLength + iGroupCount
      cy.checkTooltipValue($bar, aValues[iItemIndex])
    })
  })

  it('allows values to be changed', () => {
    cy.get('.dt-value-input').each(($element) => {
      cy.wrap($element[0]).clear().type('100')
    })
    cy.get('#container-bar-test rect.bars').each(($element) => {
      cy.checkTooltipValue($element, '100')
    })
  })
})
