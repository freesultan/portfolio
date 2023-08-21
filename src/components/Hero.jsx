import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen 
    mx-auto"
    >
      <div className="flex flex-row items-start gap-5 absolute inset-0 top-[120px] px-6 sm:px-16 ">
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="h-5 w-5 rounded-full bg-violet-600" />
          <div className="w-1 h-40 sm:h-60 bg-gradient-to-b  from-violet-600 to-transparent " />
        </div>
        <div className="text-white">
          <h1 className="text-5xl mt-4 font-black">
            I am <span className="text-violet-500">Tayyeb</span>
          </h1>
          <p className="text-xl mt-4 font-medium">
            {" "}
            I develop web applications &nbsp;
            <br className="sm:hidden block " />
            in Web2 and Web3 &nbsp;
            <br className="block " />
            using React, Nextjs, Mongodb,
            <br className="block " />
            Nodejs, Solidity, Hardhat , ...
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute bottom-1 w-full flex justify-center items-center">
        <a href="#about">
          <div className="border-4  border-slate-400 rounded-2xl p-2 w-[32px] h-[64px] flex justify-center items-start ">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 bg-slate-300 rounded-full mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
