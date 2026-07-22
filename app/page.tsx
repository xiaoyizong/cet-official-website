import Navbar from "@/components/Navbar";

import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Products from "@/components/Products";
import GlobalNetwork from "@/components/GlobalNetwork";
import Statistics from "@/components/Statistics";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {


  return (

    <main
      className="
      min-h-screen
      bg-white
      "
    >


      {/* Navigation */}

      <Navbar />



      {/* Hero */}

      <section id="home">

        <Hero />

      </section>





      {/* About */}

      <section id="about">

        <About />

      </section>





      {/* Why Choose */}

      <section id="why-choose">

        <WhyChoose />

      </section>





      {/* Products */}

      <section id="products">

        <Products />

      </section>





      {/* Global Network */}

      <section id="global-network">

        <GlobalNetwork />

      </section>





      {/* Statistics */}

      <section id="statistics">

        <Statistics />

      </section>





      {/* Partners */}

      <section id="partners">

        <Partners />

      </section>





      {/* Contact */}

      <section id="contact">

        <Contact />

      </section>





      {/* Footer */}

      <Footer />



    </main>

  );

}