"use client";


import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";



export default function HeroZh() {


  return (


    <section

      id="home"

      className="
      relative
      min-h-screen
      flex
      items-center
      overflow-hidden
      bg-[#0f2b4d]
      "

    >




      {/* Background Image */}


      <Image

        src="/images/hero.jpg"

        alt="European Trade"

        fill

        priority

        className="
        object-cover
        opacity-40
        "

      />






      {/* Overlay */}


      <div

        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#0f2b4d]
        via-[#0f2b4d]/80
        to-transparent
        "

      />







      {/* Content */}



      <div

        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        w-full
        "

      >



        <motion.div


          initial={{
            opacity:0,
            y:40
          }}


          animate={{
            opacity:1,
            y:0
          }}


          transition={{
            duration:0.8
          }}



          className="
          max-w-3xl
          text-white
          "


        >





          <p

            className="
            text-yellow-400
            tracking-[0.35em]
            font-semibold
            uppercase
            text-sm
            "

          >

            CENTRAL EUROPE TRADING

          </p>








          <h1

            className="
            mt-6
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
            "

          >

            连接欧洲品质

            <br />

            服务全球贸易


          </h1>








          <p

            className="
            mt-8
            text-lg
            md:text-xl
            text-gray-200
            leading-8
            "

          >

            CET 专注于欧洲精品贸易、
            捷克水晶文化产品以及国际供应链解决方案，
            为全球客户提供可靠、高品质的商业合作。


          </p>










          {/* Buttons */}



          <div

            className="
            mt-10
            flex
            flex-wrap
            gap-5
            "

          >





            <Link


              href="/zh#products"


              className="

              bg-yellow-500

              hover:bg-yellow-400

              text-white

              px-8

              py-4

              rounded-xl

              font-semibold

              transition

              "

            >

              查看产品


            </Link>








            <Link


              href="/zh#contact"


              className="

              border

              border-white

              hover:bg-white

              hover:text-[#0f2b4d]

              text-white

              px-8

              py-4

              rounded-xl

              font-semibold

              transition

              "

            >

              联系我们


            </Link>







          </div>





        </motion.div>





      </div>







    </section>


  );

}