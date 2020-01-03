import MainPage from '../layouts/MainPage'
import { FormattedMessage } from 'react-intl';
import Link from 'next/link'

const Index = () => (
  <MainPage>
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
