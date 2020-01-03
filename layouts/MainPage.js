import Head from '../components/Head'
import Nav from '../components/Nav'

export default ({
  children
}) => (
    <React.Fragment>
      <Head />
      <Nav links={[
        { title: 'Alpha', to: '/a' }
      ]} />
      {children}
      <footer>
        {`Copyright ${(new Date()).getFullYear()} ${process.env.APP_AUTHOR}`}
      </footer>
    </React.Fragment>
  )