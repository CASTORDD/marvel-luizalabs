import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const getCookie = (name: string) => {
  return cookies.get(name)
}

export const setCookie = (name: string, key: any, values: any) => {
  cookies.set(name, key, values)
}
