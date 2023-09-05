import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 text-xl bg-gradient-to-bl from-blue-400 via-blue-950 via-60% to-blue-400 to-90%  ">
        <div className="  ">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        {/* <Tech /> */}
        <Works />
         <div className="relative z-0 ">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
