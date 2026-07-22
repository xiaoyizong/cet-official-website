"use client";


import { motion } from "framer-motion";



export default function StatisticsZh(){



const statistics=[


{
number:"15+",
title:"年行业经验",
description:"深耕欧洲贸易与国际供应链领域"
},



{
number:"120+",
title:"全球客户",
description:"服务来自不同国家和地区的合作伙伴"
},



{
number:"30+",
title:"欧洲合作伙伴",
description:"建立稳定可靠的欧洲供应网络"
},



{
number:"20+",
title:"服务国家",
description:"业务覆盖欧洲、亚洲及全球市场"
}



];






return(



<section


id="statistics"


className="

py-28

bg-white

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



className="text-center"


>


<p

className="

text-yellow-500

font-semibold

tracking-[0.35em]

text-sm

uppercase

"

>

CET GLOBAL DATA

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

我们的全球实力

</h2>





<p


className="

mt-5

text-lg

text-gray-500

"


>

专业贸易经验 · 全球合作网络 · 稳定供应能力

</p>



</motion.div>












{/* Statistics */}





<div


className="

grid

grid-cols-2

lg:grid-cols-4

gap-8

mt-16

"


>


{


statistics.map((item,index)=>(



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

delay:index*0.15

}}



className="

text-center

p-8

rounded-3xl

bg-gray-50

border

border-gray-100

hover:shadow-xl

transition

"


>



<h3


className="

text-5xl

font-bold

text-yellow-500

"


>

{item.number}

</h3>







<h4


className="

mt-5

text-xl

font-bold

text-[#0f2b4d]

"


>

{item.title}

</h4>







<p


className="

mt-3

text-gray-500

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