// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('compareInputs', (sInputSelector, sValueSelector) => {
  let aValues = []
  cy.get(sValueSelector).each(($element) => {
    aValues.push($element[0].textContent)
  })
  cy.get(sInputSelector).each(($element, i) => {
    expect($element[0].value).to.eq(aValues[i])
  })
})

Cypress.Commands.add('changeRangeOfInputs', (sInputSelector, sInputPrefix) => {
  cy.get(sInputSelector).each(($input, i) => {
    cy.wrap($input[0]).clear().type(`${sInputPrefix} ${i}`)
  })
})

Cypress.Commands.add('checkTooltipValue', ($element, sValue) => {
  cy.wrap($element[0])
    .trigger('mouseover', { force: true })
    .trigger('mousemove', { force: true })
  cy.get('.tooltip em').within(($tooltip) => {
    expect($tooltip[0].innerHTML).to.eq(sValue)
  })
  cy.wrap($element[0]).trigger('mouseout', { force: true })
})
