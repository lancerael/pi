import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      compareInputs(
        inputSelector: string,
        valueSelector: string
      ): Chainable<JQuery<HTMLElement>>
      changeRangeOfInputs(
        inputSelector: string,
        inputPrefix: string
      ): Chainable<JQuery<HTMLElement>>
      checkTooltipValue(...args: any[]): Chainable<JQuery<HTMLElement>>
      setUpTests(): Chainable<JQuery<HTMLElement>>
      compareLabelInputs(type?: string): Chainable<JQuery<HTMLElement>>
      compareKeyInputs(type?: string): Chainable<JQuery<HTMLElement>>
      checkColorDisplays(
        type?: string,
        selector?: string
      ): Chainable<JQuery<HTMLElement>>
      checkColorChanges(
        type?: string,
        selector?: string
      ): Chainable<JQuery<HTMLElement>>
      checkValueDisplays(
        type?: string,
        selector?: string
      ): Chainable<JQuery<HTMLElement>>
      checkValueChanges(
        type?: string,
        selector?: string
      ): Chainable<JQuery<HTMLElement>>
    }
  }
}
