import { useState } from 'react'
import X from './X'

const Hamburger = ({ showing }) => (
  <svg style={{ display: showing ? 'block' : 'none' }} width="20" height="20">
    <line className="navbar-svg-line"
      x1="0" y1="5" x2="20" y2="5" />
    <line className="navbar-svg-line"
      x1="0" y1="10" x2="20" y2="10" />
    <line className="navbar-svg-line"
      x1="0" y1="15" x2="20" y2="15" />
  </svg>
)

export default ({ links }) => {
  const [navDroppedDown, toggleDropDown] = useState(false)
  return (
    <div className="navbar">
      <div className="navbar-link">
        <a id="navbar-brand" href="/">Sankofa Systems</a>
      </div>
      <div className="navbar-link navbar-link-toggle" onClick={() => toggleDropDown(down => !down)}>
        <Hamburger showing={!navDroppedDown} />
        <X showing={navDroppedDown} />
      </div>
      <nav className={`navbar-items navbar-items-right ${navDroppedDown ? 'navbar-toggle-show' : ''}`}>
        {
          links && links.map(({ title, to, newTab, style }, i) => (
            <div key={title} className="navbar-link underline-color-3">
              <a style={style || {}} href={to} target={(newTab || false) ? '_blank' : '_self'}>
                {title}
              </a>
            </div>
          ))
        }
      </nav>
    </div >
  )
}