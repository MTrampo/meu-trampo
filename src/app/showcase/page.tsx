import { cases } from '@/commons/data/showcase'
import { DivFadeInUp } from '@/components/motion/container';
import ShowCaseCard from "@/components/showcase/showcase-card";

export default function ShowCase() {
  return (
    <>
      <section className="
        mx-auto px-6 py-12 sm:py-24 max-w-5xl md:max-w-7xl
        relative
        grid grid-cols-1 md:grid-cols-2 gap-8 items-center
        overflow-hidden"
      >
        
        <div className="w-full text-center md:text-left z-10">
          <h1 className="text-5xl font-extrabold">
            Podemos <span className="text-pink-600 animate-color">forjar</span> diversas <span className="text-pink-600 animate-color" style={{ animationDelay: '3s' }}>soluções</span> {''}
            para <span className="text-violet-600 animate-color" style={{ animationDelay: '6s' }}>elevar</span> o seu <span className="text-violet-600 animate-color" style={{ animationDelay: '9s' }}>trampo</span> ao {''}
            <span className="bg-gradient-to-l bg-clip-text text-transparent from-pink-600 to-violet-600 animate-color" style={{ animationDelay: '12s' }}>próximo nível</span>.
          </h1>
          <div className="flex justify-center items-center gap-4 lg:mr-8 mt-7">
            <p className="text-xl text-gray-500">
              Cada projeto é um exemplo de como a tecnologia pode resolver desafios reais e otimizar o seu trampo.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center md:justify-end relative z-10">
          <DivFadeInUp delay={0.7} className="
            absolute
            animate-pulse
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[350px] h-[350px] 
            bg-gradient-to-br from-pink-600 to-violet-600
            rounded-full filter blur-3xl opacity-50 pointer-events-none z-0"/>

          <DivFadeInUp className="bg-[url('/images/showcase-hero.png')] bg-contain bg-no-repeat bg-center w-full h-80 sm:h-96 md:h-[400px] lg:h-[700px] relative z-10"/>
        </div>
        
      </section>
      <main className="mx-auto px-6 py-12 sm:py-24 max-w-5xl md:max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20">
          {cases.map(show => (
            <ShowCaseCard key={show.id} data={show}/>
          ))}
        </div>
      </main>
    </>
  )
}