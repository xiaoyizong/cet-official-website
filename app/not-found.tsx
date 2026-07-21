import Link from "next/link";


export default function NotFound() {

  return (

    <div
      className="
      min-h-screen
      flex
      flex-col
      items-center
      justify-center
      bg-white
      "
    >

      <h1
        className="
        text-8xl
        font-bold
        text-[#0f2b4d]
        "
      >
        404
      </h1>


      <h2
        className="
        mt-6
        text-3xl
        font-bold
        text-gray-800
        "
      >
        Page Not Found
      </h2>


      <p
        className="
        mt-4
        text-gray-600
        "
      >
        The page you are looking for does not exist.
      </p>



      <Link

        href="/"

        className="
        mt-8
        bg-yellow-500
        hover:bg-yellow-600
        text-white
        px-8
        py-3
        rounded-xl
        font-semibold
        transition
        "

      >

        Back To Home

      </Link>


    </div>

  );

}