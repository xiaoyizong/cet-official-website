"use client";


import { useState } from "react";
import { motion } from "framer-motion";



type ContactFormData = {

  name:string;

  company:string;

  email:string;

  phone:string;

  country:string;

  product:string;

  message:string;

};




const initialForm:ContactFormData={

name:"",

company:"",

email:"",

phone:"",

country:"",

product:"",

message:"",

};





type StatusType =
"success"
|
"error"
|
"";





export default function Contact(){



const [form,setForm]=
useState<ContactFormData>({
...initialForm
});



const [loading,setLoading]=
useState(false);



const [status,setStatus]=
useState("");



const [statusType,setStatusType]=
useState<StatusType>("");







function handleChange(
e:
React.ChangeEvent<
HTMLInputElement |
HTMLTextAreaElement |
HTMLSelectElement
>
){


setForm({

...form,

[e.target.name]:

e.target.value

});


}










async function handleSubmit(
e:React.FormEvent<HTMLFormElement>
){


e.preventDefault();



if(loading)return;



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

"application/json"

},


body:

JSON.stringify(form)

}

);





const data =
await response
.json()
.catch(()=>null);





if(!response.ok){

throw new Error(
"Server error"
);

}





if(data?.success){


setStatus(
"Message sent successfully. We will contact you soon."
);


setStatusType(
"success"
);


setForm({
...initialForm
});



}else{


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


}









return(

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
text-lg
text-gray-600
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

Let's Build Business Together

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
space-y-5
"

>

<p>
📧 info@centraleuropetrading.com
</p>

<p>
📍 Czech Republic
</p>

<p>
🌍 Europe & Global Markets
</p>


</div>


</div>










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
status &&

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

}





<div

className="
grid
md:grid-cols-2
gap-6
"

>


{
[
["name","Full Name"],
["company","Company"],
["email","Email Address"],
["phone","Phone Number"],
["country","Country"]

].map(([name,placeholder])=>(


<input

key={name}

name={name}

value={
form[name as keyof ContactFormData]
}

onChange={handleChange}

placeholder={placeholder}

required={name==="name"||name==="email"}

type={
name==="email"
?
"email"
:
"text"
}

className="
w-full
border
rounded-xl
px-4
py-3
outline-none
focus:ring-2
focus:ring-yellow-500
"

/>


))


}



<select

name="product"

value={form.product}

onChange={handleChange}

className="
w-full
border
rounded-xl
px-4
py-3
outline-none
focus:ring-2
focus:ring-yellow-500
"

>


<option value="">
Product Interest
</option>


<option value="Czech Crystal">
Czech Crystal
</option>


<option value="European Products">
European Products
</option>


<option value="Industrial Supply">
Industrial Supply
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

rows={6}

placeholder="Tell us about your inquiry..."

className="
w-full
border
rounded-xl
px-4
py-3
outline-none
resize-none
focus:ring-2
focus:ring-yellow-500
"

/>






<button

type="submit"

disabled={loading}

aria-label="Send business inquiry"

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