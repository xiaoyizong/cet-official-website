import type { MetadataRoute } from "next";



const SITE_URL =
  "https://www.centraleuropetrading.com";






export default function sitemap(): MetadataRoute.Sitemap {



  const lastModified = new Date();





  return [




    // =========================
    // English Homepage
    // =========================


    {


      url:

        SITE_URL,


      lastModified,


      changeFrequency:

        "weekly",


      priority:

        1,



    },







    // =========================
    // Chinese Homepage
    // =========================


    {


      url:

        `${SITE_URL}/zh`,


      lastModified,


      changeFrequency:

        "weekly",


      priority:

        1,



    },








    // =========================
    // Products
    // =========================



    {


      url:

        `${SITE_URL}/products/crystal`,


      lastModified,


      changeFrequency:

        "monthly",


      priority:

        0.9,



    },





    {


      url:

        `${SITE_URL}/products/wine`,


      lastModified,


      changeFrequency:

        "monthly",


      priority:

        0.9,



    },





    {


      url:

        `${SITE_URL}/products/industry`,


      lastModified,


      changeFrequency:

        "monthly",


      priority:

        0.9,



    },








    // =========================
    // Business Pages
    // =========================



    {


      url:

        `${SITE_URL}/about`,


      lastModified,


      changeFrequency:

        "monthly",


      priority:

        0.8,



    },





    {


      url:

        `${SITE_URL}/global-trade`,


      lastModified,


      changeFrequency:

        "monthly",


      priority:

        0.8,



    },





    {


      url:

        `${SITE_URL}/contact`,


      lastModified,


      changeFrequency:

        "monthly",


      priority:

        0.8,



    },








    // =========================
    // Chinese Pages
    // =========================



    {


      url:

        `${SITE_URL}/zh/products/crystal`,


      lastModified,


      changeFrequency:

        "monthly",


      priority:

        0.8,



    },





    {


      url:

        `${SITE_URL}/zh/products/wine`,


      lastModified,


      changeFrequency:

        "monthly",


      priority:

        0.8,



    },





    {


      url:

        `${SITE_URL}/zh/products/industry`,


      lastModified,


      changeFrequency:

        "monthly",


      priority:

        0.8,



    },



  ];



}