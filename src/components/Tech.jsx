import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { useSelector } from "react-redux";
import {dataSelector} from "../slice/portfolioSlice"

const Tech = () => {
  const {overview_data : {stacks}} = useSelector(dataSelector)
 

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 p-5 rounded-lg' style={{backgroundColor: "#111"}}>
      {stacks.map((technology,index) => (
        <div className='w-28 h-28  ' key={index}>
          <BallCanvas icon={technology} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
