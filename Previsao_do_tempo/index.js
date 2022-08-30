//dotenv
require('dotenv').config()
const axios = require ('axios')
const appid = process.env.appid

const q = 'Itu'

//metric: celsius
//imperial: farenheit
const units = 'metric'

const lang = 'pt_BR'

const cnt = 10

const base_url = 'https://api.openweathermap.org/data/2.5/forecast'

const url = `${base_url}?q=${q}&units=${units}&lang=${lang}&cnt=${cnt}&appid=${appid}`
const p = axios.get(url)
p
.then((res) => {
  console.log(res.data)
  return res.data
})