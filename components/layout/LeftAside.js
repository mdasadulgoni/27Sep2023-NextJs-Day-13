// Import Area 
import Link from 'next/link';
import React from 'react'

// Defination area 
 function LeftAside() {
  return (
    <aside className='col-3'>
        <ul className="nav flex-column ">
            <li className="nav-item bg-info mt-3">
                <Link className="nav-link active text-light fs-5" aria-current="page" href="/flight">The Flight</Link>
            </li>
            <li className="nav-item bg-info mt-3">
                <Link className="nav-link text-light fs-5" href="/city">The City</Link>
            </li>
            <li className="nav-item bg-info mt-3">
                <Link className="nav-link text-light fs-5" href="/islans">The Island</Link>
            </li>
            <li className="nav-item bg-info mt-3">
                <Link className="nav-link text-light fs-5" href='/food'>The Food</Link>
            </li>
        </ul>
   </aside>
  )
}
// export area 
// default area 
export default LeftAside;
