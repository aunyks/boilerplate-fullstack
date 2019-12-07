import Head from '../components/Head'

export default ({ children }) => (
  <React.Fragment>
    <Head />
    {children}
  </React.Fragment>
)