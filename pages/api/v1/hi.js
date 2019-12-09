import secureHeaders from '../../../utils/middleware/secure-headers'

const get = (req, res) => {
  res.end('hello get')
}

const post = (req, res) => {
  res.end('hello post')
}

const put = (req, res) => {
  res.end('hello put')
}

const del = (req, res) => {
  res.end('hello delete')
}

export default (req, res) => {
  secureHeaders(res)
  switch (req.method) {
    case 'GET':
      get(req, res)
      break;
    case 'POST':
      post(req, res)
      break;
    case 'PUT':
      put(req, res)
      break;
    case 'DELETE':
      del(req, res)
      break;
    default:
      res.statusCode = 405
      res.end()
  }
}