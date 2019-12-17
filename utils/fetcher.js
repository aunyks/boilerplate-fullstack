const interceptedFromOffline = (requestedUrl, fetchCall) => {
  const fetchedUrl = fetchCall.url
  const isOfflineUrl = /^(http|https):\/\/(.+)\.([a-zA-Z]+)(:[0-9]+)?\/offline/.test(fetchedUrl)
  // Might also have to determine whether
  // this origin matches ours so we dont 
  // think some other /offline is ours
  return requestedUrl !== fetchedUrl && isOfflineUrl
}

const get = async (url, headers = {}) => {
  try {
    const res = await fetch(url, {
      headers
    })
    return Object.assign({},
      {
        isOffline: interceptedFromOffline(url, res)
      },
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
      {
        isOffline: interceptedFromOffline(url, res)
      },
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
      {
        isOffline: interceptedFromOffline(url, res)
      },
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
      {
        isOffline: interceptedFromOffline(url, res)
      },
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