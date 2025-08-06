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
          <h1 className="hidden dark:block text-3xl lg:text-4xl xl:text-5xl font-extrabold">
            Podemos <span className="text-pink-600 animate-color">forjar</span> diversas <span className="text-pink-600 animate-color" style={{ animationDelay: '3s' }}>soluções</span> {''}
            para <span className="text-violet-600 animate-color" style={{ animationDelay: '6s' }}>elevar</span> o seu <span className="text-violet-600 animate-color" style={{ animationDelay: '9s' }}>trampo</span> ao {''}
            <span className="bg-gradient-to-l bg-clip-text text-transparent from-pink-600 to-violet-600 animate-color" style={{ animationDelay: '12s' }}>próximo nível</span>.
          </h1>
          <h1 className="block dark:hidden text-3xl lg:text-4xl xl:text-5xl font-extrabold">
            Podemos forjar <span className="bg-gradient-to-l bg-clip-text text-transparent from-pink-500 to-violet-500">diversas soluções</span> para 
            elevar o seu trampo ao próximo nível.
          </h1>
          <div className="hidden md:flex justify-center items-center gap-4 lg:mr-8 mt-7">
            <p className="text-xl text-gray-500">
              Cada projeto é um exemplo de como a tecnologia pode resolver desafios reais e otimizar o seu trampo.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center md:justify-end relative z-10">
          <DivFadeInUp delay={1} className="
            absolute
            animate-pulse
            top-1/3 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[150px] h-[150px] md:w-[350px] md:h-[350px]
            bg-gradient-to-br from-pink-600 to-violet-600
            rounded-full filter blur-3xl opacity-50 pointer-events-none z-0"/>

          <div className="bg-[url('/images/showcase-hero.png')] bg-contain bg-no-repeat bg-center w-full h-80 sm:h-96 md:h-[400px] lg:h-[700px] relative z-10"/>
          <div className="flex md:hidden justify-center items-center gap-4 lg:mr-8 mt-7">
            <p className="text-lg text-center text-gray-500">
              Cada projeto é um exemplo de como a tecnologia pode resolver desafios reais e otimizar o seu trampo.
            </p>
          </div>
        </div>
        
      </section>
      <main className="mx-auto px-6 py-12 sm:py-24 max-w-5xl md:max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {cases.map((show, i) => (
            <ShowCaseCard key={show.id} data={show} animationIndex={i}/>
          ))}
        </div>
      </main>
    </>
  )
}