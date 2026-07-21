import Image from "next/image";
import Link from "next/link";


export default function IndustryPage() {

  return (

    <main className="bg-white">


      {/* Hero */}

      <section
        className="
        relative
        h-[70vh]
        flex
        items-center
        justify-center
        "
      >

        <Image
          src="/images/industry.jpg"
          alt="Industrial Supply Chain"
          fill
          className="object-cover"
        />


        <div
          className="
          absolute
          inset-0
          bg-black/65
          "
        />


        <div
          className="
          relative
          z-10
          text-center
          text-white
          px-6
          "
        >

          <p
            className="
            text-yellow-400
            tracking-[0.4em]
            uppercase
            "
          >
            CET INDUSTRIAL SOLUTIONS
          </p>



          <h1
            className="
            mt-5
            text-5xl
            md:text-7xl
            font-bold
            "
          >

            Industrial Supply Chain

          </h1>




          <p
            className="
            mt-6
            text-xl
            text-gray-200
            "
          >

            Reliable European Industrial Solutions

          </p>



        </div>


      </section>









      {/* Content */}


      <section
        className="
        py-24
        max-w-6xl
        mx-auto
        px-6
        "
      >



        <div
          className="
          grid
          md:grid-cols-2
          gap-16
          "
        >





          <div>


            <h2
              className="
              text-4xl
              font-bold
              text-[#0f2b4d]
              "
            >

              European Industrial Partnership

            </h2>



            <p
              className="
              mt-6
              text-gray-600
              leading-8
              "
            >

              CET provides reliable industrial supply
              solutions by connecting European suppliers
              with global customers.

              We focus on quality products,
              professional cooperation and
              long-term industrial partnerships.

            </p>




            <p
              className="
              mt-5
              text-gray-600
              leading-8
              "
            >

              Our European network helps businesses
              access trusted manufacturers and
              efficient supply chain solutions.

            </p>


          </div>








          <div
            className="
            bg-gray-50
            rounded-3xl
            p-10
            "
          >


            <h3
              className="
              text-2xl
              font-bold
              text-[#0f2b4d]
              "
            >

              Core Services

            </h3>



            <ul
              className="
              mt-6
              space-y-5
              text-gray-600
              "
            >

              <li>
                ✓ European supplier sourcing
              </li>


              <li>
                ✓ Industrial product trading
              </li>


              <li>
                ✓ Supply chain coordination
              </li>


              <li>
                ✓ International business support
              </li>


            </ul>



          </div>



        </div>









        {/* Service Cards */}


        <div
          className="
          mt-20
          grid
          md:grid-cols-3
          gap-8
          "
        >



          <div
            className="
            bg-[#0f2b4d]
            rounded-2xl
            p-8
            text-white
            "
          >

            <h4
              className="
              text-xl
              font-bold
              "
            >
              Sourcing
            </h4>


            <p
              className="
              mt-3
              text-gray-300
              "
            >
              Connecting global buyers with European suppliers.
            </p>


          </div>





          <div
            className="
            bg-[#0f2b4d]
            rounded-2xl
            p-8
            text-white
            "
          >

            <h4
              className="
              text-xl
              font-bold
              "
            >
              Logistics
            </h4>


            <p
              className="
              mt-3
              text-gray-300
              "
            >
              Supporting international trade operations.
            </p>


          </div>





          <div
            className="
            bg-[#0f2b4d]
            rounded-2xl
            p-8
            text-white
            "
          >

            <h4
              className="
              text-xl
              font-bold
              "
            >
              Cooperation
            </h4>


            <p
              className="
              mt-3
              text-gray-300
              "
            >
              Building stable industrial partnerships.
            </p>


          </div>




        </div>









        <div
          className="
          mt-20
          text-center
          "
        >


          <Link
            href="/#contact"
            className="
            inline-block
            bg-yellow-500
            hover:bg-yellow-600
            text-white
            px-10
            py-4
            rounded-xl
            font-semibold
            transition
            "
          >

            Contact CET

          </Link>


        </div>



      </section>



    </main>

  );

}