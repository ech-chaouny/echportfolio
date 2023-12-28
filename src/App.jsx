import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Works,
  Contact,
  StarsCanvas,
  Footer,
} from "./components";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <Navbar />
          <Hero />
          <About />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
