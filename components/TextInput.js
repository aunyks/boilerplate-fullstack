import { useState } from 'react'

const generateElementId = () => {
  return '' + parseInt(Math.random() * 255)
}

export default ({
  theme,
  multiline,
  numRows,
  numCols,
  children,
  name,
  required,
  label,
  type,
  onChange,
  isValid
}) => {
  const [inputValue, updateInput] = useState('')
  const [isFocused, changeFocus] = useState(false)
  const inputName = name || `text-input-${generateElementId()}`
  const onFocus = () => changeFocus(true)
  const onBlur = () => {
    if (inputValue.trim() === '') {
      changeFocus(false)
    }
  }
  const _onChange = e => {
    const newValue = e.target.value
    updateInput(newValue)
    if (onChange) onChange(newValue)
  }
  const _isValid = value => {
    if (isValid) {
      return value.trim() === '' || isValid(value)
    } else {
      return true
    }
  }
  if (multiline) {
    return (
      <div className={`text-input ${_isValid(inputValue) ? '' : 'invalid'}`}>
        {label &&
          <label className={`${isFocused ? 'focused' : ''} ${_isValid(inputValue) ? '' : 'invalid'}`} htmlFor={inputName}>
            {label}
          </label>
        }
        <textarea
          name={inputName}
          required={required}
          className={`${theme || ''}`}
          onFocus={onFocus}
          onBlur={onBlur}
          rows={`${numRows || 2}`}
          cols={`${numCols || 20}`}
          value={inputValue}
          onChange={_onChange}
        >
          {children}
        </textarea>
      </div>
    )
  } else {
    return (
      <div className={`text-input ${_isValid(inputValue) ? '' : 'invalid'}`}>
        {label &&
          <label className={`${isFocused ? 'focused' : ''} ${_isValid(inputValue) ? '' : 'invalid'}`} htmlFor={inputName}>
            {label}
          </label>
        }
        <input
          required={required}
          name={inputName}
          onFocus={onFocus}
          onBlur={onBlur}
          className={`${theme || ''}`}
          type={type || 'text'}
          value={inputValue}
          onChange={_onChange}
        />
      </div>
    )
  }
}