const get = (req, res) => {
  res.end('pick a version pls')
}

export default (req, res) => {
  switch (req.method) {
    case 'GET':
      get(req, res)
    default:
      res.statusCode = 405
      res.end()
  }
}