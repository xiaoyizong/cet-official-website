"use client";


import { useState } from "react";
import { motion } from "framer-motion";



type FormData = {

  name:string;

  company:string;

  email:string;

  phone:string;

  country:string;

  product:string;

  message:string;

};





const initialForm:FormData={

name:"",

company:"",

email:"",

phone:"",

country:"",

product:"",

message:""

};







export default function ContactZh(){



const [form,setForm]=useState<FormData>(initialForm);


const [loading,setLoading]=useState(false);


const [status,setStatus]=useState("");







const handleChange=(

e:React.ChangeEvent<

HTMLInputElement |

HTMLTextAreaElement |

HTMLSelectElement>

)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};









const handleSubmit=async(

e:React.FormEvent<HTMLFormElement>

)=>{


e.preventDefault();


setLoading(true);

setStatus("");




try{


const response=await fetch(

"/api/contact",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify(form)

}


);




const data=await response.json();




if(data.success){


setStatus(
"发送成功，我们会尽快联系您。"
);


setForm(initialForm);



}else{


setStatus(
"发送失败，请稍后重试。"
);


}




}catch(error){


console.error(error);


setStatus(
"网络错误，请稍后重试。"
);


}



setLoading(false);


};









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


<h2

className="

text-4xl

md:text-5xl

font-bold

text-[#0f2b4d]

"

>

联系我们

</h2>



<p

className="

mt-5

text-gray-600

text-lg

"

>

欢迎全球企业与我们建立长期合作关系

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








{/* Left */}



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

携手共创国际贸易未来

</h3>



<p

className="

mt-6

text-gray-300

leading-8

"

>

我们专注欧洲优质产品、
国际供应链合作以及全球贸易服务。

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

className="space-y-6"

>


{

status &&

<div

className="

bg-green-100

text-green-700

rounded-xl

p-4

"

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


<input

name="name"

value={form.name}

onChange={handleChange}

required

placeholder="姓名"

className="border rounded-xl p-4"

/>



<input

name="company"

value={form.company}

onChange={handleChange}

placeholder="公司名称"

className="border rounded-xl p-4"

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

placeholder="邮箱地址"

className="border rounded-xl p-4"

/>




<input

name="phone"

value={form.phone}

onChange={handleChange}

placeholder="联系电话"

className="border rounded-xl p-4"

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

placeholder="国家/地区"

className="border rounded-xl p-4"

/>




<select

name="product"

value={form.product}

onChange={handleChange}

className="border rounded-xl p-4"

>


<option value="">
选择产品类别
</option>


<option value="Czech Crystal">
捷克水晶
</option>


<option value="Industrial Supply">
工业供应链
</option>


<option value="European Trade">
欧洲贸易
</option>


<option value="Other">
其他
</option>



</select>



</div>








<textarea


name="message"


value={form.message}


onChange={handleChange}


required


rows={6}


placeholder="请输入您的合作需求..."

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

"发送中..."

:

"提交咨询"

}



</button>





</form>



</div>








</div>






</div>



</section>



);



}