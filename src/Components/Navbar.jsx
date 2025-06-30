import React from 'react'
const Navbar = () => {
  
  return (
    <>
      <div className="p-4 flex justify-between align-center bg-neutral-100">
            <i className="space-x-5">
            <i className="fa-solid fa-hotel text-5xl "></i>
        <span className="font-extrabold text-5xl text-red-9000 animate-ping ">HMS</span>
        </i>
        <i className="">
             <button className="border-2 hover:text-blue-800 hover:border-amber-400 rounded-4xl px-5 py-1 text-2xl cursor-pointer  hover:bg-amber-400 animate-pulse">Contact Us </button>
        </i>
    </div>

    </>
  )
}

export default Navbar