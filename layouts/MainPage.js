import Head from '../components/Head'

export default ({
  children
}) => (
    <React.Fragment>
      <Head />
      {children}
      <footer>
        {`Copyright ${(new Date()).getFullYear()} ${process.env.APP_AUTHOR}`}
      </footer>
    </React.Fragment>
  )