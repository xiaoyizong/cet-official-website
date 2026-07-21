import { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {


return [

{

url:
"https://www.centraleuropetrading.com",

lastModified:
new Date(),


priority:
1,


},


{

url:
"https://www.centraleuropetrading.com/products/crystal",

lastModified:
new Date(),

priority:
0.8,

},


{

url:
"https://www.centraleuropetrading.com/products/wine",

lastModified:
new Date(),

priority:
0.8,

},


{

url:
"https://www.centraleuropetrading.com/products/industry",

lastModified:
new Date(),

priority:
0.8,

},


];


}