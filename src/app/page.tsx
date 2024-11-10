import Hero from "../components/Hero";
import Image from "next/image";
import Skills from "../components/Skills";

import About from "../components/About";
import Contact from "../components/Contact";

export default function Home () {
  return (
<div>
    
  
   <Hero />
   <div>
    <Image src="/self.jpg" width={150} height={180} alt="self" ></Image>
</div>


  <Skills />  

  
  <About />
   
  <Contact />
</div>
   

   
     );
}
