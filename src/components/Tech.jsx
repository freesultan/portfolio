import React from "react";
import BallCanvas from "./canvas/Ball";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className="my-10 flex flex-row flex-wrap gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} className="" />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
