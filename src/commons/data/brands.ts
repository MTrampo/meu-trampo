import LedDark from '@/commons/assets/img/brands/dark/led.png'
import LedLight from '@/commons/assets/img/brands/light/led.png'
import LopesDark from '@/commons/assets/img/brands/dark/lopes.png'
import LopesLight from '@/commons/assets/img/brands/light/lopes.png'
import VielasDark from '@/commons/assets/img/brands/dark/vielas.png'
import VielasLight from '@/commons/assets/img/brands/light/vielas.png'
import Brn from '@/commons/assets/img/brands/brn.png'
import Doce from '@/commons/assets/img/brands/doce.png'
import Mf from '@/commons/assets/img/brands/mf.png'


export const getBrands = (theme: string | undefined) => {
  return [
    { src: theme === 'dark' ? LedDark : LedLight, alt: "Led Seguros", url: "https://www.ledseguros.com.br/", liClass: theme === 'dark' ? "filter grayscale brightness-200" : "" },
    { src: Brn, alt: "BRN Digital Marketing", url: "https://www.instagram.com/brndigital.mkt/", liClass: theme === 'dark' ? "filter grayscale brightness-200" : "" },
    { src: theme === 'dark' ? LopesDark : LopesLight, alt: "Lopes Higienização", url: "https://www.instagram.com/higienizacao.lopes/", liClass: theme === 'dark' ? "filter grayscale brightness-200" : "" },
    { src: Doce, alt: "Doce Sabor", url: "https://www.instagram.com/doce.sabor661/", liClass: theme === 'dark' ? "filter grayscale" : "" },
    { src: theme === 'dark' ? VielasDark : VielasLight, alt: "Vielas Car Detail", url: "https://www.instagram.com/vielascar/", liClass: theme === 'dark' ? "filter grayscale brightness-200" : "" },
    { src: Mf, alt: "MF Sublimação", url: "https://www.instagram.com/subli_lopes/", liClass: theme === 'dark' ? "filter grayscale brightness-200 contrast-75" : "" },
  ]

}