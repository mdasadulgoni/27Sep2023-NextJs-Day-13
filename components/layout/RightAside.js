// Import Area 
import React from 'react'

// Defination Area 
 function RightAside() {
  return (
    <aside className='col-3 right-aside mt-3'>
    <ul className="nav flex-column bg-info">
        <li className="nav-item">
            <a className="nav-link active fs-3 text-light" href="#">What ?
            <p className='fs-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </a>
            
        </li>
        <li className="nav-item">
            <a className="nav-link active fs-3 text-light" href="#">Where ?
            <p className='fs-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link active fs-3 text-light " href="#">How ?
            <p className='fs-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link active fs-3 text-success" href='#'>The Food
            <p className="nav-link active fs-6 text-light">many variations of passages of Lorem Ipsum available, but the majority have</p>
            </a>
        </li>
    </ul>
    </aside>
  )
}
// Export Area 
// default export 
export default RightAside;