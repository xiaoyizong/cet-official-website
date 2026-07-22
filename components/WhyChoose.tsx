export default function WhyChoose() {

  const items = [

    {
      title: "European Origin",
      text:
        "Long-term partnerships with trusted European suppliers ensure authentic products and reliable sourcing."
    },


    {
      title: "Quality Assurance",
      text:
        "Strict quality control processes guarantee stable, reliable and premium products for our customers."
    },


    {
      title: "Global Trade",
      text:
        "Serving customers across Asia, Europe and global markets with professional international trade experience."
    },


    {
      title: "Long-Term Partnership",
      text:
        "Building trusted relationships through integrity, professional service and sustainable cooperation."
    }

  ];



  return (

    <section
      className="
      py-24
      bg-white
      "
    >


      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        "
      >



        {/* Title */}


        <h2
          className="
          text-4xl
          md:text-5xl
          font-bold
          text-center
          text-[#0f2b4d]
          "
        >
          Why Choose CET
        </h2>



        <p
          className="
          text-center
          mt-4
          text-gray-500
          text-lg
          "
        >
          Trusted European Trade Partner
        </p>





        {/* Cards */}


        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          mt-14
          "
        >



          {items.map((item,index)=>(


            <div

              key={index}

              className="
              p-8
              rounded-xl
              bg-white
              border
              border-gray-100
              shadow-md
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
              "

            >



              <div
                className="
                text-5xl
                mb-5
                "
              >
                ⭐
              </div>





              <h3
                className="
                text-xl
                font-bold
                text-[#0f2b4d]
                "
              >
                {item.title}
              </h3>





              <p
                className="
                mt-4
                text-gray-600
                leading-7
                "
              >
                {item.text}
              </p>




            </div>


          ))}



        </div>



      </div>



    </section>

  );

}