import { products } from "@/commons/data/products";
import Brands from "@/components/brand";
import Feedbacks from "@/components/feadback";
import { DivFadeInUp, SectionFadeInUp } from "@/components/motion/container";
import { HeadingFadeInLeft, HeadingFadeInUp, ParagraphFadeInLeft, ParagraphFadeInUp, SpanFadeInUp, SpanFadeInUpDelay } from "@/components/motion/text";
import ProductCard from "@/components/product";
import { FaBrain, FaRobot, FaRocket, FaSatelliteDish } from "react-icons/fa6";


export default function Home() {
  return (
    <>
      <section className="dark:bg-gradient-to-b dark:from-background dark:to-slate-950">
        <div className="
          mx-auto px-6 py-12 sm:py-24 max-w-5xl md:max-w-7xl
          relative
          grid grid-cols-1 md:grid-cols-2 gap-8 items-center
          overflow-hidden"
        >
          <div className="w-full text-center md:text-left z-10">
            <h1 className="text-6xl font-extrabold dark:bg-linear-to-br dark:from-slate-200 dark:to-gray-400 dark:bg-clip-text dark:text-transparent">
              <span className="block">Soluções para</span>
              <span className="block">seu próximo nível.</span>
            </h1>
            <div className="flex justify-center items-center gap-4 lg:mr-8 mt-7">
              <div className="w-[3px] h-[80px] rounded-full bg-gradient-to-b from-blue-700 to-cyan-300 flex-shrink-0 hidden lg:block"/>
              <p className="text-xl text-gray-500">
                Meu Trampo chegou para facilitar o seu trampo. Deixe o trabalho manual para trás
                e acelere seu trampo com tecnologia e modernidade.
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center md:justify-end relative z-10">
            <DivFadeInUp delay={0.5} className="
              absolute
              top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[350px] h-[350px] 
              bg-gradient-to-r from-blue-500 to-cyan-500
              rounded-full filter blur-3xl opacity-50 pointer-events-none z-0"/>

            <DivFadeInUp className="bg-[url('/images/background-tech.png')] animate-float bg-contain bg-no-repeat bg-center w-full h-80 sm:h-96 md:h-[400px] lg:h-[700px] relative z-10"/>
          </div>
        </div>
      </section>
      <main className="bg-gradient-to-b from-slate-950 to-blue-950">
        <div className="mx-auto px-6 py-12 sm:py-24 max-w-5xl md:max-w-7xl">
          <div className="mb-16">
            <HeadingFadeInUp className="text-4xl font-bold text-center mb-8 text-slate-200">
              Simplifique o Caminho
            </HeadingFadeInUp>
            <ParagraphFadeInUp className="text-lg text-justify text-gray-300">
              No mundo dos pequenos negócios, tempo e eficiência são tudo. Nós entendemos o seu trampo e sabemos que a burocracia e o manual podem
              atrasar o seu crescimento. É por isso que o Meu Trampo nasceu: para ser o seu parceiro na transformação tecnológica, oferecendo a
              tecnologia certa para você focar no que realmente importa.
            </ParagraphFadeInUp>
          </div>

          <div className="grid grid-cols-1 gap-12 md:gap-8 lg:grid-cols-2">
            {products.map(product => (
              <ProductCard key={product.data.title} item={product}/>
            ))}
          </div>
        </div>
      </main>
      <SectionFadeInUp className="bg-[url('/images/background-circuit.png')] bg-cover bg-center bg-fixed">
        <div className="bg-background/85">
          <div className="mx-auto px-6 py-12 sm:py-24 max-w-5xl md:max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-4 divide-x">
              <DivFadeInUp delay={0.4} className="px-8 text-center">
                <FaSatelliteDish className="mx-auto text-5xl" />
                <h3 className="text-2xl mt-3">CONEXÃO</h3>
                <p className="text-justify mt-5">
                  Nós nos conectamos à sua realidade. Entendemos seu dia a dia para forjar soluções que se encaixam perfeitamente no seu trampo.
                </p>
              </DivFadeInUp>
              <DivFadeInUp delay={0.7} className="px-8 text-center">
                <FaRobot className="mx-auto text-5xl" />
                <h3 className="text-2xl mt-3">AUTOMAÇÃO</h3>
                <p className="text-justify mt-5">
                  Liberte-se das tarefas manuais e repetitivas. Sua produtividade ganha agilidade e você foca no que realmente importa.
                </p>
              </DivFadeInUp>
              <DivFadeInUp delay={1} className="px-8 text-center">
                <FaBrain className="mx-auto text-5xl" />
                <h3 className="text-2xl mt-3">CÉREBRO</h3>
                <p className="text-justify mt-5">
                  Somos a inteligência central do seu avanço. Oferecemos o raciocínio estratégico e as ferramentas certas para cada desafio.
                </p>
              </DivFadeInUp>
              <DivFadeInUp delay={1.3} className="px-8 text-center">
                <FaRocket className="mx-auto text-5xl" />
                <h3 className="text-2xl mt-3">EVOLUÇÃO</h3>
                <p className="text-justify mt-5">
                  Seu trampo em constante movimento. Nossas soluções são o motor para o crescimento contínuo, impulsionando sua jornada para o próximo nível.
                </p>
              </DivFadeInUp>
            </div>
          </div>
        </div>
      </SectionFadeInUp>
      <section className="flex flex-col gap-12 sm:gap-24 py-12 sm:py-24 mx-auto px-6 max-w-5xl md:max-w-7xl">
        <div>
          <HeadingFadeInLeft className="text-4xl font-bold mb-8 text-slate-200">
            Seu Trampo Merece o Melhor
          </HeadingFadeInLeft>
          <ParagraphFadeInLeft className="text-lg text-justify text-gray-300">
            No Meu Trampo, entendemos que cada negócio e cada trampo têm uma realidade única. Por isso, oferecemos um leque de soluções flexíveis e eficazes,
            pensadas para impulsionar o seu crescimento em cada fase. Seja com a Forja de Soluções, que cria algo totalmente exclusivo para sua visão mais ambiciosa,
            ou com o Núcleo de Potência, que oferece acesso a sistemas práticos e robustos para os desafios mais comuns e essenciais do seu trampo no dia a dia.
            Nosso foco é descomplicar a tarefa manual e revolucionar com a tecnologia, guiando você ao passo essencial para o próximo nível.
          </ParagraphFadeInLeft>
        </div>
        <Feedbacks />
        <Brands />
      </section>
    </>
  );
}
