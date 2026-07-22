"use client";

import Link from "next/link";


export default function LanguageSwitcher(){

return (

<div className="flex items-center gap-3">


<Link

href="/"

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

</Link>





<Link

href="/zh"

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

</Link>



</div>


);


}