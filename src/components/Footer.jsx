
export const Footer = () => {
  return (
    <ul className='nav nav-tabs mx-4 border-0 nav-pills '>

      <li className='nav-item'>
        <button className='btn nav-link text-white' data-bs-toggle="tab" data-bs-target="#yourLocation" id='btnYourLocationFooter'>
          <i className="fa fa-map-marker" style={{ fontSize: '24px' }} aria-hidden="true"></i>
        </button>
      </li>

      <li className='nav-item'>
        <button className='btn nav-link active text-white' data-bs-toggle="tab" data-bs-target="#home" id='btnHomeFooter'>
          <i className="fa fa-home" style={{ fontSize: '24px' }} aria-hidden="true"></i>
        </button>
      </li>

      <li className='nav-item'>
        <button className='btn nav-link text-white' data-bs-toggle="tab" data-bs-target="#search">
          <i className="fa fa-search" style={{ fontSize: '24px' }} aria-hidden="true"></i>
        </button>
      </li>
    </ul>
  )
}
