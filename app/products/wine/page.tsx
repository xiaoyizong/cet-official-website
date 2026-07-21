import Image from "next/image";
import Link from "next/link";


export default function WinePage() {

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
          src="/images/wine.jpg"
          alt="European Premium Products"
          fill
          className="object-cover"
        />


        <div
          className="
          absolute
          inset-0
          bg-black/60
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
            CET COLLECTION
          </p>


          <h1
            className="
            mt-5
            text-5xl
            md:text-7xl
            font-bold
            "
          >
            European Premium Products
          </h1>


          <p
            className="
            mt-6
            text-xl
            text-gray-200
            "
          >
            Connecting European Quality With Global Markets
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



          {/* Description */}


          <div>


            <h2
              className="
              text-4xl
              font-bold
              text-[#0f2b4d]
              "
            >
              European Product Selection
            </h2>


            <p
              className="
              mt-6
              text-gray-600
              leading-8
              "
            >

              CET specializes in sourcing premium European
              products and connecting trusted suppliers
              with international customers.

              Through our European network,
              we provide carefully selected products
              representing quality, tradition and innovation.

            </p>



            <p
              className="
              mt-5
              text-gray-600
              leading-8
              "
            >

              Our goal is to create reliable long-term
              partnerships between European producers
              and global markets.

            </p>


          </div>







          {/* Advantages */}


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

              Business Advantages

            </h3>



            <ul
              className="
              mt-6
              space-y-5
              text-gray-600
              "
            >

              <li>
                ✓ European supplier network
              </li>


              <li>
                ✓ Premium quality products
              </li>


              <li>
                ✓ International trade experience
              </li>


              <li>
                ✓ Flexible cooperation solutions
              </li>


            </ul>



          </div>


        </div>







        {/* Categories */}


        <div
          className="
          mt-20
          grid
          md:grid-cols-3
          gap-6
          "
        >


          <div
            className="
            rounded-2xl
            bg-[#0f2b4d]
            text-white
            p-8
            "
          >

            <h4
              className="
              text-xl
              font-bold
              "
            >
              European Goods
            </h4>


            <p
              className="
              mt-3
              text-gray-300
              "
            >
              Selected products from Europe.
            </p>


          </div>





          <div
            className="
            rounded-2xl
            bg-[#0f2b4d]
            text-white
            p-8
            "
          >

            <h4
              className="
              text-xl
              font-bold
              "
            >
              Global Trade
            </h4>


            <p
              className="
              mt-3
              text-gray-300
              "
            >
              Connecting suppliers and buyers worldwide.
            </p>


          </div>





          <div
            className="
            rounded-2xl
            bg-[#0f2b4d]
            text-white
            p-8
            "
          >

            <h4
              className="
              text-xl
              font-bold
              "
            >
              Partnership
            </h4>


            <p
              className="
              mt-3
              text-gray-300
              "
            >
              Building sustainable business relationships.
            </p>


          </div>



        </div>







        {/* Contact Button */}


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

            Request Partnership

          </Link>


        </div>



      </section>



    </main>

  );

}