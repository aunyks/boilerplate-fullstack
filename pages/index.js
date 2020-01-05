import { FormattedMessage } from 'react-intl'
import Link from 'next/link'
import MainPage from '../layouts/MainPage'
import EmailInput from '../components/EmailInput'

const Index = () => (
  <MainPage>
    <EmailInput label="Email" isValid={val => val.startsWith('hello')} />
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
