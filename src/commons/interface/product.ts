export interface ProductData {
  id: number
  link: {
    isInternalLink: boolean,
    href: string
  },
  data: {
    title: string
    description: string,
    benefits: string[],
  },
  color: string
}