import MainPage from '../layouts/MainPage'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

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
    </ul>
  </MainPage>
)

Index.getInitialProps = async () => {
  return {
    // props.a
    a: 'hi'
  }
}

export default Index
