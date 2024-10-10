import { useEffect, useState } from "react"

export const YourLocation = () => {

  const [result, setResult] = useState(null);
  const [imgIcon, setImgIcon] = useState(null);
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0
  });

  const apiKey = '88066308da3b695df882eab02f68e2da';

  // Get Geo Location............
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      })
    }
  }

  // Fetch Data................
  const fetchData = async (lat, lon) => {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    setResult(data)
  }

  // UseEffect............
  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (result) {
      let weatherID = result.weather[0].id;

      if (weatherID >= 200 && weatherID <= 232) {
        setImgIcon('images/thunderstormNew.png');
      }
      else if (weatherID >= 300 && weatherID <= 321) {
        setImgIcon('images/shower_rain.png');
      }
      else if (weatherID >= 500 && weatherID <= 531) {
        setImgIcon('images/rain.png');
      }
      else if (weatherID >= 600 && weatherID <= 622) {
        setImgIcon('images/snow.png');
      }
      else if (weatherID >= 701 && weatherID <= 781) {
        setImgIcon('images/mist.png');
      }
      else if (weatherID == 800) {
        setImgIcon('images/clear_sky.png');
      }
      else if (weatherID == 801) {
        setImgIcon('images/few_clouds.png');
      }
      else if (weatherID == 802) {
        setImgIcon('images/scattered_clouds.png');
      }
      else if (weatherID >= 803 && weatherID <= 804) {
        setImgIcon('images/broken_clouds.png');
      }
      else {
        setImgIcon('');
      }
    }
  }, [result]);

  useEffect(() => {
    if (location.latitude !== 0 && location.longitude !== 0) {
      fetchData(location.latitude, location.longitude);
    }
  }, [location]);

  function handleBtnGetLocation() {

    const btn = document.getElementById('getLocation');
    btn.innerHTML = '<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Get Location'

    // if (location.latitude !== 0 && location.longitude !== 0) {
    //   fetchData(location.latitude, location.longitude);
    // }

    setTimeout(() => {
      getLocation();
      btn.innerHTML = 'Get Location';
    }, 1000);
  }

  return (
    <div className="row text-center ">

      <div className="text-white col-12 col-sm-6 col-md-6 col-lg-6 order-lg-2 order-sm-2 d-flex flex-column justify-content-center align-items-center">
        <img src={result ? (imgIcon) : ''} alt='No Image' className='img-fluid w-75' />
        <h1>{result ? (result.weather[0].description) : ''}</h1>

      </div>

      <div className="col-12 col-sm-6 col-md-6 col-lg-6 order-lg-1 order-sm-1 text-white d-flex flex-column justify-content-center align-items-center ">
        <h1 className='tempVal'>{result ? (result.main.temp - 273.15).toFixed(1) : 0}°</h1>
        <p>Temperature</p>
        <p>Max : {result ? (result.main.temp_max - 273.15).toFixed(1) : 0}° &emsp; &emsp; Min : {result ? (result.main.temp_min - 273.15).toFixed(1) : 0}°</p>

        <table className='table text-start w-75'>
          <tbody>
            <tr>
              <th>Your Location</th>
              <td>:</td>
              <td>{result ? (result.name) : ''}</td>
            </tr>
            <tr>
              <th>Humidity</th>
              <td>:</td>
              <td>{result ? (result.main.humidity) : 0}%</td>
            </tr>
            <tr>
              <th>Feels Like</th>
              <td>:</td>
              <td>{result ? (result.main.feels_like - 273.15).toFixed(1) : 0}°C</td>
            </tr>
            <tr>
              <th>Pressure</th>
              <td>:</td>
              <td>{result ? (result.main.pressure) : 0} hPa</td>
            </tr>
            <tr>
              <th>Sea Level Pressure</th>
              <td>:</td>
              <td>{result ? (result.main.sea_level) : 0} hPa</td>
            </tr>
            <tr>
              <th>Ground Level Pressure</th>
              <td>:</td>
              <td>{result ? (result.main.grnd_level) : 0} hPa</td>
            </tr>
          </tbody>
        </table>
        <button id="getLocation" onClick={handleBtnGetLocation} className="my-2 text-white btn" style={{ backgroundColor: '#6A82FB' }}>
          Get Location
        </button>
      </div>
    </div>
  )
}
