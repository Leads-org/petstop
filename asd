[33mcommit f2e385c500b473a15c48b4e9a299b78a1407f15e[m[33m ([m[1;31morigin/main[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: zul1996 <mzulnewbie@gmail.com>
Date:   Thu Oct 20 07:22:41 2022 +0700

    feat : add to cart function

[1mdiff --git a/components/CartList.tsx b/components/CartList.tsx[m
[1mindex 7ea0d6e..829f0f7 100644[m
[1m--- a/components/CartList.tsx[m
[1m+++ b/components/CartList.tsx[m
[36m@@ -1,16 +1,17 @@[m
[31m-import React from "react";[m
[32m+[m[32mimport React, { useState } from "react";[m
 import Image from "next/image";[m
 import logo from "../public/logo-petstop.svg";[m
[31m-import {[m
[31m-  FcComboChart,[m
[31m-  FcApproval,[m
[31m-  FcBriefcase,[m
[31m-  FcCollaboration,[m
[31m-} from "react-icons/fc";[m
[31m-[m
[31m-import Link from "next/link";[m
[32m+[m[32mimport useSWR from "swr";[m
[32m+[m[32mimport { fetcher } from "../libs";[m
 [m
 const Cart = () => {[m
[32m+[m[32m  const [sizeIndexChoose, setSizeIndexChoose] = useState<number>(0);[m
[32m+[m
[32m+[m[32m  const { data: Carts, error: cartError } = useSWR(`/api/carts`, fetcher);[m
[32m+[m
[32m+[m[32m  if (cartError) return <div>Failed to load product by id: </div>;[m
[32m+[m[32m  if (!Carts) return <div>Loading product details...</div>;[m
[32m+[m
   return ([m
     <div className="">[m
       <h1 className="text-xl text-[#FFB156] flex justify-center pt-14 ">[m
[36m@@ -19,38 +20,44 @@[m [mconst Cart = () => {[m
 [m
       <div className="column-2 p-20 columns-auto pt-2">[m
         <div className="flex flex-row p-5 bg-slate-300">[m
[31m-          <div className="basis-1/2">Item</div>[m
[32m+[m[32m          <div className="basis-1/2">Name</div>[m
           <div className="basis-1/4">Price</div>[m
           <div className="basis-1/4">Qty</div>[m
           <div className="basis-1/4">Total</div>[m
           <div className="basis-1/6">Action</div>[m
         </div>[m
         {/* Item cart */}[m
[31m-        <div className="flex flex-row p-5">[m
[31m-          <div className="basis-1/2">[m
[31m-            <div className="grid grid-cols-2 gap-5 ">[m
[31m-              <Image[m
[31m-                alt="blog photo"[m
[31m-                src="/food.png"[m
[31m-                width={100}[m
[31m-                height={200}[m
[31m-                className="max-h-40 object-cover"[m
[31m-              />[m
[31m-              <div>[m
[31m-                <h1 className="text-2xl font-bold">Dog Food</h1>[m
[31m-                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>[m
[32m+[m[32m        {Carts.map((data: any) => {[m
[32m+[m[32m          return ([m
[32m+[m[32m            <div key={data._id} className="flex flex-row p-5">[m
[32m+[m[32m              <div className="basis-1/2">[m
[32m+[m[32m                <div className="grid grid-cols-2 gap-5 ">[m
[32m+[m[32m                  <Image[m
[32m+[m[32m                    alt="blog photo"[m
[32m+[m[32m                    src={data.products[0].image[0].url}[m
[32m+[m[32m                    width={100}[m
[32m+[m[32m                    height={200}[m
[32m+[m[32m                    className="max-h-40 object-cover"[m
[32m+[m[32m                  />[m
[32m+[m[32m                  <div>[m
[32m+[m[32m                    <h1 className="text-2xl font-bold">[m
[32m+[m[32m                      {data.products[0].name}[m
[32m+[m[32m                    </h1>[m
[32m+[m[32m                    <p>{data.products[0].description}</p>[m
[32m+[m[32m                  </div>[m
[32m+[m[32m                </div>[m
[32m+[m[32m              </div>[m
[32m+[m[32m              <div className="basis-1/4">Rp 25.000,00</div>[m
[32m+[m[32m              <div className="basis-1/4">{data.quantity}</div>[m
[32m+[m[32m              <div className="basis-1/4">Rp 25.000,00</div>[m
[32m+[m[32m              <div className="basis-1/6">[m
[32m+[m[32m                <button className="bg-transparent hover:bg-orange-600 text-sky-500 font-semibold shadow-md hover:text-white py-2 px-4 border border-stone-700 hover:border-transparent rounded">[m
[32m+[m[32m                  Delete[m
[32m+[m[32m                </button>[m
               </div>[m
             </div>[m
[31m-          </div>[m
[31m-          <div className="basis-1/4">Rp 25.000,00</div>[m
[31m-          <div className="basis-1/4">1</div>[m
[31m-          <div className="basis-1/4">Rp 25.000,00</div>[m
[31m-          <div className="basis-1/6">[m
[31m-            <button className="bg-transparent hover:bg-orange-600 text-sky-500 font-semibold shadow-md hover:text-white py-2 px-4 border border-stone-700 hover:border-transparent rounded">[m
[31m-              Delete[m
[31m-            </button>[m
[31m-          </div>[m
[31m-        </div>[m
[32m+[m[32m          );[m
[32m+[m[32m        })}[m
         {/* end item */}[m
         <div className="flex flex-row p-5 bg-slate-300">[m
           <div className="basis-1/2"></div>[m
[1mdiff --git a/libs/local-storage.ts b/libs/local-storage.ts[m
[1mnew file mode 100644[m
[1mindex 0000000..b4b2f4d[m
[1m--- /dev/null[m
[1m+++ b/libs/local-storage.ts[m
[36m@@ -0,0 +1,11 @@[m
[32m+[m[32mexport const STORAGE_KEY = "cart-storage";[m
[32m+[m
[32m+[m[32mexport const checkLocalStorageAvailable = () => {[m
[32m+[m[32m  const cartStorage = localStorage.getItem(STORAGE_KEY);[m
[32m+[m
[32m+[m[32m  if (cartStorage) {[m
[32m+[m[32m    return true;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  return false;[m
[32m+[m[32m};[m
[1mdiff --git a/next.config.js b/next.config.js[m
[1mindex 6af670d..1d06dd9 100644[m
[1m--- a/next.config.js[m
[1m+++ b/next.config.js[m
[36m@@ -1,6 +1,6 @@[m
 /** @type {import('next').NextConfig} */[m
 const nextConfig = {[m
[31m-  reactStrictMode: true,[m
[32m+[m[32m  reactStrictMode: false,[m
   swcMinify: true,[m
   images: {[m
     domains: ["api.kontenbase.com"],[m
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex c5029a3..841244e 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -9,6 +9,7 @@[m
       "version": "0.1.0",[m
       "dependencies": {[m
         "@iconscout/react-unicons": "^1.1.6",[m
[32m+[m[32m        "axios": "^1.1.3",[m
         "next": "12.3.1",[m
         "react": "18.2.0",[m
         "react-dom": "18.2.0",[m
[36m@@ -810,6 +811,11 @@[m
       "dev": true,[m
       "license": "ISC"[m
     },[m
[32m+[m[32m    "node_modules/asynckit": {[m
[32m+[m[32m      "version": "0.4.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q=="[m
[32m+[m[32m    },[m
     "node_modules/autoprefixer": {[m
       "version": "10.4.12",[m
       "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.12.tgz",[m
[36m@@ -853,6 +859,16 @@[m
         "node": ">=4"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/axios": {[m
[32m+[m[32m      "version": "1.1.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/axios/-/axios-1.1.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-00tXVRwKx/FZr/IDVFt4C+f9FYairX517WoGCL6dpOntqLkZofjhu43F/Xl44UOpqa+9sLFDrG/XAnFsUYgkDA==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "follow-redirects": "^1.15.0",[m
[32m+[m[32m        "form-data": "^4.0.0",[m
[32m+[m[32m        "proxy-from-env": "^1.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/axobject-query": {[m
       "version": "2.2.0",[m
       "resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-2.2.0.tgz",[m
[36m@@ -1053,6 +1069,17 @@[m
       "dev": true,[m
       "license": "MIT"[m
     },[m
[32m+[m[32m    "node_modules/combined-stream": {[m
[32m+[m[32m      "version": "1.0.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/combined-st