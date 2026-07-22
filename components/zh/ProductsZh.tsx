"use client";


import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";



export default function ProductsZh() {



const products = [


{
number:"01",

title:"捷克水晶",

subtitle:"Czech Crystal Heritage",

image:"/images/crystal.jpg",

desc:
"传承欧洲百年工艺的捷克水晶产品，结合传统文化、艺术设计与卓越品质。",

link:"/products/crystal"

},




{
number:"02",

title:"欧洲精品贸易",

subtitle:"European Premium Products",

image:"/images/wine.jpg",

desc:
"精选欧洲高品质商品，连接欧洲制造商与全球市场，提供可靠的国际贸易服务。",

link:"/products/wine"

},




{
number:"03",

title:"工业供应链",

subtitle:"Industrial Supply Chain",

image:"/images/industry.jpg",

desc:
"提供欧洲工业设备、制造资源及供应链解决方案，支持全球企业合作。",

link:"/products/industry"

}



];







return(


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







{/* Title */}



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

CET 产品体系

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

我们的产品

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

欧洲品质 · 全球供应 · 长期合作

</p>



</motion.div>









{/* Cards */}



<div

className="

grid

md:grid-cols-3

gap-10

mt-16

"


>


{


products.map((item,index)=>(



<motion.div


key={item.number}



initial={{

opacity:0,

y:50

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








{/* Image */}



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










{/* Content */}



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

text-yellow-600

font-semibold

"


>

查看详情


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



))


}




</div>








</div>



</section>



);



}