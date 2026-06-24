import {Hero} from "./sections/Hero";   
import {Navbar} from "./layout/Navbar";
import {About} from "./sections/About";
import {Contact} from "./sections/Contact";
import {Experience} from "./sections/Experience";
import {Testimonials} from "./sections/Testimonials";
import {Project} from "./sections/Project";   

function App() {
  return (
    <div className = "min-h-screen overflow-x-hidden"  >
      <Navbar/>
      <main>
        <Hero />
        

      </main>
    </div>
  )
  
}

export default App;