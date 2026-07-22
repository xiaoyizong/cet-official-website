import NavbarZh from "@/components/zh/NavbarZh";

import HeroZh from "@/components/zh/HeroZh";
import AboutZh from "@/components/zh/AboutZh";
import WhyChooseZh from "@/components/zh/WhyChooseZh";
import ProductsZh from "@/components/zh/ProductsZh";
import GlobalNetworkZh from "@/components/zh/GlobalNetworkZh";
import StatisticsZh from "@/components/zh/StatisticsZh";
import PartnersZh from "@/components/zh/PartnersZh";
import ContactZh from "@/components/zh/ContactZh";
import FooterZh from "@/components/zh/FooterZh";



export default function ChineseHome(){


return (

<main
className="
min-h-screen
bg-white
"
>


{/* 中文导航 */}

<NavbarZh />



{/* 首页 */}

<section id="home">

<HeroZh />

</section>




{/* 关于 */}

<section id="about">

<AboutZh />

</section>




{/* 为什么选择 */}

<section id="why-choose">

<WhyChooseZh />

</section>




{/* 产品 */}

<section id="products">

<ProductsZh />

</section>




{/* 国际贸易 */}

<section id="global-network">

<GlobalNetworkZh />

</section>




{/* 数据 */}

<section id="statistics">

<StatisticsZh />

</section>




{/* 合作伙伴 */}

<section id="partners">

<PartnersZh />

</section>




{/* 联系 */}

<section id="contact">

<ContactZh />

</section>




<FooterZh />



</main>


);


}