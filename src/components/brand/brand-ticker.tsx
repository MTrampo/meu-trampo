"use client"

import Image from "next/image";
import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";
import { getBrands } from "@/commons/data/brands";

export default function BrandTicker() {
  const { resolvedTheme } = useTheme()

  const brands = getBrands(resolvedTheme)
  
  return (
    <div className="relative flex items-center justify-center overflow-hidden w-full flex-1">
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background dark:from-gray-950 to-transparent z-10 pointer-events-none" />

      <Marquee pauseOnHover speed={20}>
        <ul className="flex gap-10 md:gap-20 mr-10 md:mr-20">
          {brands.map((brand, index) => (
            <li key={index} className={`${brand.liClass} w-20 px-1`}>
              <a href={brand.url} target="_blank" rel="noopener noreferrer">
                <Image src={brand.src} alt={brand.alt} width={80} height={80}/>
              </a>
            </li>
          ))}
        </ul>
      </Marquee>

      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background dark:from-gray-950 to-transparent z-10 pointer-events-none" />
    </div>
  )
}