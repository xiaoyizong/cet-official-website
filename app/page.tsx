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

    <main className="min-h-screen">


      {/* ================= Navbar ================= */}

      <Navbar />



      {/* ================= Hero ================= */}

      <Hero />



      {/* ================= About CET ================= */}

      <section id="about">
        <About />
      </section>




      {/* ================= Why Choose CET ================= */}

      <WhyChoose />





      {/* ================= Products ================= */}

      <Products />





      {/* ================= Global Network ================= */}

      <section id="global-network">
        <GlobalNetwork />
      </section>





      {/* ================= Statistics ================= */}

      <Statistics />





      {/* ================= Partners ================= */}

      <Partners />





      {/* ================= Contact ================= */}

      <Contact />





      {/* ================= Footer ================= */}

      <Footer />



    </main>

  );
}