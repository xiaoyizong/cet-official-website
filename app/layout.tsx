import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {

  metadataBase: new URL(
    "https://www.centraleuropetrading.com"
  ),


  applicationName:
    "CENTRAL EUROPE TRADING",



  title: {

    default:
      "CENTRAL EUROPE TRADING | European Trade & Global Supply Chain",

    template:
      "%s | CENTRAL EUROPE TRADING"

  },


  description:
    "CENTRAL EUROPE TRADING connects Czech heritage, European premium products, industrial supply chains and global markets through trusted international trade.",



  keywords:[

    "Central Europe Trading",
    "CET",
    "Czech Crystal",
    "European Trade",
    "European Premium Products",
    "Industrial Supply Chain",
    "International Trading",
    "European Export",
    "Europe Asia Trade",
    "Global Business"

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



  category:
    "Business",



  alternates:{

    canonical:
      "https://www.centraleuropetrading.com"

  },



  openGraph:{


    title:
      "CENTRAL EUROPE TRADING | European Trade & Global Supply Chain",


    description:
      "Connecting Czech heritage, European premium products and global markets.",


    url:
      "https://www.centraleuropetrading.com",


    siteName:
      "CENTRAL EUROPE TRADING",


    locale:
      "en_US",


    type:
      "website",


    images:[

      {

        url:
          "/images/og-image.jpg",

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
      "European Trade & Global Supply Chain Partner",


    images:[

      "/images/og-image.jpg"

    ]

  },



  icons:{


    icon:[

      {

        url:
          "/favicon.svg",

        type:
          "image/svg+xml"

      }

    ],


    shortcut:
      "/favicon.svg",


    apple:
      "/favicon.svg"


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



  formatDetection:{


    email:false,

    address:false,

    telephone:false

  }


};





export const viewport: Viewport = {

  width:
    "device-width",

  initialScale:
    1,

  themeColor:
    "#0f2b4d"

};





export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  const organizationSchema = {

    "@context":
      "https://schema.org",


    "@type":
      "Organization",


    name:
      "CENTRAL EUROPE TRADING",


    url:
      "https://www.centraleuropetrading.com",


    logo:
      "https://www.centraleuropetrading.com/logo.svg",


    description:
      "European Trade & Global Supply Chain Partner connecting Czech heritage, premium products and international markets.",


    email:
      "info@centraleuropetrading.com",


    address:{

      "@type":
        "PostalAddress",

      addressCountry:
        "Czech Republic"

    }


  };



  return (

    <html

      lang="en"

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
              JSON.stringify(organizationSchema)

          }}

        />


        {children}


      </body>


    </html>

  );

}