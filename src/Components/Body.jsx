import React from 'react'
// import {IoClose} from "react-modal";
import {useState} from 'react';
import { Link } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Body = () => {
  const [BookNow,setBookNow]=useState(false);
  return (
    <>
{/*-------------------------------------------B1------------------------------------------------------------- */}

      <div className="h-[1px] bg-gray-300"></div>
    <div className="md:w-full h-300 bg-[url('https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVkJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D')] mask-cover bg-cover bg-center relative overflow-hidden group  px-20 py-20">
    <div className="flex justify-between px-5 py-7  bg-amber-100 font-sans cursor-pointer rounded-2xl">
    <i className="fa-brands fa-xbox px-5 py-1 text-2xl ">Taj</i>
    <i className="px-5 py-1 text-2xl hover:text-cyan-800 "><Link to="/StartingPrice">Starting Price</Link></i>
    <i className="px-5 py-1 text-2xl hover:text-cyan-800"><Link to="/Services">Services</Link></i>
    <i className="px-5 py-1 text-2xl hover:text-cyan-800"><Link to="/About">About</Link></i>
    <div className="px-5 py-1 text-2xl  space-x-1 hover:text-cyan-800"><i>Contact Us</i><span><i className="fa-solid fa-circle-user"></i></span>
    </div>
     <div className="">
             <button className="border-2 bg-gray-800 text-white hover:border-amber-400 rounded-4xl px-5 py-1 text-2xl cursor-pointer" onClick={()=>setBookNow(true)}>BookNow</button>
             
        </div>
    </div>
    <div className="flex justify-between">
    <div className="w-200 py-10 text-white ">
        <p className="text-6xl p-0.5 text-shadow-lg/20">Welcome to Unmatched </p>
<p className="text-6xl text-shadow-lg/10">Five-Star Elegance</p>
<p className="text-2xl p-2 w-150 font-bold text-shadow-lg">“We pay attention to every detail to make sure you feel comfortable and cared for."</p>
<i className="m-10">
             <button className="border-2 bg-gray-800 text-white hover:border-amber-400 rounded-4xl px-10 py-4 text-2xl cursor-pointer" onClick={()=>setBookNow(true)}>BookNow</button>
        </i>
</div>
<div className="h-150 w-150 mt-10">
 {
              BookNow &&
             <div className="rounded-md p-4 border-2 opacity-95 border-x-orange-400">
              <div className=" flex flex-row justify-between">
                <h2 className="text-3xl"><i class="fa-solid fa-door-open mr-3"></i>Book Your Room</h2>
                <button className="font-bold text-4xl" onClick={()=>setBookNow(false)}><i class="fa-solid fa-xmark "></i></button>
              </div>
             <form className=" w-full flex justify-center align-center h-100 space-x-3 py-20">
              <i className="font-mono">
                <label className="text-2xl mr-15">Name : </label>
              <input type='text'className="border-2 hover:bg-white  "/><br/><br/>
                <label className="text-2xl mr-5.5">contact : </label>
              <input type='phone'className="border-2 hover:bg-white"/><br/><br/>
                <label className="text-2xl mr-9">Address: </label>
              <input type='text'className="border-2 hover:bg-white"/><br/><br/>
                <label className="text-2xl mr-3">Room Type: </label>
               <select className="w-48 h-7 border-2 hover:bg-white">
                <option value="Room">Regular</option>
                <option value="1">Regular++</option>
                <option value="2">Primium</option>
                <option value="3">Primium++</option>
                <option value="4">luxury</option>
               </select>
             
              <br/><br/>
                <label className="text-2xl">To:</label>
              <input type='date'className="border-2 hover:bg-white"/>
                <label className="text-2xl"> From To: </label>
              <input type='date'className="border-2 hover:bg-white"/>
              <i className='flex justify-center align-center mt-3'>
              <button className='h-10 w-40 text-amber-50 text-2xl font-extrabold bg-red-500 animate-pulse rounded-2xl'>Book</button>
               <button className='h-10 w-40 ml-5 text-amber-50  font-extrabold bg-red-500 animate-pulse  rounded-2xl'> <Link to="/StartingPrice">Room detail</Link><i class="fa-solid fa-arrow-right ml-2"></i></button>
              </i>
              </i>
             </form>
             
             </div>        
}
</div>
</div>
</div>
{/* ---------------------------------------------------------B2-------------------------------------------------- */}
<div className="bg-orange-50 w-full h-240 px-30 md:flex-col  ">
    <h1 className="text-5xl py-25 text-shadow-lg/30">Our Luxurious  Facilities</h1>

    <i className="flex justify-baseline space-x-5 py-0">
       
    <div className="w-80 py-10 px-5 bg-amber-100 hover:bg-amber-200 font-serif text-left">
        <i className="animate-pulse"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></i>
<p className="text-3xl">“Luxurious Accommodations”</p>
<p className="text-2xl ">“Spacious guest rooms and suites with high-quality furnishings
King or queen-sized beds with premium bedding” "Mini fridges or kitchenettes for added convenience Complimentary high-speed internet and breakfast"</p>
</div>

 <div className="w-80 py-10 px-5 bg-amber-100 hover:bg-amber-200">
 <i className="animate-pulse">       <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></i>
<p className="text-3xl font-serif">“Exceptional Dining Experiences”</p>
<p className="text-2xl">“Multiple on-site restaurants offering diverse cuisines” "Extensive breakfast buffet and room service options" "Personalized dining experiences tailored to guest preferences"</p>
</div>

<div className="w-80 py-10 px-5 bg-amber-100 hover:bg-amber-200">
 <i className="animate-pulse">       <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></i>
<p className="text-3xl font-serif">“World-Class Amenities”</p>
<p className="text-2xl">“Access to recreational facilities such as swimming pools, tennis courts, and fitness centers"
"Spa services providing relaxation and wellness treatments"</p>
</div>

<div className="w-80 py-10 px-5 bg-amber-100 hover:bg-amber-200">
 <i className="animate-pulse">    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></i>
<p className="text-3xl font-serif">“Personalized Service”</p>
<p className="text-2xl ">“Staff trained to anticipate guest needs and preferences"
"Consistent, attentive service regardless of peak times"
"Guests often greeted by name and offered personalized touches”</p>
</div>
</i>
</div>
{/* ---------------------------------------------------------B3-------------------------------------------------- */}
 <div className=" bg-amber-50 w-full h-200 bg-cover bg-[url('https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=')]">

</div>
{/* ---------------------------------------------------------B4-------------------------------------------------- */}
  <div className="w-full h-200 ">
        <p className=" text-6xl flex justify-center mt-30">Cleanliness</p>
        <p className=" text-4xl flex justify-center mt-20 animate-pulse text-emerald-700 text-shadow-lg/30">Before & After</p>
<i className="flex justify-center gap-6 mt-10">
<div className="w-150 h-100 py-10 px-5 hover:opacity-95  bg-[url('https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=')] bg-cover ">
<p className="mt-80">Before Booking</p></div>
<div className="w-150 h-100 py-10 px-5 hover:opacity-95 bg-[url('https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=')] bg-cover ">
<p className="mt-80 ">After Booking</p></div>
</i>
</div>
    </>
  )
}

export default Body