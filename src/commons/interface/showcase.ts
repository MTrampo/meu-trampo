import { StaticImageData } from "next/image"

export interface ShowCaseData {
  id: string
  href: string,
  cover: { 
    alt: string,
    src: StaticImageData 
  },
  type: string,
  title: string,
  badge: string
}