import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
// import Home from './components/Home.jsx'
import { App } from './components/App.jsx'
import './index.css'
// import { Search } from './components/Search.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   {/* <Home /> */}    
  //   <App />
  //   {/* <Search /> */}
  // </StrictMode>
  <App />
)
