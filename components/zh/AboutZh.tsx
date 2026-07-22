"use client";


import { motion } from "framer-motion";


export default function AboutZh() {


return (


<section
id="about"
className="
py-24
bg-white
"
>


<div

className="
max-w-6xl
mx-auto
px-6
grid
md:grid-cols-2
gap-16
items-center
"

>




{/* Image */}


<motion.img


src="/images/company.jpg"


alt="CET Company"


initial={{
opacity:0,
x:-40
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}


transition={{
duration:0.7
}}



className="

rounded-2xl

shadow-2xl

hover:scale-105

transition-all

duration-300

"


/>









{/* Content */}



<motion.div


initial={{
opacity:0,
x:40
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}


transition={{
duration:0.7
}}



>



<h2

className="

text-4xl

md:text-5xl

font-bold

text-[#0f2b4d]

"

>


关于 CET


</h2>







<p

className="

mt-8

text-lg

text-gray-600

leading-9

"

>



CET 是一家专注于国际贸易、
欧洲精品产品以及工业供应链服务的国际贸易公司。


<br/><br/>


我们长期与欧洲企业建立合作关系，
业务覆盖捷克、德国、法国、意大利等国家，
为全球客户提供高品质产品、
可靠采购渠道以及稳定供应链解决方案。


<br/><br/>


CET 致力于成为连接欧洲与亚洲市场的重要贸易桥梁，
通过专业贸易服务和国际合作，
帮助客户获得优质产品与长期商业价值。



</p>









{/* Statistics */}



<div

className="

grid

grid-cols-2

gap-8

mt-12

"

>






<div>


<h3

className="

text-5xl

font-bold

text-yellow-500

"

>

15+

</h3>


<p

className="

mt-2

text-gray-600

"

>

年以上经验

</p>


</div>







<div>


<h3

className="

text-5xl

font-bold

text-yellow-500

"

>

120+

</h3>


<p

className="

mt-2

text-gray-600

"

>

全球客户

</p>


</div>








<div>


<h3

className="

text-5xl

font-bold

text-yellow-500

"

>

30+

</h3>


<p

className="

mt-2

text-gray-600

"

>

欧洲合作伙伴

</p>


</div>








<div>


<h3

className="

text-5xl

font-bold

text-yellow-500

"

>

20+

</h3>


<p

className="

mt-2

text-gray-600

"

>

服务国家

</p>


</div>




</div>







</motion.div>



</div>



</section>


);


}