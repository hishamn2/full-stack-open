 const DisplayCountries =({countries,setCountrySearch, weather}) =>{
    if(countries.length === 0){
      return null
    }
    if(countries.length>10){
      return(
        <div>
          Too many matches, specify another filter
        </div>
      )
    }
    if(countries.length===1){
      const country = countries[0];
      return(
        <div>
          <h2>{country.name.common}</h2>
          <p>capital {country.capital}</p>
          <p>area {country.area}</p>
          <h3>Languages</h3>
          <ul>
            {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
          </ul>
          <img src={country.flags.png} alt={country.flags.alt}></img>
          <h3>Weather in {country.capital}</h3>
          {weather ? <div>
            <p>temperature {weather.main.temp} Celcius</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            <p>wind {weather.wind.speed} m/s</p>
          </div> : <p>Loading weather...</p>
          }
        </div>
      )
    }
    return(
        <div>
            <ul>
                  {countries.map(country => <li key={country.name.common}>{country.name.common}
                  <button onClick={() => setCountrySearch(country.name.common)}>show</button>
                  </li>)}
            </ul>
        </div>
    )
  }
  export default DisplayCountries