import { FormattedMessage } from 'react-intl'
import Link from 'next/link'
import MainPage from '../layouts/MainPage'
import EmailInput from '../components/EmailInput'
import PwInput from '../components/PwInput'
import Select from '../components/Select'
import Button from '../components/Button'
import Modal from '../components/Modal'

const Index = () => (
  <MainPage>
    <h1 className="title">
      Title
    </h1>
    <h2 className="subtitle">
      Subtitle
    </h2>
    <EmailInput label="Email" isValid={val => val.startsWith('hello')} />
    <PwInput label="Password" />
    <Select
      label="Letter"
      onChange={val => { }}
      options={[
        { value: 'a', title: 'Alpha' },
        { value: 'b', title: 'Beta' }
      ]} />
    <br />
    <Button theme="primary">
      Primary
    </Button>
    <Button theme="secondary">
      Secondary
    </Button>
    <Button theme="flat">
      Flat
    </Button>
    <br />
    <Modal
      onRequestClose={() => alert('modal trying to close')}
      hidden={true}>
      <h1>This is a header!</h1>
      <h2>And another one</h2>
      <p>So yea</p>
    </Modal>
    <ul>
      <li>
        <a href="/a">a</a>
      </li>
      <li>
        <a href="/b">b</a>
      </li>
      <li>
        <a href="/posts?id=2">post #2</a>
      </li>
      <li>
        <p>
          <FormattedMessage
            id="hello"
            values={{ name: 'Gerald' }}
          />
        </p>
      </li>
    </ul>
  </MainPage>
)

Index.getInitialProps = async ({ req }) => {
  return {
    // props.a
    a: 'hi'
  }
}

export default Index
