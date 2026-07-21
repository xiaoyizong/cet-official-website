import Image from "next/image";
import Link from "next/link";

export default function CrystalPage() {
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
          src="/images/crystal.jpg"
          alt="Czech Crystal"
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
            Czech Crystal
          </h1>


          <p
            className="
            mt-6
            text-xl
            text-gray-200
            "
          >
            European Heritage Craftsmanship
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
              Czech Crystal Excellence
            </h2>


            <p
              className="
              mt-6
              text-gray-600
              leading-8
              "
            >

              CET connects traditional Czech crystal
              craftsmanship with international markets.

              Combining European artistic heritage,
              premium materials and modern design,
              our crystal products represent quality
              and timeless elegance.

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
              Key Advantages
            </h3>


            <ul
              className="
              mt-6
              space-y-4
              text-gray-600
              "
            >

              <li>
                ✓ Czech traditional craftsmanship
              </li>


              <li>
                ✓ European premium quality
              </li>


              <li>
                ✓ Suitable for luxury markets
              </li>


              <li>
                ✓ Global export capability
              </li>


            </ul>


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

            Request Partnership

          </Link>


        </div>



      </section>



    </main>
  );
}