import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";

function Weather() {


  const apiKey = "f56f24967aaf51182d1d4df628297c6d"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})


  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }
  return (
    <div className='container-fluid'> 
      <h1>Weather App</h1>
    <div className="container">
      <input type="text" placeholder='Enter the city' value={inputCity} onChange={handleChangeInput}/>
      </div>
       <button className='btn btn-primary' id='save' onClick={handleSearch}>Submit</button>
       { Object.keys(data).length > 0 &&
    <div className='box-1'>
      <div className='box'>
        
      </div>
     <h3 className="weathorCity">{data?.name}</h3> 
      <h3 className='weathorTemp'>{((data?.main?.temp) - 273.15).toFixed(2)}°C</h3>
      </div>
}
      <h5>Made By Siddhant Sharma (GLA) </h5>
        </div>
       
  )
}
export default Weather;
