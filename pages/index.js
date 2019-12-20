import MainPage from '../layouts/MainPage'
import { FormattedMessage } from 'react-intl';
import Link from 'next/link'

const Index = ({
  title,
  description,
  theme,
  author
}) => (
    <MainPage
      title={title}
      theme={theme}
      description={description}
      author={author}
    >
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
  if (req) {
    const {
      SHORT_APP_NAME,
      APP_DESCRIPTION,
      APP_PRIMARY_COLOR,
      APP_AUTHOR
    } = process.env
    return {
      title: SHORT_APP_NAME,
      description: APP_DESCRIPTION,
      theme: APP_PRIMARY_COLOR,
      author: APP_AUTHOR
    }
  } else {
    return {
      // props.a
      a: 'hi'
    }
  }
}

export default Index
