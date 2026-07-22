"use client";


import { motion } from "framer-motion";



export default function WhyChooseZh() {



const reasons = [


{
title:"欧洲资源优势",
description:
"CET 深耕欧洲市场，与欧洲供应商建立长期合作关系，为全球客户提供高品质产品资源。"
},



{
title:"可靠供应链",
description:
"通过专业采购、质量管理和物流协调，为客户提供稳定、高效的国际供应链服务。"
},



{
title:"高品质产品",
description:
"精选欧洲精品产品，包括捷克水晶、工业设备及欧洲特色商品，保证卓越品质。"
},



{
title:"国际贸易经验",
description:
"拥有跨境贸易经验，帮助欧洲企业与亚洲及全球市场建立长期商业合作。"
}



];







return (


<section

id="why-choose"

className="
py-28
bg-gray-50
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



<p

className="
text-yellow-500
font-semibold
tracking-[0.35em]
text-sm
"

>

WHY CET

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

为什么选择 CET

</h2>





<p

className="
mt-5
text-gray-600
text-lg
max-w-3xl
mx-auto
"

>

连接欧洲品质与全球市场，
提供值得信赖的国际贸易解决方案。

</p>



</motion.div>









{/* Cards */}



<div

className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-8
mt-16
"

>



{


reasons.map((item,index)=>(



<motion.div


key={item.title}



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

bg-white

rounded-3xl

p-8

shadow-lg

border

border-gray-100

hover:shadow-2xl

transition

"



>



<div

className="
w-12
h-12
rounded-full
bg-yellow-500
text-white
flex
items-center
justify-center
font-bold
text-xl
"

>

{index+1}

</div>





<h3

className="
mt-6
text-xl
font-bold
text-[#0f2b4d]
"

>

{item.title}

</h3>





<p

className="
mt-4
text-gray-600
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