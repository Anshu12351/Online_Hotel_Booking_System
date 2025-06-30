import { Link } from 'react-router-dom'
function Services() {


  return (
      <div className="w-full h-400 bg-blue-100">
      <i className=" flex justify-center">
             <button className=" my-3 border-2 bg-gray-800 text-white hover:border-amber-400 rounded-2xl px-5 py-1 text-2xl cursor-pointer">   <Link to="/"><i className="fa-solid fa-house"></i></Link></button>
        </i>
     <div className="w-full h-20 bg-amber-950 py-3 ">
      <p className="md:text-4xl text-amber-50 flex justify-center animate-pulse">Welcome to this hotel, you will find the lowest priced accommodation here.</p>
     </div>
     <div className="w-full h-400  ">
      <h1 className="text-4xl ml-10 my-10 ">🏨 Our Services</h1>
      <h1 className="text-2xl italic ml-20 mt-5 text-left ">At [Hotel Name], we strive to provide a seamless and comfortable experience to all our guests. Our online booking platform offers a variety of services to make your stay memorable and hassle-free.</h1>
      <h1  className="text-3xl ml-10 my-10">🛏️ Room Booking</h1>
      <h1  className="text-2xl italic ml-20 mt-5 text-left">Easily search and book rooms based on your preferences – deluxe, suite, family rooms, and more. Real-time availability and instant confirmation.</h1>
      <h1  className="text-3xl ml-10 my-10">🍽️ In-Room Dining</h1>
      <h1  className="text-2xl italic ml-20 mt-5 text-left">Enjoy a wide variety of cuisines from the comfort of your room. Place your orders online through our portal or mobile app.</h1>
      <h1  className="text-3xl ml-10 my-10">🚗 Airport Pickup & Drop</h1>
      <h1  className="text-2xl italic ml-20 mt-5 text-left">Convenient transportation services available on request. Ensure a smooth arrival and departure experience.</h1>
      <h1  className="text-3xl ml-10 my-10">🧼 Daily Housekeeping</h1>
      <h1  className="text-2xl italic ml-20 mt-5 text-left">Clean and hygienic rooms maintained daily by our professional housekeeping staff.</h1>
      <h1  className="text-3xl ml-10 my-10">🌐 Free Wi-Fi</h1>
      <h1  className="text-2xl italic ml-20 mt-5 text-left">Stay connected with our complimentary high-speed internet service, available throughout the hotel.</h1>
      <h1  className="text-3xl ml-10 my-10">🏋️‍♂️ Fitness & Wellness</h1>
      <h1  className="text-2xl italic ml-20 mt-5 text-left">Access to our gym, spa, and wellness center during your stay. Book sessions online through your account.</h1>
      <h1  className="text-3xl ml-10 my-10">🎉 Event Booking</h1>
      <h1  className="text-2xl italic ml-20 mt-5 text-left">Host your events, conferences, or celebrations at our banquet halls. Check availability and book online.</h1>
      <h1  className="text-3xl ml-10 my-10">🕐 24/7 Customer Support</h1>
      <h1  className="text-2xl italic ml-20 mt-5 text-left">Our support team is available round-the-clock to assist you with bookings, queries, or concerns.</h1>
      
     </div>
    
    </div>
  )
}

export default Services