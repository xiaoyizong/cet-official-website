"use client";


import Image from "next/image";
import { motion } from "framer-motion";



type Market = {

  icon:string;

  country:string;

  description:string;

};





export default function GlobalNetwork(){



const markets:Market[]=[


{
icon:"🇨🇿",
country:"Czech Republic",
description:
"Premium Czech crystal products and European craftsmanship with strong cultural heritage."
},



{
icon:"🇩🇪",
country:"Germany",
description:
"Industrial equipment, engineering solutions and reliable manufacturing partnerships."
},



{
icon:"🇫🇷",
country:"France",
description:
"European premium goods, lifestyle products and international business cooperation."
},



{
icon:"🇪🇺",
country:"European Union",
description:
"Extensive supplier network covering major European manufacturing regions."
},



{
icon:"🌏",
country:"Asia Market",
description:
"Connecting European suppliers with Asian importers and business partners."
},



{
icon:"🌍",
country:"Global Trade",
description:
"International sourcing, logistics coordination and cross-border cooperation."
}



];






return(


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






{/* Header */}



<motion.div


initial={{

opacity:0,

y:30

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



className="
text-center
"

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

Connecting Europe and Asia through trusted suppliers,
premium products and international trade solutions.

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
relative
rounded-3xl
bg-white/5
border
border-white/10
backdrop-blur-md
p-6
md:p-10
overflow-hidden
"

>



<Image


src="/images/world-map.svg"


alt="Central Europe Trading global network map"


width={1200}


height={600}


sizes="
(max-width:768px)100vw,
1200px
"


priority


className="
w-full
opacity-70
"




/>








{/* Europe Point */}



<motion.div


animate={{

scale:[1,1.4,1]

}}



transition={{

duration:2,

repeat:Infinity

}}



className="
absolute
left-[31%]
top-[43%]
w-4
h-4
rounded-full
bg-yellow-400
shadow-[0_0_20px_#facc15]
"

/>








{/* Asia Point */}




<motion.div


animate={{

scale:[1,1.4,1]

}}



transition={{

duration:2,

repeat:Infinity,

delay:1

}}



className="
absolute
left-[70%]
top-[45%]
w-4
h-4
rounded-full
bg-yellow-400
shadow-[0_0_20px_#facc15]
"

/>










{/* Trade Route */}




<motion.div


animate={{

opacity:[0.3,1,0.3]

}}



transition={{

duration:2,

repeat:Infinity

}}



className="
absolute
left-[34%]
top-[45%]
w-[32%]
h-[3px]
bg-yellow-400
rounded-full
shadow-[0_0_15px_#facc15]
"

/>






</motion.div>









{/* Markets Cards */}




<div


className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
mt-16
"

>




{

markets.map((item,index)=>(




<motion.div



key={item.country}



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

duration:0.5,

delay:index*0.1

}}



whileHover={{

y:-8

}}



className="
rounded-2xl
bg-white/10
border
border-white/10
p-8
backdrop-blur-md
shadow-xl
"

>



<div

className="
text-4xl
"

>

{item.icon}

</div>







<h3

className="
mt-5
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



))


}




</div>







</div>



</section>



);



}