"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export default function Loading() {


  return (


    <div

      className="
      min-h-screen
      flex
      flex-col
      items-center
      justify-center
      bg-[#0f2b4d]
      text-white
      "

    >



      {/* Logo */}

      <motion.div

        initial={{
          opacity:0,
          scale:0.8
        }}

        animate={{
          opacity:1,
          scale:1
        }}

        transition={{
          duration:0.6
        }}

      >

        <Image

          src="/logo.svg"

          alt="Central Europe Trading"

          width={260}

          height={80}

          priority

          className="
          object-contain
          "
        />


      </motion.div>








      {/* Company Name */}


      <motion.h1


        initial={{
          opacity:0,
          y:20
        }}


        animate={{
          opacity:1,
          y:0
        }}


        transition={{
          delay:0.2,
          duration:0.6
        }}



        className="

        mt-8

        text-2xl

        md:text-3xl

        font-bold

        tracking-[0.35em]

        "

      >

        CENTRAL EUROPE TRADING


      </motion.h1>









      {/* Slogan */}



      <motion.p


        initial={{
          opacity:0
        }}


        animate={{
          opacity:1
        }}


        transition={{
          delay:0.5,
          duration:0.6
        }}



        className="

        mt-4

        text-gray-300

        text-sm

        tracking-[0.25em]

        "

      >

        INTERNATIONAL TRADE & GLOBAL SUPPLY CHAIN


      </motion.p>









      {/* Loading Animation */}



      <motion.div


        initial={{
          opacity:0
        }}


        animate={{
          opacity:1
        }}


        transition={{
          delay:0.8
        }}



        className="

        mt-10

        w-14

        h-14

        border-4

        border-yellow-400

        border-t-transparent

        rounded-full

        animate-spin

        "

      />







      <p

        className="

        mt-6

        text-xs

        text-gray-400

        tracking-widest

        "

      >

        Connecting Global Markets...


      </p>




    </div>


  );

}