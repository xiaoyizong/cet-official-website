"use client";


import Link from "next/link";
import Image from "next/image";


export default function NavbarZh(){


return (

<header
className="
fixed
top-0
left-0
w-full
z-50
bg-[#0f2b4d]/95
backdrop-blur-md
"
>


<div
className="
max-w-7xl
mx-auto
px-6
h-20
flex
items-center
justify-between
"
>


<Link href="/zh">

<Image

src="/logo.svg"

alt="CET"

width={220}

height={60}

className="w-auto h-12"

/>

</Link>



<nav
className="
hidden
md:flex
gap-8
items-center
"
>


<Link
href="/zh"
className="
text-white
font-semibold
hover:text-yellow-400
"
>
首页
</Link>



<Link
href="/zh#about"
className="
text-white
font-semibold
hover:text-yellow-400
"
>
关于 CET
</Link>



<Link
href="/zh#products"
className="
text-white
font-semibold
hover:text-yellow-400
"
>
产品
</Link>



<Link
href="/zh#global-network"
className="
text-white
font-semibold
hover:text-yellow-400
"
>
国际贸易
</Link>



<Link
href="/zh#contact"
className="
text-white
font-semibold
hover:text-yellow-400
"
>
联系我们
</Link>



</nav>


</div>


</header>


);


}