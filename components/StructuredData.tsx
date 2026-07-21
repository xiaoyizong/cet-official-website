export default function StructuredData() {

  const data = {
    "@context": "https://schema.org",

    "@type": "Organization",

    "name":
      "CENTRAL EUROPE TRADING",


    "alternateName":
      "CET",


    "url":
      "https://www.centraleuropetrading.com",


    "logo":
      "https://www.centraleuropetrading.com/favicon.png",


    "description":
      "European trade company connecting Czech heritage, premium products and global markets.",


    "email":
      "info@centraleuropetrading.com",


    "address": {

      "@type":
        "PostalAddress",

      "addressCountry":
        "Czech Republic"

    },


    "sameAs":[

      "https://www.linkedin.com/"

    ],


    "areaServed":[

      "Europe",

      "Asia",

      "Global Markets"

    ],


    "knowsAbout":[

      "European Trading",

      "Czech Crystal",

      "Industrial Supply Chain",

      "International Export"

    ]

  };


  return (

    <script

      type="application/ld+json"

      dangerouslySetInnerHTML={{
        __html:
          JSON.stringify(data)
      }}

    />

  );

}