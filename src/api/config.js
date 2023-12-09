const hostname = window && window.location && window.location.hostname

let API_HOST

if(hostname === "sso.noahtemplet.dev")
  API_HOST = "https://sso.api.noahtemplet.dev"
else if (hostname === "qa.sso.noahtemplet.dev")
  API_HOST = "https://qa.sso.api.noahtemplet.dev/api"
else
  API_HOST = "https://localhost:7174/api"

export { API_HOST }