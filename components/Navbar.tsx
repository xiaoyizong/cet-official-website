"use client";


import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";



export default function Navbar(){



const [menuOpen,setMenuOpen]=useState(false);

const [scrolled,setScrolled]=useState(false);





// =====================
// Scroll Detection
// =====================

useEffect(()=>{


const handleScroll=()=>{

setScrolled(
window.scrollY > 60
);

};


handleScroll();


window.addEventListener(
"scroll",
handleScroll
);



return()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};


},[]);








// =====================
// Lock Body Scroll
// =====================


useEffect(()=>{


document.body.style.overflow =
menuOpen
?
"hidden"
:
"";



return()=>{

document.body.style.overflow="";

};


},[menuOpen]);










// =====================
// ESC Close Menu
// =====================


useEffect(()=>{


const handleKey=(e:KeyboardEvent)=>{


if(
e.key==="Escape"
){

setMenuOpen(false);

}


};



window.addEventListener(
"keydown",
handleKey
);



return()=>{


window.removeEventListener(
"keydown",
handleKey
);


};


},[]);










const navLinks=[


{
name:"HOME",
href:"/",
},


{
name:"ABOUT",
href:"/#about",
},


{
name:"PRODUCTS",
href:"/#products",
},


{
name:"GLOBAL TRADE",
href:"/#global-network",
},


{
name:"CONTACT",
href:"/#contact",
},


];









return(


<>


<header


className={`
fixed
top-0
left-0
w-full
h-20
z-50

transition-all
duration-500


${
scrolled

?

`
bg-[#0f2b4d]/95
backdrop-blur-xl
shadow-xl
border-b
border-white/10
`

:

`
bg-[#0f2b4d]/70
backdrop-blur-md
`

}

`}


>




<div

className="
max-w-7xl
mx-auto
px-6
h-full
flex
items-center
justify-between
"

>





{/* Logo */}


<Link


href="/"

className="
flex
items-center
"

>


<Image


src="/logo.svg"


alt="Central Europe Trading Logo"


width={260}


height={70}


priority


className={`

object-contain

transition-all
duration-500


${
scrolled

?

"h-10 md:h-12"

:

"h-14 md:h-16"

}


w-auto

`}


/>



</Link>









{/* Desktop Menu */}



<nav


className="
hidden
md:flex
items-center
gap-8
"

>



{


navLinks.map(item=>(


<Link


key={item.name}


href={item.href}


className="

relative

text-white

text-sm

font-semibold

tracking-wide

transition

hover:text-yellow-400


after:absolute

after:left-0

after:-bottom-2

after:h-[2px]

after:w-0

after:bg-yellow-400

after:transition-all

hover:after:w-full

"


>


{item.name}


</Link>


))


}




<LanguageSwitcher />



</nav>









{/* Mobile Button */}



<button


className="
md:hidden
text-white
"


aria-label="Open mobile menu"


onClick={()=>setMenuOpen(true)}


>


<Menu size={32}/>


</button>






</div>




</header>












{/* Mobile Menu */}



<AnimatePresence>


{


menuOpen && (



<>



{/* Overlay */}


<motion.div


initial={{
opacity:0
}}


animate={{
opacity:1
}}


exit={{
opacity:0
}}


className="
fixed
inset-0
bg-black/60
backdrop-blur-sm
z-40
"


onClick={()=>setMenuOpen(false)}


/>








{/* Drawer */}



<motion.aside


initial={{
x:"100%"
}}


animate={{
x:0
}}


exit={{
x:"100%"
}}


transition={{
duration:0.35
}}


className="

fixed

right-0

top-0

h-screen

w-80

bg-[#0f2b4d]

z-50

shadow-2xl

p-8

"


>







<div

className="
flex
items-center
justify-between
"

>


<Image


src="/logo.svg"


alt="Central Europe Trading"


width={180}


height={50}


className="
h-10
w-auto
"


/>



<button


aria-label="Close mobile menu"


onClick={()=>setMenuOpen(false)}


className="
text-white
"


>


<X size={32}/>


</button>


</div>









<nav


className="
mt-12
space-y-6
"


>


{


navLinks.map(

(item,index)=>(



<motion.div


key={item.name}


initial={{

opacity:0,

x:30

}}


animate={{

opacity:1,

x:0

}}


transition={{

delay:index*0.08

}}


>



<Link


href={item.href}


onClick={()=>setMenuOpen(false)}


className="

block

text-white

text-lg

font-semibold

hover:text-yellow-400

transition

"


>


{item.name}


</Link>


</motion.div>


)


)


}




</nav>







<div

className="
mt-12
"


>


<LanguageSwitcher />


</div>








</motion.aside>





</>



)


}



</AnimatePresence>



</>


);


}
