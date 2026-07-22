"use client";


import Image from "next/image";
import { motion } from "framer-motion";



export default function Partners(){



const partners=[


{
name:"Siemens",
logo:"/images/partners/siemens.svg",
},


{
name:"ABB",
logo:"/images/partners/abb.svg",
},


{
name:"Bosch",
logo:"/images/partners/bosch.svg",
},


{
name:"Schneider",
logo:"/images/partners/schneider.svg",
},


{
name:"SKF",
logo:"/images/partners/skf.svg",
},


{
name:"Festo",
logo:"/images/partners/festo.svg",
},


];




return (


<section

className="
py-28
bg-gradient-to-b
from-white
to-gray-50
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


className="
text-center
"

>


<h2

className="
text-4xl
md:text-5xl
font-bold
text-[#0f2b4d]
"

>

Trusted Partners

</h2>




<p

className="
mt-5
text-lg
text-gray-500
max-w-3xl
mx-auto
"

>

Collaborating with leading European manufacturers and industrial brands
to deliver premium products and reliable supply chain solutions.

</p>



</motion.div>









{/* Logo Grid */}



<div

className="
grid
grid-cols-2
md:grid-cols-3
lg:grid-cols-6
gap-8
mt-16
"

>


{


partners.map(

(partner,index)=>(



<motion.div


key={partner.name}


aria-label={partner.name}


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

delay:index*0.08,

duration:0.5

}}



whileHover={{

y:-8,

scale:1.03

}}


className="
group
h-32
rounded-2xl
bg-white
border
border-gray-200
shadow-md
hover:shadow-2xl
transition-all
duration-300
flex
items-center
justify-center
p-6
"

>


<Image


src={partner.logo}


alt={`${partner.name} European business partner`}


width={150}


height={60}


loading="lazy"


className="
object-contain
grayscale
opacity-70
transition-all
duration-300
group-hover:grayscale-0
group-hover:opacity-100
group-hover:scale-110
"

/>



</motion.div>



)

)


}



</div>







</div>


</section>


);



}
