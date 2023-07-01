import { IconProps } from '../Icon.types'

export const Ellipsis = ({ color, size }: Omit<IconProps, 'iconName'>) => {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      viewBox="-5 -4 42 36"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.75 16c0 2.071-1.679 3.75-3.75 3.75s-3.75-1.679-3.75-3.75c0-2.071 1.679-3.75 3.75-3.75s3.75 1.679 3.75 3.75zM8.75 16c0 2.071-1.679 3.75-3.75 3.75s-3.75-1.679-3.75-3.75c0-2.071 1.679-3.75 3.75-3.75s3.75 1.679 3.75 3.75zM30.75 16c0 2.071-1.679 3.75-3.75 3.75s-3.75-1.679-3.75-3.75c0-2.071 1.679-3.75 3.75-3.75s3.75 1.679 3.75 3.75z"></path>
    </svg>
  )
}
