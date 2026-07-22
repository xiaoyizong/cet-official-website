import type { MetadataRoute } from "next";


const SITE_URL =
  "https://www.centraleuropetrading.com";



export default function robots(): MetadataRoute.Robots {


  return {


    rules:{


      userAgent:"*",


      allow:"/",



      disallow:[


        "/api/",


        "/_next/",


        "/admin/",


        "/dashboard/",


        "/private/",


        "/login/"


      ]


    },



    sitemap:


      `${SITE_URL}/sitemap.xml`



  };


}