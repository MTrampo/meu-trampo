import Forging from "@/components/states/forging";
import { Metadata } from "next";

export const metadata: Metadata = {
  // O template do layout transformará isso em "Núcleo de Potência | Meu Trampo"
  title: 'Núcleo de Potência | Meu Trampo', 
  description: 'Sistemas robustos e inteligentes por assinatura mensal. A tecnologia essencial que seu negócio precisa para escalar com baixo investimento.',
  keywords: ['sistemas por aluguel', 'sistemas por assinatura', 'sistemas para MEI', 'sistemas para pequenos negócios', 'automação comercial', 'tecnologia acessível', 'soluções web escaláveis'],
  // openGraph: {
  //   title: 'Núcleo de Potência | Meu Trampo',
  //   description: 'Acesse ferramentas essenciais para simplificar sua operação diária.',
  //   images: ['/nucleo-og-image.png'], // Imagem específica para esta seção se desejar
  // },
};

export default function Core() {
  return(
    <Forging />
  )
}