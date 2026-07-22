"use client";

import { useState } from "react";
import { motion } from "framer-motion";


type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  message: string;
};


type StatusType = 
| "success"
| "error"
| "";


const initialForm: FormData = {

  name:"",
  company:"",
  email:"",
  phone:"",
  country:"",
  product:"",
  message:"",

};



export default function Contact(){


const [form,setForm] =
useState<FormData>(initialForm);


const [loading,setLoading] =
useState(false);


const [status,setStatus] =
useState("");


const [statusType,setStatusType] =
useState<StatusType>("");




const handleChange = (
e:
React.ChangeEvent<
HTMLInputElement |
HTMLTextAreaElement |
HTMLSelectElement
>
)=>{


setForm({

...form,

[e.target.name]:
e.target.value,

});


};






const handleSubmit = async(
e:React.FormEvent<HTMLFormElement>
)=>{


e.preventDefault();


if(loading)
return;



setLoading(true);

setStatus("");

setStatusType("");



try{


const response =
await fetch(
"/api/contact",
{

method:"POST",

headers:{
"Content-Type":
"application/json",
},

body:
JSON.stringify(form),

}
);



const data =
await response.json();




if(data.success){


setStatus(
"Message sent successfully. We will contact you soon."
);


setStatusType(
"success"
);


setForm(
initialForm
);



}
else{


setStatus(
"Failed to send message. Please try again."
);


setStatusType(
"error"
);


}



}

catch(error){


console.error(
"Contact form error:",
error
);



setStatus(
"Network error. Please try again later."
);


setStatusType(
"error"
);



}



finally{


setLoading(false);


}



};






return (

<section
id="contact"
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


<h2
className="
text-4xl
md:text-5xl
font-bold
text-[#0f2b4d]
"
>

Contact Us

</h2>


<p
className="
mt-5
text-gray-600
text-lg
"
>

We welcome long-term partnerships from customers around the world.

</p>


</motion.div>







<div
className="
grid
lg:grid-cols-5
gap-10
mt-16
"
>





{/* Information */}


<div
className="
lg:col-span-2
bg-[#0f2b4d]
rounded-3xl
p-10
text-white
"
>


<h3
className="
text-3xl
font-bold
"
>

Let&apos;s Build Business Together

</h3>



<p
className="
mt-6
text-gray-300
leading-8
"
>

European Trade,
Czech Crystal,
Industrial Supply Chain
and Global Partnership.

</p>




<div
className="
mt-10
space-y-6
"
>


<p>
📧 info@centraleuropetrading.com
</p>


<p>
📍 Czech Republic
</p>


<p>
🌍 Global Trade
</p>


</div>



</div>








{/* Form */}


<div
className="
lg:col-span-3
bg-white
rounded-3xl
shadow-xl
p-10
"
>


<form
onSubmit={handleSubmit}
className="
space-y-6
"
>





{
status && (

<div

className={`
rounded-xl
p-4
font-medium

${
statusType==="success"
?
"bg-green-100 text-green-700"
:
"bg-red-100 text-red-700"

}

`}

>

{status}

</div>

)

}







<div
className="
grid
md:grid-cols-2
gap-6
"
>


<input

name="name"

value={form.name}

onChange={handleChange}

required

placeholder="Full Name"

className="
border
rounded-xl
p-4
outline-none
focus:ring-2
focus:ring-yellow-500
"

/>



<input

name="company"

value={form.company}

onChange={handleChange}

placeholder="Company"

className="
border
rounded-xl
p-4
outline-none
"

/>



</div>









<div
className="
grid
md:grid-cols-2
gap-6
"
>



<input

type="email"

name="email"

value={form.email}

onChange={handleChange}

required

placeholder="Email Address"

className="
border
rounded-xl
p-4
outline-none
"

/>




<input

name="phone"

value={form.phone}

onChange={handleChange}

placeholder="Phone Number"

className="
border
rounded-xl
p-4
"

/>



</div>








<div
className="
grid
md:grid-cols-2
gap-6
"
>



<input

name="country"

value={form.country}

onChange={handleChange}

placeholder="Country"

className="
border
rounded-xl
p-4
"

/>




<select

name="product"

value={form.product}

onChange={handleChange}

className="
border
rounded-xl
p-4
"

>


<option value="">
Product Interest
</option>


<option value="Czech Crystal">
Czech Crystal
</option>


<option value="Industrial Supply">
Industrial Supply
</option>


<option value="European Trade">
European Trade
</option>


<option value="Other">
Other
</option>


</select>


</div>







<textarea

name="message"

value={form.message}

onChange={handleChange}

required

rows={6}

placeholder="Tell us about your inquiry..."

className="
w-full
border
rounded-xl
p-4
resize-none
"

/>









<button

type="submit"

disabled={loading}

className="
w-full
bg-yellow-500
hover:bg-yellow-600
disabled:bg-gray-400
text-white
py-4
rounded-xl
font-semibold
transition
"

>


{
loading
?
"Sending..."
:
"Send Inquiry"
}



</button>





</form>


</div>





</div>




</div>



</section>


);



}
