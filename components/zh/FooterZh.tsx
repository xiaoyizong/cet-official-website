"use client";


import Link from "next/link";
import Image from "next/image";



export default function FooterZh(){



const links=[


{
name:"首页",
href:"/zh"
},


{
name:"关于 CET",
href:"/zh#about"
},


{
name:"产品",
href:"/zh#products"
},


{
name:"国际贸易",
href:"/zh#global-network"
},


{
name:"联系我们",
href:"/zh#contact"
}


];







return(


<footer


className="

bg-[#0f2b4d]

text-white

"


>



<div


className="

max-w-7xl

mx-auto

px-6

py-16

"


>







<div


className="

grid

md:grid-cols-3

gap-12

"


>









{/* Logo */}



<div>



<Link href="/zh">


<Image


src="/logo.svg"


alt="CENTRAL EUROPE TRADING"


width={220}


height={60}


/>


</Link>





<p


className="

mt-6

text-gray-300

leading-8

"


>

CENTRAL EUROPE TRADING

致力于欧洲优质产品、

国际供应链以及全球贸易合作。

</p>



</div>













{/* Navigation */}



<div>



<h3


className="

text-xl

font-bold

mb-6

"

>

快速导航

</h3>





<ul

className="space-y-4"

>


{

links.map(item=>(


<li key={item.name}>


<Link


href={item.href}


className="

text-gray-300

hover:text-yellow-400

transition

"


>


{item.name}


</Link>



</li>



))


}



</ul>



</div>













{/* Contact */}



<div>



<h3


className="

text-xl

font-bold

mb-6

"

>

联系我们

</h3>






<div


className="

space-y-4

text-gray-300

"


>


<p>
📧 info@centraleuropetrading.com
</p>


<p>
📍 Czech Republic
</p>


<p>
🌍 International Trade Partner
</p>


</div>



</div>









</div>









{/* Bottom */}



<div


className="

border-t

border-white/20

mt-12

pt-8

text-center

text-gray-400

text-sm

"


>



<p>


© {new Date().getFullYear()} CENTRAL EUROPE TRADING.

版权所有。


</p>



</div>






</div>



</footer>



);



}