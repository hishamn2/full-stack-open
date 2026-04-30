import {useState,useEffect} from 'react'
import countryService from './Services/countries'
import weatherService from './Services/weather'
import Form from './Components/countriesform'
 import DisplayCountries from './Components/countrydetails'
const App =() =>{
 const [countries,setCountries] = useState([])
 const [countrySearch,setCountrySearch] = useState('')
 const [weather,setWeather] = useState(null)

 

 useEffect (() =>{
    countryService.getAll().then(initialCountries =>
      setCountries(initialCountries))
      
  }
, [])

const handleCountrySearch = (event) => {
  setCountrySearch(event.target.value)
  setWeather(null)
}

const countriesToShow =
  countrySearch 
    ? countries.filter(country=> country.name.common.toLowerCase().includes(countrySearch.toLowerCase()))
    : []
  
useEffect(() => {
  if (countriesToShow.length === 1) {
    const country = countriesToShow[0]
    if (country.capitalInfo?.latlng) {
      const [lat, lon] = country.capitalInfo.latlng
      weatherService.getWeather(lat, lon)
        .then(weatherData => setWeather(weatherData))
        .catch(error => console.error('Error fetching weather:', error))
    }
  }
}, [countriesToShow])

 return(
    <div>
      <h1>Data for countries</h1>
      <Form countrySearch={countrySearch} handleCountrySearch={handleCountrySearch} />
      <DisplayCountries countries={countriesToShow} setCountrySearch={setCountrySearch} weather={weather} />
      
    </div>
 )
}
export default App