import type { Metadata, Viewport } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";



const geistSans = Geist({

  variable: "--font-geist-sans",

  subsets:["latin"],

});



const geistMono = Geist_Mono({

  variable:"--font-geist-mono",

  subsets:["latin"],

});





const SITE_URL =
"https://www.centraleuropetrading.com";






export const metadata: Metadata = {


metadataBase:

new URL(SITE_URL),



applicationName:

"CENTRAL EUROPE TRADING",





title:{


default:

"CENTRAL EUROPE TRADING | European Products & Global Trade Solutions",



template:

"%s | CENTRAL EUROPE TRADING"


},






description:


"CENTRAL EUROPE TRADING connects European premium products, reliable suppliers and global markets through professional international trade and supply chain solutions.",







keywords:[


"Central Europe Trading",

"European Trading Company",

"International Trade",

"Global Supply Chain",

"European Export",

"European Import",

"Europe Asia Trade",

"Premium European Products",

"Czech Crystal",

"Industrial Equipment",

"B2B Trading",

"Global Sourcing"


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

SITE_URL,



languages:{


"en":

SITE_URL,


"zh-CN":

`${SITE_URL}/zh`,


"x-default":

SITE_URL


}



},








openGraph:{



title:

"CENTRAL EUROPE TRADING | Connecting Europe With Global Markets",




description:


"Professional international trade partner connecting European suppliers, premium products and worldwide business opportunities.",



url:

SITE_URL,



siteName:

"CENTRAL EUROPE TRADING",



locale:

"en_US",



type:

"website",




images:[


{

url:

`${SITE_URL}/images/og-image.svg`,


width:

1200,


height:

630,


alt:

"CENTRAL EUROPE TRADING"

}


]



},







twitter:{


card:

"summary_large_image",


title:

"CENTRAL EUROPE TRADING",


description:

"European products, global suppliers and international trade solutions.",


images:[

`${SITE_URL}/images/og-image.svg`

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








icons:{


icon:

"/favicon.svg",



shortcut:

"/favicon.svg",



apple:

"/favicon.svg"


}



};









export const viewport:Viewport={


width:

"device-width",


initialScale:

1,


themeColor:

"#0f2b4d"



};









export default function RootLayout({

children,

}:Readonly<{

children:React.ReactNode;

}>) {



const structuredData={


"@context":

"https://schema.org",



"@type":

"Organization",



name:

"CENTRAL EUROPE TRADING",



url:

SITE_URL,



logo:

`${SITE_URL}/logo.svg`,



description:

"European international trading company connecting suppliers, products and global markets.",




email:

"info@centraleuropetrading.com",



areaServed:[


"Europe",

"Asia",

"Global Market"


],




contactPoint:{


"@type":

"ContactPoint",



contactType:

"Business Inquiry",



email:

"info@centraleuropetrading.com",



availableLanguage:[

"English",

"Chinese"

]


},




sameAs:[


"https://www.linkedin.com/",

"https://www.facebook.com/"


]


};







const websiteSchema={


"@context":

"https://schema.org",



"@type":

"WebSite",



name:

"CENTRAL EUROPE TRADING",



url:

SITE_URL



};









return (



<html


lang="en"


suppressHydrationWarning



className={`

${geistSans.variable}

${geistMono.variable}

h-full

antialiased

`}


>


<body


className="

min-h-screen

flex

flex-col

bg-white

"

>




<script


type="application/ld+json"


dangerouslySetInnerHTML={{


__html:

JSON.stringify(structuredData)


}}


/>





<script


type="application/ld+json"


dangerouslySetInnerHTML={{


__html:

JSON.stringify(websiteSchema)


}}


/>






{children}




</body>



</html>



);


}