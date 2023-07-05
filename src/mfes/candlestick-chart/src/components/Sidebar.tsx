export const Sidebar = () => {
  const subStyles = {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'var(--textStrong)',
  } as {}
  const rowStyles = { color: 'var(--textSoft)' } as {}
  return (
    <div style={{ minWidth: '300px' }}>
      <h2 style={{ textTransform: 'uppercase' }}>Acme Inc.</h2>
      <p style={rowStyles}>
        Sector <span style={{ float: 'right' }}>Technology</span>
      </p>
      <p style={rowStyles}>
        Industry <span style={{ float: 'right' }}>Environmental</span>
      </p>
      <p style={subStyles}>Today's Trading</p>
      <p style={rowStyles}>
        Previous close <span style={{ float: 'right' }}>4.03</span>
      </p>
      <p style={rowStyles}>
        Today's open <span style={{ float: 'right' }}>4.41</span>
      </p>
      <p style={rowStyles}>
        Day's range <span style={{ float: 'right' }}>4.11 - 6.49</span>
      </p>
      <p style={rowStyles}>
        Volume <span style={{ float: 'right' }}>13,249</span>
      </p>
      <p style={rowStyles}>
        Average volume (3m) <span style={{ float: 'right' }}>109,524</span>
      </p>
      <p style={rowStyles}>
        Market cap <span style={{ float: 'right' }}>$393.2M</span>
      </p>
    </div>
  )
}
