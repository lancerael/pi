/// <reference types="cypress" />

import { rgbTohex } from './helpers'

Cypress.Commands.add('setUpTests', () => {
  cy.intercept(
    {
      method: 'GET',
      url: '__LAMBDA_URL__/default/chartRandom',
    },
    { fixture: 'chartData.json' }
  ).as('chartData')
  cy.visit('http://localhost:5001/')
  cy.wait('@chartData')
  cy.wait(500)
})

Cypress.Commands.add('compareInputs', (inputSelector, valueSelector) => {
  let itemValues: any[] = []
  cy.get(valueSelector).each(($element) => {
    itemValues.push($element[0].textContent)
  })
  cy.get(inputSelector).each(($element, i) => {
    expect($element[0].getAttribute('value')).to.eq(itemValues[i])
  })
})

Cypress.Commands.add('changeRangeOfInputs', (inputSelector, inputPrefix) => {
  cy.get(inputSelector).each(($input, i) => {
    cy.wrap($input[0]).clear().type(`${inputPrefix} ${i}`)
  })
})

Cypress.Commands.add('checkTooltipValue', ($element, tooltipValue) => {
  cy.wrap($element[0])
    .trigger('mouseover', { force: true })
    .trigger('mousemove', { force: true })
  cy.get('.tooltip em').within(($tooltip) => {
    expect($tooltip[0].innerHTML).to.eq(tooltipValue)
  })
  cy.wrap($element[0]).trigger('mouseout', { force: true })
})

Cypress.Commands.add('compareLabelInputs', (type = 'bar') => {
  cy.compareInputs(
    '[data-selector="chart-label-input"]',
    `#container-${type} .x-axis text`
  )
})

Cypress.Commands.add('compareKeyInputs', (type = 'bar') => {
  cy.compareInputs(
    '[data-selector="chart-key-input"]',
    `#container-${type} .key text`
  )
})

Cypress.Commands.add(
  'checkColorDisplays',
  (type = 'bar', selector = 'rect.bars') => {
    let chartColors: string[] = []
    let colorLength = 0
    cy.get('[data-selector="chart-color-input"]').each(($element) => {
      chartColors.push($element[0].getAttribute('value') || '')
      colorLength++
    })
    cy.log('...on the chart')
    cy.get(`#container-${type} ${selector}`).each(
      ($element, i, $collection) => {
        let dataLength = $collection.length / colorLength
        let colorIndex = (i - (i % dataLength)) / dataLength
        expect(rgbTohex($element[0].getAttribute('fill'))).to.eq(
          chartColors[colorIndex]
        )
      }
    )
    cy.log('...on the key')
    cy.get(`#container-${type} rect.key`).each(($element, i) => {
      expect(rgbTohex($element[0].getAttribute('fill'))).to.eq(chartColors[i])
    })
  }
)

Cypress.Commands.add(
  'checkColorChanges',
  (type = 'bar', selector = 'rect.bars') => {
    cy.get('[data-selector="chart-color-input"]').each(($element) => {
      $element[0].setAttribute('type', 'text')
      cy.wrap($element[0]).clear().type('#223344')
    })
    cy.get(`#container-${type} ${selector}`).each(($element) => {
      expect(rgbTohex($element[0].getAttribute('fill'))).to.eq('#223344')
    })
  }
)

Cypress.Commands.add(
  'checkValueDisplays',
  (type = 'bar', selector = 'rect.bars') => {
    let itemValues: string[] = []
    let colorLength = 2
    cy.get('[data-selector="chart-value-input"]').each(($element) => {
      itemValues.push($element[0].getAttribute('value') || '')
    })
    cy.get(`#container-${type} ${selector}`).each(($bar, i, $collection) => {
      let dataLength = $collection.length / colorLength
      let groupCount = Math.floor(i / dataLength)
      let iItemIndex = (i - groupCount * dataLength) * colorLength + groupCount
      cy.checkTooltipValue($bar, itemValues[iItemIndex])
    })
  }
)

Cypress.Commands.add(
  'checkValueChanges',
  (type = 'bar', selector = 'rect.bars') => {
    cy.get('[data-selector="chart-value-input"]').each(($element) => {
      cy.wrap($element[0]).clear().type('100')
    })
    cy.get(`#container-${type} ${selector}`).each(($element) => {
      cy.checkTooltipValue($element, '1000')
    })
  }
)
