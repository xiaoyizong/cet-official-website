import type { Metadata } from "next";



const SITE_URL =
"https://www.centraleuropetrading.com";







export const metadata: Metadata = {



  title:{


    default:

      "中欧国际贸易 | 欧洲产品采购与全球供应链合作伙伴",



    template:

      "%s | 中欧国际贸易"


  },








  description:


    "中欧国际贸易 CENTRAL EUROPE TRADING 专注欧洲产品采购、国际贸易、供应链管理以及欧洲供应商与全球市场之间的商业合作。"

,









  keywords:[



    "中欧国际贸易",

    "CENTRAL EUROPE TRADING",

    "欧洲贸易公司",

    "欧洲供应商",

    "欧洲产品采购",

    "欧洲出口",

    "国际采购",

    "全球供应链",

    "跨境贸易",

    "欧洲工业产品",

    "捷克水晶",

    "欧洲精品商品",

    "欧洲亚洲贸易"



  ],







  authors:[


    {

      name:

      "CENTRAL EUROPE TRADING"


    }


  ],







  creator:

    "CENTRAL EUROPE TRADING",





  publisher:

    "CENTRAL EUROPE TRADING",







  alternates:{



    canonical:

      `${SITE_URL}/zh`,





    languages:{



      "en-US":

        SITE_URL,



      "zh-CN":

        `${SITE_URL}/zh`,



      "x-default":

        SITE_URL



    }


  },









  openGraph:{



    title:


      "中欧国际贸易 | 连接欧洲供应商与全球市场",





    description:


      "专业欧洲贸易合作伙伴，为全球客户提供欧洲产品采购、供应链解决方案和国际贸易服务。",





    url:


      `${SITE_URL}/zh`,





    siteName:


      "CENTRAL EUROPE TRADING",





    locale:


      "zh_CN",





    type:


      "website",






    images:[



      {


        url:


          `${SITE_URL}/images/og-image.jpg`,



        width:


          1200,



        height:


          630,



        alt:


          "中欧国际贸易 CENTRAL EUROPE TRADING"


      }


    ]


  },








  twitter:{



    card:


      "summary_large_image",





    title:


      "中欧国际贸易 CENTRAL EUROPE TRADING",





    description:


      "欧洲产品、全球供应链和国际贸易解决方案。",





    images:[


      `${SITE_URL}/images/og-image.jpg`


    ]


  },








  robots:{



    index:true,



    follow:true,



    googleBot:{



      index:true,



      follow:true,



      "max-image-preview":

        "large",



      "max-snippet":

        -1,



      "max-video-preview":

        -1


    }


  },






};













export default function ZhLayout({


children,


}: {


children:React.ReactNode;


}){







const chineseOrganizationSchema = {



"@context":

"https://schema.org",





"@type":

"Organization",







"name":

"CENTRAL EUROPE TRADING 中欧国际贸易",







"alternateName":

"CET",








"url":

`${SITE_URL}/zh`,








"logo":

`${SITE_URL}/logo.svg`,








"description":


"欧洲国际贸易企业，连接欧洲供应商、优质产品和全球市场，提供采购、出口及供应链解决方案。",







"brand":{


"@type":

"Brand",


"name":

"CENTRAL EUROPE TRADING"


},







"foundingLocation":{


"@type":

"Place",


"name":

"Czech Republic"


},







"areaServed":[


{


"@type":

"Place",


"name":

"Europe"


},


{


"@type":

"Place",


"name":

"Asia"


},


{


"@type":

"Place",


"name":

"Global Market"


}


],







"knowsAbout":[


"International Trade",

"European Products",

"Supply Chain Management",

"Global Sourcing",

"Export Business"


],







"address":{


"@type":

"PostalAddress",


"addressCountry":

"Czech Republic"


},







"contactPoint":{


"@type":

"ContactPoint",


"contactType":

"Business Inquiry",


"email":

"info@centraleuropetrading.com",


"availableLanguage":[

"Chinese",

"English"

]


},







"sameAs":[


"https://www.linkedin.com/",


"https://www.facebook.com/"


]



};










const websiteSchema={



"@context":

"https://schema.org",




"@type":

"WebSite",





"name":

"中欧国际贸易 CENTRAL EUROPE TRADING",






"url":

`${SITE_URL}/zh`,






"inLanguage":

"zh-CN",







"publisher":{


"@type":

"Organization",


"name":

"CENTRAL EUROPE TRADING"


}



};









return(


<>



<script


type="application/ld+json"


dangerouslySetInnerHTML={{


__html:

JSON.stringify(

chineseOrganizationSchema

)


}}


/>








<script


type="application/ld+json"


dangerouslySetInnerHTML={{


__html:

JSON.stringify(

websiteSchema

)


}}


/>







{children}



</>



);


}