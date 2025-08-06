"use client"

import { easeInOut, useScroll, useTransform } from "motion/react"
import { useRef } from "react";
import { ProductData } from "@/commons/interface/product";
import { FaGavel } from "react-icons/fa6";
import InternalExternalLink from "../link";
import DivCustom from "../motion/custom";
import { fadeInUp } from "@/commons/lib/animations/variants";

type ProductCardProps = {
  item: ProductData
}

export default function ProductCard ({ item }: ProductCardProps) {
  const containerRef = useRef(null)

  const startOffset = item.id === 2 ? "start 70%" : "start end"; 
  const endOffset = "start 40%"; 

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [startOffset, endOffset]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [fadeInUp.hide.opacity as number, fadeInUp.show.opacity as number], { ease: easeInOut });
  const y = useTransform(scrollYProgress, [0, 1], [fadeInUp.hide.y as number, fadeInUp.show.y as number], { ease: easeInOut });

  const isPinkViolet = item.color === 'pink-violet'

  const pinkViolet = "from-pink-500 to-violet-500"
  const pinkVioletLink = "hover:from-pink-600 hover:to-violet-600 hover:shadow-violet-500/50"

  const orangeYellow = "from-orange-500 to-yellow-500"
  const orangeYellowLink = "hover:from-orange-600 hover:to-yellow-600 hover:shadow-yellow-500/50"

  return (
    <DivCustom
      ref={containerRef} 
      style={{ opacity, y }} 
    >
      <InternalExternalLink 
        className={`border-gradient rounded-lg flex flex-col transition delay-75 duration-300 ease-in-out group hover:shadow-lg hover:border-gray-950 hover:bg-linear-to-br ${isPinkViolet ? pinkVioletLink : orangeYellowLink} hover:-translate-y-1 hover:scale-105`}
        isInternalLink={item.link.isInternalLink} 
        href={item.link.href} 
      >
        <div className={`left-1/2 top-0 w-[150px] center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2 opacity-70 bg-linear-to-r ${isPinkViolet ? pinkViolet : orangeYellow}`} />
        <div className="flex flex-col gap-6 p-6">
          <div className="flex flex-col gap-2">
            <FaGavel className="text-2xl text-white" />
            <h3 className={`text-2xl font-semibold bg-linear-to-r ${isPinkViolet ? pinkViolet : orangeYellow} bg-clip-text text-transparent group-hover:text-white`}>
              {item.data.title}
            </h3>
          </div>
          <p className="text-justify text-gray-300 group-hover:text-gray-100">
            {item.data.description}
          </p>
          <div>
            <span className="text-white dark:text-foreground group-hover:text-white">Benefícios:</span>
            <ul className="list-inside list-disc text-gray-300 group-hover:text-gray-100">
              {item.data.benefits.map(benefit => (
                <li key={benefit}>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </InternalExternalLink>
    </DivCustom>
  )
}