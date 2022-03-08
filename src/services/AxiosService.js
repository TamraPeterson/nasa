import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const photosApi = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=yMndrAKAU2n7ctT2f2LfgqdE2K2ufKosxWj9cMfr'
})