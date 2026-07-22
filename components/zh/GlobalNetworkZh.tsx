"use client";


import Image from "next/image";
import { motion } from "framer-motion";



export default function GlobalNetworkZh(){



const markets=[


{
icon:"🇨🇿",
country:"捷克共和国",
description:
"欧洲水晶文化与传统制造工艺的重要基地，为全球客户提供高品质欧洲产品。"
},



{
icon:"🇩🇪",
country:"德国",
description:
"连接德国工业制造资源，提供机械设备、工业产品及专业供应链合作。"
},



{
icon:"🇫🇷",
country:"法国",
description:
"引入欧洲精品商品、生活方式产品以及国际商业合作资源。"
},



{
icon:"🇪🇺",
country:"欧洲联盟",
description:
"覆盖欧洲主要市场，建立稳定可靠的欧洲供应商网络。"
},



{
icon:"🌏",
country:"亚洲市场",
description:
"帮助欧洲供应商连接亚洲客户，促进跨境贸易合作。"
},



{
icon:"🌍",
country:"全球市场",
description:
"提供国际采购、贸易协调以及全球供应链服务。"
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








{/* 标题 */}



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

text-yellow-400

tracking-[0.35em]

font-semibold

text-sm

"

>

GLOBAL TRADE

</p>







<h2


className="

mt-4

text-4xl

md:text-5xl

font-bold

"


>

国际贸易网络

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

连接欧洲与亚洲市场，
通过可靠供应商、高品质产品以及专业贸易服务，
建立长期国际合作关系。


</p>




</motion.div>









{/* 世界地图 */}





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


alt="国际贸易地图"


width={1200}


height={600}


className="

w-full

opacity-70

"


/>







{/* 欧洲节点 */}



<motion.div


animate={{

scale:[1,1.5,1]

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









{/* 亚洲节点 */}



<motion.div


animate={{

scale:[1,1.5,1]

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









{/* 贸易线路 */}



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

h-[2px]

bg-yellow-400

rounded-full

shadow-[0_0_15px_#facc15]

"


/>



</motion.div>









{/* 市场卡片 */}





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

className="text-4xl"

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