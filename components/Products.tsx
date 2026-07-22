"use client";


import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";



export default function Products(){


const products = [


{
number:"01",

title:"捷克水晶 Czech Crystal",

subtitle:
"Czech Crystal Heritage",

image:
"/images/crystal.jpg",

desc:
"Traditional Czech crystal craftsmanship combining European heritage, artistic design and premium quality.",

link:
"/products/crystal",

},



{
number:"02",

title:"欧洲精品贸易 European Premium Products",

subtitle:
"European Premium Products",

image:
"/images/wine.jpg",

desc:
"Premium European products connecting cultural value, quality manufacturing and global markets.",

link:
"/products/wine",

},



{
number:"03",

title:"工业供应链 Industrial Supply",

subtitle:
"Industrial Supply Chain",

image:
"/images/industry.jpg",

desc:
"Reliable European industrial solutions supporting international cooperation and supply networks.",

link:
"/products/industry",

},



];






return (


<section

id="products"

className="
py-28
bg-gradient-to-b
from-gray-50
to-white
"

>



<div

className="
max-w-7xl
mx-auto
px-6
"

>




<motion.div


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

duration:0.7

}}


className="text-center"


>



<p

className="
text-yellow-500
font-semibold
tracking-[0.35em]
uppercase
text-sm
"

>

CET COLLECTION

</p>



<h2

className="
mt-4
text-4xl
md:text-5xl
font-bold
text-[#0f2b4d]
"

>

Our Products

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

European Quality.
Global Supply.
Trusted Partnership.

</p>



</motion.div>








<div

className="
grid
md:grid-cols-3
gap-10
mt-16
"

>



{

products.map(

(item,index)=>(


<motion.div


key={item.number}


initial={{

opacity:0,

y:60

}}


whileInView={{

opacity:1,

y:0

}}


viewport={{

once:true

}}


transition={{

duration:0.6,

delay:index*0.15

}}


>



<Link


href={item.link}


aria-label={`View ${item.title}`}


className="
group
block
bg-white
rounded-3xl
overflow-hidden
shadow-lg
border
border-transparent
hover:border-yellow-400
hover:shadow-2xl
hover:-translate-y-3
transition-all
duration-500
"

>




<div

className="
relative
h-72
overflow-hidden
"

>


<Image


src={item.image}


alt={item.title}


fill


sizes="
(max-width:768px) 100vw,
33vw
"


className="
object-cover
transition-transform
duration-700
group-hover:scale-110
"

/>





<div

className="
absolute
top-5
left-5
bg-[#0f2b4d]/90
text-yellow-400
px-4
py-2
rounded-full
font-bold
"

>

{item.number}

</div>



</div>







<div

className="
p-8
"

>



<h3

className="
text-2xl
font-bold
text-[#0f2b4d]
"

>

{item.title}

</h3>





<p

className="
mt-2
text-yellow-600
font-medium
"

>

{item.subtitle}

</p>





<p

className="
mt-5
text-gray-600
leading-7
"

>

{item.desc}

</p>








<div

className="
mt-8
flex
items-center
gap-3
text-[#d4a017]
font-semibold
"

>

View Details


<ArrowRight

size={18}

className="
transition-transform
duration-300
group-hover:translate-x-2
"

/>


</div>






</div>






</Link>



</motion.div>



)

}



</div>






</div>



</section>


);


}
