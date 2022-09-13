//dotenv
require('dotenv').config()
const axios = require ('axios')
const appid = process.env.appid

const q = 'sao paulo'

//metric: celsius
//imperial: farenheit
const units = 'metric'

const lang = 'pt_BR'

const cnt = 10

const base_url = 'https://api.openweathermap.org/data/2.5/forecast'

const url = `${base_url}?q=${q}&units=${units}&lang=${lang}&cnt=${cnt}&appid=${appid}`

axios 
    .get(url)
    .then((res) => {
        console.log(res);
        return res.data;
    })
    .then((res)=> {
        console.log(res.cnt);
        return res;
    })
    .then((res)=> {
        console.log("aqui",res);
        return res["list"];
    })
    .then((res)=> {
        for (let previsao of res) {
        console.log(`
        ${new Date(previsao.dt * 1000).toLocaleString()},
        ${'Min: ' + previsao.main.temp_min}\u00B0C,
        ${'Max: ' + previsao.main.temp_max}\u00B0C,
        ${'Hum: ' + previsao.main.humidity}%,
        ${previsao.weather[0].description}

        `)
        }
        return res
    })
    .then((res)=> {
    const Lista = res.filter(r => r.main.feels_like>=30)
    console.log (`${Lista.length} previsões têm percepção humana de temperatura acima de 30 graus`)
    });