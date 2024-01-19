import { FormDefaults } from './constants.types'

/**
 * Regular expression pattern for validating wallet addresses.
 * @type {RegExp}
 */
export const WALLET_PATTERN = /^(0x)?[0-9a-fA-F]{40}$/

/**
 * Regular expression pattern for validating transaction hashes.
 * @type {RegExp}
 */
export const HASH_PATTERN = /^0x[0-9a-fA-F]{64}$/

/**
 * Default state for the form with empty values
 * @type {FormDefaults}
 */
export const FORM_DEFAULTS: FormDefaults = {
  from: {
    title: 'From',
    type: 'text',
    value: '',
    match: WALLET_PATTERN,
    isRequired: true,
    isValid: true,
    isEditable: false,
  },
  to: {
    title: 'To',
    type: 'text',
    value: '',
    match: WALLET_PATTERN,
    isRequired: true,
  },
  amount: {
    title: 'Amount',
    type: 'number',
    value: '',
    isRequired: true,
  },
}
