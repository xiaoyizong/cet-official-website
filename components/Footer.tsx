import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f2b4d] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">


          {/* Company */}

          <div>

            <h2 className="
              text-2xl
              font-bold
              tracking-wider
            ">
              CENTRAL EUROPE TRADING
            </h2>


            <p className="
              mt-4
              text-gray-300
              leading-7
            ">
              European Trade & Cultural Exchange.
              Connecting Czech heritage,
              premium products and global markets.
            </p>


          </div>




          {/* Quick Links */}

          <div>

            <h3 className="
              text-xl
              font-semibold
              text-yellow-400
            ">
              Quick Links
            </h3>


            <ul className="
              mt-5
              space-y-3
              text-gray-300
            ">

              <li>
                <Link
                  href="/"
                  className="hover:text-yellow-400 transition"
                >
                  Home
                </Link>
              </li>


              <li>
                <Link
                  href="/#about"
                  className="hover:text-yellow-400 transition"
                >
                  About CET
                </Link>
              </li>


              <li>
                <Link
                  href="/#products"
                  className="hover:text-yellow-400 transition"
                >
                  Products
                </Link>
              </li>


              <li>
                <Link
                  href="/#global-network"
                  className="hover:text-yellow-400 transition"
                >
                  Global Trade
                </Link>
              </li>


              <li>
                <Link
                  href="/#contact"
                  className="hover:text-yellow-400 transition"
                >
                  Contact
                </Link>
              </li>


            </ul>

          </div>





          {/* Products */}

          <div>

            <h3 className="
              text-xl
              font-semibold
              text-yellow-400
            ">
              Our Business
            </h3>


            <ul className="
              mt-5
              space-y-3
              text-gray-300
            ">


              <li>
                Czech Crystal
              </li>


              <li>
                European Premium Products
              </li>


              <li>
                Industrial Supply Chain
              </li>


              <li>
                International Trade
              </li>


            </ul>


          </div>





          {/* Contact */}

          <div>

            <h3 className="
              text-xl
              font-semibold
              text-yellow-400
            ">
              Contact
            </h3>


            <div className="
              mt-5
              space-y-4
              text-gray-300
            ">


              <p>
                📧
                <span className="ml-2">
                  info@centraleuropetrading.com
                </span>
              </p>


              <p>
                📍
                <span className="ml-2">
                  Czech Republic
                </span>
              </p>


              <p>
                🌍
                <span className="ml-2">
                  Europe & Global Markets
                </span>
              </p>


            </div>


          </div>



        </div>


      </div>





      {/* Bottom */}

      <div className="
        border-t
        border-white/10
      ">


        <div className="
          max-w-7xl
          mx-auto
          px-6
          py-6
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          text-sm
          text-gray-400
        ">


          <p>
            © 2026 CENTRAL EUROPE TRADING.
            All Rights Reserved.
          </p>


          <p className="mt-3 md:mt-0">

            European Trade & Cultural Exchange

          </p>


        </div>


      </div>



    </footer>
  );
}