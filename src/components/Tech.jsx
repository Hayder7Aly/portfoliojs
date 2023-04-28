import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { useSelector } from "react-redux";
import {dataSelector} from "../slice/portfolioSlice"

const Tech = () => {
  const {overview_data : {stacks}} = useSelector(dataSelector)
  console.log(stacks
    )

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {stacks.map((technology,index) => (
        <div className='w-28 h-28 ' key={index}>
          <BallCanvas icon={technology} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
