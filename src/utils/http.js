import buildURL from 'axios/lib/helpers/buildURL'

export function getFullURL(baseURL, url, params, paramsSerializer) {
  if (url.startsWith('http')) {
    return buildURL(url, params, paramsSerializer)
  }
  baseURL = baseURL.endsWith('/') ? baseURL : `${baseURL}/`
  url = url.startsWith('/') ? url.slice(1) : url
  return buildURL(`${baseURL}${url}`, params, paramsSerializer)
}
