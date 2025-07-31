"use client"

import Link from "next/link"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useScroll } from "motion/react";
import { ModeToggle } from "../theme/toggle";
import { Navigation } from "@/components/header/navigation";

export default function Header() {
  const { scrollY } = useScroll(); // Obtém o MotionValue da posição de rolagem
  const [scrolledPastLimit, setScrolledPastLimit] = useState(false); // Seu estado booleano

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latestScrollY) => {
      if (latestScrollY >= 200 && !scrolledPastLimit) {
        setScrolledPastLimit(true);
      } else if (latestScrollY < 200 && scrolledPastLimit) {
        setScrolledPastLimit(false)
      }
    })

    return () => unsubscribe()
  }, [scrollY, scrolledPastLimit])

  return (
    <header className={`sticky top-0 z-50 ${scrolledPastLimit ? 'bg-transparent backdrop-blur-md border-b' : 'bg-background'}`}>
      <nav className="mx-auto p-6 max-w-5xl md:max-w-7xl ">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/svgs/logo.svg"
              alt="Meu Trampo Logo"
              width={200}
              height={200}
              className="w-16 h-auto"
            />
          </Link>
          <div className="flex items-center gap-4">
            <Navigation />
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}