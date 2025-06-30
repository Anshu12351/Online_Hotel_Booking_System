import { Link } from 'react-router-dom'
function About() {


  return (
      <div className="w-full h-400 bg-blue-100">
      <i className=" flex justify-center">
             <button className=" my-3 border-2 bg-gray-800 text-white hover:border-amber-400 rounded-2xl px-5 py-1 text-2xl cursor-pointer">   <Link to="/"><i className="fa-solid fa-house"></i></Link></button>
        </i>
     <div className="w-full h-20 bg-amber-950 py-3 ">
      <p className="md:text-4xl text-amber-50 flex justify-center animate-pulse">Welcome to this hotel, you will find the lowest priced accommodation here.</p>
     </div>
     <div className="w-full h-400  ">
      <h1 className="text-4xl ml-10 my-10 ">📖 About Us</h1>
      <h1 className="text-2xl italic ml-20 mt-5 text-left ">Welcome to Online hotel Booking System – your one-stop destination for hassle-free and reliable hotel booking services.</h1>
      <h1  className="text-3xl ml-10 my-10">🛏️ Room Booking</h1>
      <h1  className="text-2xl italic ml-20 mt-5 text-left line-clamp-none"> This project is an Online Hotel Booking System designed to make the process of reserving hotel rooms fast, easy, and efficient. Users can search for available rooms, check prices, and book rooms directly through the platform without visiting the hotel physically.</h1>
      <h1  className="text-3xl ml-10 my-10">The main objective of this system is to provide:</h1>
      <ul  className="text-2xl italic ml-30 mt-5 text-left list-disc"><li>A user-friendly interface for booking rooms</li>

<li>Real-time availability status</li>

<li>Instant booking confirmation</li>

<li>Secure login for customers and administrators</li>

<li>Booking history and cancellation features</li></ul>
      
     </div>
    
    </div>
  )
}

export default About