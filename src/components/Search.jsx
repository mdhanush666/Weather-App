import { useEffect, useState } from "react"

export const Search = () => {

  const apiKey = '88066308da3b695df882eab02f68e2da';

  const [result, setResult] = useState(null);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState();
  const [imgIcon, setImgIcon] = useState(null);

  // Fetch Location.............
  const fetchLocation = async () => {
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    setLocation(data);
  }

  // Fetch Data................
  const fetchData = async (lat, lon) => {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    setResult(data)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  function handleBtnSearch() {
    const load1 = document.getElementById('load1');
    const load2 = document.getElementById('load2');

    const btn1 = document.getElementById('searchBtn1');
    const btn2 = document.getElementById('searchBtn2');

    btn1.className = 'd-none';
    btn2.className = 'd-none';

    load1.innerHTML = '<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>';
    load2.innerHTML = '<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>';

    setTimeout(() => {
      fetchLocation()
      load1.innerHTML = '';
      load2.innerHTML = '';

      btn1.className = 'fa fa-search';
      btn2.className = 'fa fa-search';
    }, 1000)
  }

  useEffect(() => {
    if (location) {
      try {
        fetchData(location[0].lat, location[0].lon)
      } catch (error) {
        alert('Invalid Location Name!')
        setSearch('')
      }
    }
  }, [location])

  // Get Image Icon..................
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


  return (
    <div className="row text-center">

      <div className="text-white col-12 col-sm-6 col-md-6 col-lg-6 order-lg-2 order-sm-2 d-flex flex-column justify-content-center align-items-center">

        <p className='position-absolute top-0 start-0 mx-4 mt-4 fw-lighter display-6' style={{ color: '#ffffffea' }}>Search</p>

        <div className='search-section d-block d-sm-none'>
          <input type="text" placeholder='location name...' value={search} onChange={handleChange} />
          <i id="searchBtn1" className="fa fa-search" style={{ fontSize: '20px', color: '#ffffffea' }} aria-hidden="true" onClick={handleBtnSearch}></i>
          <span id="load1"></span>
        </div>

        <img src={result ? (imgIcon) : ''} alt="No Image" className='img-fluid w-75' />
        <h1>{result ? (result.weather[0].description) : ''}</h1>

      </div>

      <div className="col-12 col-sm-6 col-md-6 col-lg-6 order-lg-1 order-sm-1 text-white d-flex flex-column justify-content-center align-items-center ">

        <div className='search-section d-none d-sm-block'>
          <input type="text" placeholder='location name...' value={search} onChange={handleChange} />
          <i id="searchBtn2" className="fa fa-search searchBtn" style={{ fontSize: '20px', color: '#ffffffea' }} aria-hidden="true" onClick={handleBtnSearch}></i>
          <span id="load2"></span>
        </div>

        <h1 className='tempVal'>{result ? (result.main.temp - 273.15).toFixed(1) : 0}°</h1>
        <p>Temperature</p>
        <p>Max : {result ? (result.main.temp_max - 273.15).toFixed(1) : 0}° &emsp; &emsp; Min : {result ? (result.main.temp_min - 273.15).toFixed(1) : 0}°</p>

        <table className='table text-start w-75'>
          <tbody>
            <tr>
              <th>Your Location</th>
              <td>:</td>
              <td>{result ? (result.name) : '-'}</td>
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
          </tbody>
        </table>
      </div>

    </div>
  )
}
