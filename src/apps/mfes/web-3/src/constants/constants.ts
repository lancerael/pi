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
 * A list of the transaction fields we want to store
 * @type {RegExp}
 */
export const FIELD_LIST = [
  'to',
  'from',
  'value',
  'data',
  'chainId',
  'gasLimit',
  'gasPrice',
  'hash',
] as const

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
  value: {
    title: 'Value',
    type: 'number',
    value: '',
    isRequired: true,
  },
}

export const CLOUDFRONT_URL =
  import.meta.env.VITE_CLOUDFRONT_URL ?? '__CLOUDFRONT_URL__'
