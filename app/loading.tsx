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

      <div
        className="
        text-5xl
        font-bold
        tracking-widest
        "
      >
        CET
      </div>


      <p
        className="
        mt-6
        text-gray-300
        text-sm
        tracking-widest
        "
      >
        CENTRAL EUROPE TRADING
      </p>


      <div
        className="
        mt-8
        w-12
        h-12
        border-4
        border-yellow-400
        border-t-transparent
        rounded-full
        animate-spin
        "
      />

    </div>
  );
}