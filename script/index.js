const searchBtn = document.querySelector('#button')
.addEventListener('click', getCountries)

async function getCountries(){
    const input = document.querySelector('#input')
    const finalUrl = `https://restcountries.com/v3.1/name/${input.value}?fullText=true`

    const response = await fetch(finalUrl)
    const countries = await response.json()
    
    const countryName = document.querySelector('#countryName')
    countryName.innerText = countries[0].name.common
    const flag = document.querySelector('#flag')
    flag.src = countries[0].flags.svg
    const capital = document.querySelector('#capital')
    capital.innerText = `Capital: ${countries[0].capital[0]}`
    const population = document.querySelector('#population')
    population.innerText = `Population: ${countries[0].population}`
    const language = document.querySelector('#language')
    language.innerText = `Language: ${Object.keys(countries[0].languages)[0]}`
    const currency = document.querySelector('#currency')
    currency.innerText = `Currency: ${Object.keys(countries[0].currencies)[0]}`
}
getCountries()
