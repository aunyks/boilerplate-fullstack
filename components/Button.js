export default ({
  theme,
  onClick,
  children
}) => {
  return (
    <button onClick={onClick} className={`${theme}`}>
      {children}
    </button>
  )
}