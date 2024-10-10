export const Header = () => {
  return (
    <ul className='nav nav-tabs position-absolute top-0 end-0 my-4 mx-4 border-0 nav-pills'>
      <li className='nav-item'>
        <button className='btn nav-link active text-white' data-bs-toggle="tab" data-bs-target="#home" id='btnHome'>Home</button>
      </li>

      <li className='nav-item'>
        <button className='btn nav-link text-white' data-bs-toggle="tab" data-bs-target="#yourLocation" id='btnYourLocation'>Your Location</button>
      </li>

      <li className='nav-item'>
        <button className='btn nav-link text-white' data-bs-toggle="tab" data-bs-target="#search">Search</button>
      </li>

    </ul>
  )
}
