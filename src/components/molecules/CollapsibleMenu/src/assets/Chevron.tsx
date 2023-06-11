export const Chevron = ({
  size = 'calc(20px + 0.6rem)',
  color = 'var(--outline)',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="strokes"
  >
    <g id="Complete">
      <g id="F-Chevron">
        <polyline
          fill="none"
          points="5 8.5 12 15.5 19 8.5"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </g>
    </g>
  </svg>
)
