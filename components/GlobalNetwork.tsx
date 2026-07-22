"use client";


import Image from "next/image";
import { motion } from "framer-motion";



export default function GlobalNetwork() {


const markets = [

{
country:"🇨🇿 Czech Republic",
description:
"Premium crystal products and traditional European craftsmanship.",
},


{
country:"🇩🇪 Germany",
description:
"Industrial equipment, machinery and manufacturing solutions.",
},


{
country:"🇫🇷 France",
description:
"Luxury goods, food products and cultural trade.",
},


{
country:"🇪🇺 European Union",
description:
"Extensive sourcing network across major European markets.",
},


{
country:"🌏 Asia",
description:
"Connecting European suppliers with Asian business partners.",
},


{
country:"🌍 Global Market",
description:
"Reliable international trade and logistics services worldwide.",
},


];



return (

<section
id="global-network"
className="
py-28
bg-[#0f2b4d]
text-white
overflow-hidden
"
>


<div
className="
max-w-7xl
mx-auto
px-6
"
>



{/* Title */}


<motion.div

initial={{
opacity:0,
y:35
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:0.7
}}

className="text-center"

>


<h2
className="
text-4xl
md:text-5xl
font-bold
"
>

Global Network

</h2>



<p
className="
mt-5
text-gray-300
max-w-3xl
mx-auto
text-lg
"
>

Building long-term partnerships across Europe and Asia through trusted sourcing,
premium products and international trade.

</p>


</motion.div>









{/* World Map */}



<motion.div

initial={{
opacity:0,
scale:0.95
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

transition={{
duration:0.8
}}

className="
mt-16
rounded-3xl
bg-white/5
border
border-white/10
backdrop-blur-md
p-8
relative
overflow-hidden
"

>



<Image

src="/images/world-map.svg"

alt="Global trade network map connecting Europe and Asia"

width={1200}

height={600}

className="
w-full
opacity-70
"

 />







{/* Trade Route */}



<motion.div

animate={{

opacity:[
0.4,
1,
0.4
]

}}

transition={{

duration:2,

repeat:Infinity

}}

className="
absolute
left-[32%]
top-[42%]
w-[36%]
h-[3px]
bg-yellow-400
rounded-full
shadow-[0_0_18px_#facc15]
"

/>







{/* Europe Point */}


<div

className="
absolute
left-[31%]
top-[41%]
w-4
h-4
rounded-full
bg-yellow-400
shadow-[0_0_20px_#facc15]
"

/>






{/* Asia Point */}



<div

className="
absolute
left-[68%]
top-[41%]
w-4
h-4
rounded-full
bg-yellow-400
shadow-[0_0_20px_#facc15]
"

/>



</motion.div>










{/* Market Cards */}



<div
className="
grid
md:grid-cols-3
gap-8
mt-16
"
>


{
markets.map(
(item,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{

delay:index*0.1,

duration:0.6

}}

whileHover={{
y:-8
}}

className="
rounded-2xl
bg-white/10
backdrop-blur-md
border
border-white/10
p-8
shadow-xl
"

>


<h3
className="
text-2xl
font-bold
"
>

{item.country}

</h3>




<p
className="
mt-4
text-gray-300
leading-7
"
>

{item.description}

</p>



</motion.div>


)
)

}


</div>





</div>



</section>


);


}
