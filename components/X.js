export default ({
  showing,
  height,
  width
}) => {
  const effectiveWidth = width || '20'
  const effectiveHeight = height || '20'
  return (
    <svg
      className="x"
      style={{ display: showing ? 'block' : 'none' }}
      width={`${effectiveWidth}`}
      height={`${effectiveHeight}`}
    >
      <line className="navbar-svg-line"
        x1="5" y1="5" x2={effectiveWidth} y2={effectiveHeight} />
      <line className="navbar-svg-line"
        x1="5" y1={effectiveHeight} x2={effectiveWidth} y2="5" />
    </ svg>
  )
}