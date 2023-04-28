import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dataSelector, reterieveExperienceData, reterieveOverviewData, reterieveProjectsData, reterieveTestimonialsData } from "./slice/portfolioSlice";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { useEffect } from "react";


const App = () => {

  // debugger;

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(reterieveOverviewData())
    dispatch(reterieveExperienceData())
    dispatch(reterieveProjectsData())
    dispatch(reterieveTestimonialsData())


  }, [dispatch])

  const data= useSelector(dataSelector)





  return (
    <BrowserRouter>

{
     data.loading  ? "":

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
