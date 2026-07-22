import type { MetadataRoute } from "next";



export default function sitemap(): MetadataRoute.Sitemap {


const baseUrl =
"https://www.centraleuropetrading.com";



return [


{


url:

baseUrl,


lastModified:

new Date(),


changeFrequency:

"monthly",


priority:

1,


},





{


url:

`${baseUrl}/zh`,


lastModified:

new Date(),


changeFrequency:

"monthly",


priority:

0.9,


},



];



}