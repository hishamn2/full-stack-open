import axios from 'axios'

const api_key = 'bdb8693bc0c5b81363032b61a85d00cf' // For now we can keep it here, but it is better to use environment variables.

const getWeather = (lat, lon) => {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
    return request.then(response => response.data)
}

export default { getWeather }