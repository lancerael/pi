export const Hamburger = ({ size = 32, color = 'var(--outline)' }) => {
  const pathProps: React.SVGProps<SVGPathElement> = {
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
  }
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 18L20 18" {...pathProps} />
      <path d="M4 12L20 12" {...pathProps} />
      <path d="M4 6L20 6" {...pathProps} />
    </svg>
  )
}

export default Hamburger
