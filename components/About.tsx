"use client";


import Image from "next/image";
import { motion } from "framer-motion";



export default function About() {


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
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-2
gap-16
items-center
"
>





{/* Company Image */}

<motion.div

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
duration:0.8
}}

>


<div
className="
relative
overflow-hidden
rounded-3xl
shadow-2xl
"
>


<Image

src="/images/company.jpg"

alt="Central Europe Trading company"

width={800}

height={600}

priority

className="
object-cover
transition-transform
duration-500
hover:scale-105
"

/>


</div>


</motion.div>










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
duration:0.8
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

About CET

</h2>




<p
className="
mt-8
text-lg
text-gray-600
leading-9
"
>


Central Europe Trading (CET) is an international trading company specializing in European premium products and industrial supply chain solutions.


<br/>
<br/>


We cooperate with trusted manufacturers and partners across Czech Republic, Germany, France and Italy, providing high-quality European products and reliable business connections for global customers.


<br/>
<br/>


Our mission is to connect European heritage with global markets and build long-term partnerships between Europe and Asia.


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

Years Experience

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

Global Clients

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

European Partners

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

Countries Served

</p>


</div>







</div>





</motion.div>





</div>


</section>


);


}
