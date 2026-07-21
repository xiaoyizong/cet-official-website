"use client";

export default function LanguageSwitcher() {
  return (
    <div className="flex items-center gap-2">

      <button
        className="
          px-3
          py-1
          rounded
          bg-yellow-500
          text-white
          text-sm
          font-semibold
          hover:bg-yellow-400
          transition
        "
      >
        EN
      </button>

      <button
        className="
          px-3
          py-1
          rounded
          border
          border-white
          text-white
          text-sm
          font-semibold
          hover:bg-white
          hover:text-[#0f2b4d]
          transition
        "
      >
        中文
      </button>

    </div>
  );
}