import Head from '../components/Head'

export default ({
  title,
  description,
  author,
  theme,
  children
}) => (
    <React.Fragment>
      <Head
        title={title}
        description={description}
        theme={theme}
        author={author} />
      {children}
      <p>
        {`Copyright 2019 ${author}`}
      </p>
    </React.Fragment>
  )