import { DivFadeInUp } from "@/components/motion/container";
import Image from "next/image";


export default function Core() {
  return(
    <section className="
      mx-auto px-6 py-12 sm:py-24 max-w-5xl md:max-w-7xl
      relative
      grid grid-cols-1
      overflow-hidden"
    >
      <div className="w-full flex flex-col justify-center md:justify-end relative z-10">
        <DivFadeInUp delay={1} className="
          absolute
          animate-pulse
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[400px] h-[400px] 
          bg-gradient-to-br from-orange-600 to-yellow-600
          rounded-full filter blur-3xl opacity-50 pointer-events-none z-0"/>

        <div className="bg-[url('/images/forge.png')] bg-contain bg-no-repeat bg-center w-full h-80 sm:h-96 md:h-[400px] lg:h-[600px] relative z-10"/>
        <div className="text-center">
          <h1 className="text-6xl font-extrabold bg-gradient-to-br from-orange-500 to-yellow-500 text-transparent bg-clip-text pb-2">
            Forjando Soluções
          </h1>
          <p className="text-xl text-gray-500 uppercase">
            Aguarde nosso próximo nível
          </p>
        </div>
      </div>
      
    </section>
  )
}