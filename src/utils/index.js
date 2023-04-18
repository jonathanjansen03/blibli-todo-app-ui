import { api } from "@/config"

const buildUrl = (params) => {
  if (!params || Object.keys(params).length === 0) {
    return api.getAllBooksAPI.api
  }

  let url = api.searchBookAPI.api

  for (const param in params) {
    url += api.searchBookAPI.params[param] + params[param] + '&'
  }

  return url.slice(0, -1)
}

export { buildUrl }
