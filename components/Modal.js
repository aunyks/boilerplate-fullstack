import X from './X'

export default ({
  hidden,
  children,
  onRequestClose
}) => {
  return (
    <div className={`modal${hidden ? ' hidden' : ''}`}>
      <div />
      <div className="container">
        <a className="x" aria-hidden="true"
          onClick={onRequestClose}>
          <X showing width={20} height={20} />
        </a>
        {children}
      </div>
      <div />
    </div>
  )
}