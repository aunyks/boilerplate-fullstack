import { useState } from 'react'

const generateElementName = () => {
  return `select-${parseInt(Math.random() * 255)}`
}

export default ({
  name,
  multiselect,
  options,
  onChange,
  label
}) => {
  const elementName = name || generateElementName()
  let initialValue
  const selectedOption = options.find(({ selected }) => selected)
  if (typeof selectedOption !== 'undefined') {
    initialValue = selectedOption.value
  } else {
    initialValue = options[0]
  }
  const [val, changeSelection] = useState(initialValue)
  const [isFocused, changeFocus] = useState(false)
  const _onChange = e => {
    const newValue = e.target.value
    changeSelection(newValue)
    onChange(newValue)
  }
  return (
    <div className="select-input">
      {label &&
        <label
          htmlFor={elementName}
          className={`${isFocused ? 'focused' : ''}`}
        >
          {label}
        </label>
      }
      <select
        name={elementName}
        value={val}
        onChange={_onChange}
        onFocus={() => changeFocus(true)}
        onBlur={() => changeFocus(false)}
      >
        {
          options.map(({ value, title }) => (
            <option key={value} value={value}>
              {title}
            </option>
          ))
        }
      </select>
    </div>
  )
}