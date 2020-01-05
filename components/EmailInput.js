import TextInput from './TextInput'

export default (props) => (
  <TextInput
    {...props}
    type="email"
    isValid={val => (
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val.toLowerCase())
      && props.isValid(val)
    )}
  />
)