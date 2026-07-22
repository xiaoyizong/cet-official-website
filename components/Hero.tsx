"use client";


import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


const MotionImage = motion(Image);



export default function Hero() {


return (

<section

className="
relative
min-h-screen
overflow-hidden
flex
items-center
justify-center
px-6
"

>





{/* Background */}



<motion.div

className="
absolute
inset-0
bg-cover
bg-center
"

style={{

backgroundImage:
"url('/images/hero-bg.jpg')",

}}

animate={{

scale:[
1,
1.08,
1
]

}}

transition={{

duration:25,

repeat:Infinity,

ease:"easeInOut"

}}

/>









{/* World Map */}



<MotionImage


src="/images/world-map.svg"


alt="Global trade network connecting Europe and Asia"


width={900}


height={500}


priority


className="
absolute
right-0
top-20
w-[700px]
opacity-20
"

animate={{

x:[
0,
20,
0
]

}}

transition={{

duration:12,

repeat:Infinity,

ease:"easeInOut"

}}


/>









{/* Overlay */}



<div

className="
absolute
inset-0
bg-gradient-to-r
from-[#061525]/90
via-[#0f2b4d]/75
to-black/50
"

/>









{/* Content */}



<div

className="
relative
z-10
max-w-6xl
text-center
text-white
"

>





<motion.p

initial={{

opacity:0,
y:20

}}

animate={{

opacity:1,
y:0

}}

transition={{

duration:0.7

}}

className="
uppercase
tracking-[0.45em]
text-yellow-400
font-semibold
text-sm
md:text-base
"

>

CENTRAL EUROPE TRADING

</motion.p>








<motion.h1

initial={{

opacity:0,
y:40

}}

animate={{

opacity:1,
y:0

}}

transition={{

delay:0.2,

duration:0.8

}}

className="
mt-8
text-5xl
md:text-7xl
font-bold
leading-tight
"

>

Connecting European Heritage

<br/>

With Global Markets


</motion.h1>








<motion.p

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{

delay:0.45,

duration:0.8

}}

className="
mt-8
text-xl
md:text-3xl
text-gray-200
"

>

European Products · Global Trade · Trusted Partnerships


</motion.p>








<motion.p

initial={{

opacity:0,
y:20

}}

animate={{

opacity:1,
y:0

}}

transition={{

delay:0.7

}}

className="
mt-6
max-w-3xl
mx-auto
text-gray-300
text-lg
md:text-xl
leading-8
"

>

CET connects Czech heritage,
European quality products and
industrial supply chains with
international markets.


</motion.p>









<div

className="
mt-8
flex
flex-wrap
justify-center
gap-4
"

>


{

[

"🇪🇺 European Products",

"🌍 Global Network",

"⚙ Industrial Supply"

].map(item=>(


<span

key={item}

className="
px-5
py-2
rounded-full
border
border-white/30
bg-white/10
backdrop-blur-md
text-sm
"

>

{item}

</span>


))

}


</div>









<div

className="
mt-12
flex
flex-col
sm:flex-row
justify-center
gap-5
"

>


<Link

href="/#products"

className="
px-10
py-4
bg-yellow-500
text-white
rounded-xl
font-semibold
shadow-xl
hover:bg-yellow-400
hover:-translate-y-1
transition
"

>

Explore Products

</Link>





<Link

href="/#contact"

className="
px-10
py-4
border
border-white
rounded-xl
font-semibold
hover:bg-white
hover:text-[#0f2b4d]
transition
"

>

Contact CET

</Link>



</div>









<div

className="
mt-16
grid
grid-cols-3
gap-8
max-w-3xl
mx-auto
"

>


<div>

<h3
className="
text-3xl
font-bold
text-yellow-400
"
>

10+

</h3>

<p className="text-sm text-gray-300">
Markets
</p>


</div>




<div>

<h3
className="
text-3xl
font-bold
text-yellow-400
"
>

20+

</h3>

<p className="text-sm text-gray-300">
Partners
</p>


</div>





<div>

<h3
className="
text-3xl
font-bold
text-yellow-400
"
>

100%

</h3>

<p className="text-sm text-gray-300">
Commitment
</p>


</div>



</div>






</div>







<motion.div

animate={{

y:[
0,
10,
0
]

}}

transition={{

duration:1.8,

repeat:Infinity

}}

className="
absolute
bottom-8
text-white
text-center
"

>


<div
className="
text-xs
tracking-[0.35em]
"
>

SCROLL

</div>


<div
className="
text-2xl
mt-2
"
>

↓

</div>


</motion.div>







</section>


);


}
