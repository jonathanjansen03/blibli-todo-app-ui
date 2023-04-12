import { api } from "@/config"

const buildUrl = (params) => {
  if (!params) {
    return api.getAllBooksAPI.api
  }

  let url = api.searchBookAPI.api

  for (const param in params) {
    url += api.searchBookAPI.params[param] + params[param] + '&'
  }

  url = url.slice(0, -1)
  return url
}

export { buildUrl }
