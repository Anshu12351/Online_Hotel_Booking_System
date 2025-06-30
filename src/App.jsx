import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Body from './Components/Body'
import StartingPrice from './Components/StartingPrice';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Services from './Components/Services';
import About from './Components/About';
function App() {
 const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Body />
          <Footer />
        </>
      ),
    },
    // StartingPrice Button Link
    {
      path: '/StartingPrice',
      element: (
        <>
          <Navbar />
          <StartingPrice />
          <Footer />
        </>
      ),
    },
     // Services Button Link
     {
      path: '/Services',
      element: (
        <>
          <Navbar />
          <Services />
          <Footer />
        </>
      ),
    },
     // About Button Link
    {
      path: '/About',
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      ),
    },
    
     ]);
  return (
    <div className="min-w-full min-h-full text-shadow-lg/10">
      <RouterProvider router={router} />
    </div>

  );
}


export default App
