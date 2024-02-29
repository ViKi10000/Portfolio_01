import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Experience from "./components/Experience";


function App() {
  return (
    <div className="">
    
      <Navbar />
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
      
    </div>
  );
}

export default App;
