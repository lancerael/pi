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
