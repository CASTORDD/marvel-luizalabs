import axios from 'axios'

export const baseUrl = process.env.REACT_APP_API_BASE_URL
export const apiKey = process.env.REACT_APP_PUBLIC_KEY

export const getHeros = (filterValue: I.FilterCharactersProps) => {
  const { limit, offset, name } = filterValue

  return axios.get(
    `${baseUrl}/characters?limit=${limit}${
      name ? '&name=' + name : ''
    }&offset=${offset}&apikey=${apiKey}`
  )
}

export const getHero = (id: number) => {
  return axios.get(`${baseUrl}/characters/${id}?apikey=${apiKey}`)
}
