"use client";


import { usePathname, useRouter } from "next/navigation";



export default function LanguageSwitcher(){



const router = useRouter();


const pathname = usePathname();





const isChinese = pathname.startsWith("/zh");







const changeLanguage=(lang:"EN"|"CN")=>{



if(lang==="EN"){


router.push("/");


}



if(lang==="CN"){


router.push("/zh");


}



};








return(



<div


className="

flex

items-center

gap-3

"


>







{/* English */}



<button


onClick={()=>changeLanguage("EN")}



className={`

px-3

py-1

rounded

text-sm

font-semibold

transition


${

!isChinese

?

"bg-yellow-500 text-white"

:

"border border-white text-white hover:bg-white hover:text-[#0f2b4d]"

}


`}



>


EN


</button>









{/* 中文 */}




<button


onClick={()=>changeLanguage("CN")}



className={`

px-3

py-1

rounded

text-sm

font-semibold

transition


${

isChinese

?

"bg-yellow-500 text-white"

:

"border border-white text-white hover:bg-white hover:text-[#0f2b4d]"

}


`}



>


中文


</button>







</div>



);



}