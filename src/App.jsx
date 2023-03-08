import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Weather from './components/Weather'
import clima from './data/clima.json'
import Search from './components/Search'
import Loader from './components/Loader'


function App() {
  const [weatherData, setWeatherData] = useState({})
  const [loading, setLoading] = useState(true)


  useEffect(() => {

    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude
      const long = position.coords.longitude

      const API_Key = '3fb11a0079cd98b2e305f5727e30d0a1'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_Key}&units=metric`
      
          axios
              .get(URL)
              .then(resp => {
                setWeatherData(resp.data)
                setTimeout(() => {
                  setLoading(false)
                }, 1000);
                })
              .catch(error => console.log(error))
    
    })
  }, [])

  // &lang=es



  
  const [darkTheme, setDarkTheme] = useState(true)

  const funcionDarkTheme = darkTheme ? 'App' : 'App darkTheme'
  const cardDarkTheme = darkTheme ? 'ContainerBackgroound' : 'ContainerBackgroound cardDarkTheme'
  const btnDark = darkTheme ? 'btnChange' : 'btnChange btnDark'

  const [changeFarenheit, setChangeFarenheit] = useState(true)

  return (
    <div className={funcionDarkTheme}>
     {loading && <Loader/>}
      {/* <Search /> */}
      <h1 className='title'>Weather app</h1>
       <div className='containerSwitch'>
        <label className="switch">
          <input type="checkbox" onClick={()=> setDarkTheme(!darkTheme)}/>
          <span className="slider"></span>
        </label>
       </div>
       <div className={cardDarkTheme}></div>
      <Weather
      data = {weatherData}
      icon = {clima[weatherData.weather?.[0].description]}
      btn = {changeFarenheit}
      />
        <button className={btnDark}  onClick={()=> setChangeFarenheit(!changeFarenheit)}>Cambiar Temperatura</button>
    </div>
  )
}

export default App
