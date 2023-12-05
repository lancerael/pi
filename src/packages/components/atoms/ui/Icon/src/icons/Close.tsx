import { IconProps } from '../Icon.types'

export const Close = ({ color, size }: Omit<IconProps, 'iconName'>) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.207 10.207a1 1 0 0 0-1.414-1.414L12 14.586 6.207 8.793a1 1 0 0 0-1.414 1.414L10.586 16l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 17.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 16l5.793-5.793z"
        fill={color}
      />
    </svg>
  )
}
