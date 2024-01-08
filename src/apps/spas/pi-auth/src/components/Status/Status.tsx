const Status = ({ isSuccess = false, children }) => {
  return (
    <span
      style={{
        color: isSuccess ? 'var(--success)' : 'var(--error)',
        fontWeight: 'bold',
      }}
    >
      {children}
    </span>
  )
}

export default Status
