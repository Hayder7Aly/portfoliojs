import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dataSelector, reterieveAllData } from "./slice/portfolioSlice";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { useEffect } from "react";
// import { useEffect } from "react";

const App = () => {

  // debugger;'

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(reterieveAllData())


  }, [dispatch])

  const {isDataInit, loading} = useSelector(dataSelector)

  if(isDataInit) {
    console.log("Less go")
  }else{
    console.log("noooooooo")
  }



  return (
    <BrowserRouter>

{
     loading ? "" :

      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      
      
      }

    </BrowserRouter>
  );
}

export default App;
