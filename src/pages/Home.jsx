import About from "./About";
import Landingpage from "../components/Sections/Landingpage";
import Work from "./Work";
import Approach from "../components/Sections/Approach";
import FAQSection from "../components/Sections/faq/FAQSection";
import TechSection from "../components/Sections/TechSection";


export default function Home() {
  return (
    <section className="min-h-screen w-full  overflow-hidden relative">
      
     
 
        <div className="flex flex-col justify-center items-center">
          
          {/* Top Section */}
          <div className="w-full h-[100vh] flex flex-col items-center ">
            
            <Landingpage />
          </div>
          
          {/* About Section */}
          <div className="w-full ">
            <About />
          </div>

          <div className="w-full">
            <TechSection />
          </div>

          <div className=" ">
            <Approach/>
          </div>

          {/* About Section */}
          <div className=" w-full">
            <Work />
          </div>

          


          {/* Example Placeholder Section */}
          
          
        </div>
      
    </section>
  );
}
