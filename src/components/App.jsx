import './App.css';
import { YourLocation } from './YourLocation';
import { Search } from './Search';
import { Header } from './Header';
import { Footer } from './Footer';
// import { useEffect, useState } from 'react';

export const App = () => {

  async function handleBtnGetStart() {

    const btnHome = document.getElementById('btnHome');
    const btnYourLocation = document.getElementById('btnYourLocation');

    const btnHomeFooter = document.getElementById('btnHomeFooter');
    const btnYourLocationFooter = document.getElementById('btnYourLocationFooter');

    const home = document.getElementById('home');
    const yourLocation = document.getElementById('yourLocation');

    btnHome.className = 'btn nav-link text-white';
    btnYourLocation.className = 'btn nav-link active text-white';
    btnHomeFooter.className = 'btn nav-link text-white';
    btnYourLocationFooter.className = 'btn nav-link active text-white';
    home.className = 'tab-pane fade';
    yourLocation.className = 'tab-pane fade show active';

  }

  return (<div className='container-fluid'>
    <header className='d-none d-sm-block'>
      <Header />
    </header>

    <div className="tab-content">

      <div className="tab-pane fade show active" id='home'>
        <div className="row text-center">

          <div className="col-12 col-sm-6 col-md-6 col-lg-6 d-sm-none">
            <img src="images/thunderstormNew.png" alt="" className='img-fluid w-75' />
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <h1 id='homeTitle' className='text-white'>Weather</h1>

            <button id='btnGetStart' className='btn btn-warning px-4' onClick={handleBtnGetStart}>Get Start</button>

          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <img src="images/rain.png" alt="" className='img-fluid w-50 w-md-100 w-lg-100' id='bottomImg' />
          </div>

        </div>
      </div>

      <div className="tab-pane fade" id='yourLocation'>
        <YourLocation />
      </div>

      <div className="tab-pane fade" id='search'>
        <Search />
      </div>

    </div>

    <footer className='mt-2 d-sm-none d-flex justify-content-center mb-4'>
      <Footer />
    </footer>

  </div>)

}