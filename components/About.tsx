export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >

      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        grid
        md:grid-cols-2
        gap-16
        items-center
        "
      >


        {/* Company Image */}

        <img
          src="/images/company.jpg"
          alt="CET International Trading Company"
          className="
            rounded-2xl
            shadow-2xl
            hover:scale-105
            transition-all
            duration-300
          "
        />



        {/* Content */}

        <div>


          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#0f2b4d]
            "
          >
            About CET
          </h2>




          <p
            className="
            mt-8
            text-lg
            text-gray-600
            leading-9
            "
          >

            CET is an international trading company specializing in
            European premium products, global sourcing and industrial
            supply chain solutions.


            <br /><br />


            We build long-term partnerships with manufacturers and
            suppliers across Europe and worldwide, including the Czech
            Republic, Germany, France and Italy.


            <br /><br />


            Through professional trade services, reliable sourcing
            channels and efficient supply chain management, CET connects
            global markets with trusted partners and high-quality products.


          </p>





          {/* Statistics */}


          <div
            className="
            grid
            grid-cols-2
            gap-8
            mt-12
            "
          >



            <div>

              <h3
                className="
                text-5xl
                font-bold
                text-yellow-500
                "
              >
                15+
              </h3>

              <p
                className="
                mt-2
                text-gray-600
                "
              >
                Years of Experience
              </p>

            </div>





            <div>

              <h3
                className="
                text-5xl
                font-bold
                text-yellow-500
                "
              >
                120+
              </h3>

              <p
                className="
                mt-2
                text-gray-600
                "
              >
                Global Clients
              </p>

            </div>






            <div>

              <h3
                className="
                text-5xl
                font-bold
                text-yellow-500
                "
              >
                30+
              </h3>

              <p
                className="
                mt-2
                text-gray-600
                "
              >
                International Partners
              </p>

            </div>







            <div>

              <h3
                className="
                text-5xl
                font-bold
                text-yellow-500
                "
              >
                20+
              </h3>

              <p
                className="
                mt-2
                text-gray-600
                "
              >
                Countries Served
              </p>

            </div>




          </div>



        </div>



      </div>


    </section>
  );
}