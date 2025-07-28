import React from 'react'
import "../Pages/Home.css"

const Header = () => {
  return (
    <>
    <div className=" flex item-center justify-between bg-blue-950 text-white p-[12px] px-[50px] fixed top-[0px] w-[100%] z-1">
      <div className="">
        <h2>E-COMMERCE</h2>
      </div>
      <ul className='flex item-center gap-[50px]'>
        <li>Home</li>
        <li>About</li>
        <li>Contect</li>
        <li>Service</li>
        <div className="">
          <button className='bg-red-500 p-[3px] px-[20px] raunded-lg cursor-pointer'>login</button>
        </div>
      </ul>

    </div>
    </>
  )
}

export default Header