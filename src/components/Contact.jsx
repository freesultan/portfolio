import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="text-white xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-slate-500 p-8 rounded-2xl"
      >
        <p className="text-xl"> Get in touch</p>
        <h3 className="text-3xl font-black">Social Contact.</h3>

        <div className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            
            <Link
              className="bg-slate-600  py-4 px-6  hover:text-blue-950  text-white rounded-lg outline-none border-none font-medium"
              to="https://www.linkedin.com/in/mohamad-tayyeb-soltani/"
              target="_blank"
            >
              Linkedin Profile
            </Link>
            <Link
              className="bg-slate-600 my-2 py-4 px-6 hover:text-blue-950   text-white rounded-lg outline-none border-none font-medium"
              to="https://github.com/freesultan/"
              target="_blank"
            >
              Github
            </Link>
          </label>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
