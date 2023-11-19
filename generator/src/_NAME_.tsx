import { Styled_NAME_ } from './_NAME_.style'
import { _NAME_Props } from './_NAME_.types'

/**
 * _NAME_
 *
 * @param {InputProps} props - The properties for the _NAME_ component.
 * @returns {JSX.Element} an instance of the the _NAME_ component.
 */
export const _NAME_ = ({
  ...props,
  dataTestid = 'pi-lib-_LC_NAME_',
}: _NAME_Props) => <Styled_NAME_ data-testid={dataTestid} {...props} />

export default _NAME_
