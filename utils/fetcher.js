// Use navigator.onLine to detect online status

const get = async (url, headers = {}) => {
  try {
    const res = await fetch(url, {
      headers
    })
    return Object.assign({},
      await res.json()
    )
  } catch (e) {
    console.error(e)
    return undefined
  }
}

const dleet = async (url, headers = {}) => {
  try {
    const res = await fetch(url, {
      method: 'DELETE',
      headers,
    })
    return Object.assign({},
      await res.json()
    )
  } catch (e) {
    console.error(e)
    return undefined
  }
}

const put = async (url, data, headers = {}) => {
  try {
    const finalHeaders = Object.assign({}, {
      'Content-Type': 'application/json'
    }, headers)
    const res = await fetch(url, {
      method: 'PUT',
      headers: finalHeaders,
      body: finalHeaders['Content-Type'] === 'application/json' ? JSON.stringify(data) : data
    })
    return Object.assign({},
      await res.json()
    )
  } catch (e) {
    console.error(e)
    return undefined
  }
}

const post = async (url, data, headers = {}) => {
  try {
    const finalHeaders = Object.assign({}, {
      'Content-Type': 'application/json'
    }, headers)
    const res = await fetch(url, {
      method: 'PUT',
      headers: finalHeaders,
      body: finalHeaders['Content-Type'] === 'application/json' ? JSON.stringify(data) : data
    })
    return Object.assign({},
      await res.json()
    )
  } catch (e) {
    console.error(e)
    return undefined
  }
}

export {
  get,
  put,
  post,
  dleet
}