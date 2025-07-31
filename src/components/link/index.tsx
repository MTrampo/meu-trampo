import Link from "next/link"
import { ReactNode } from "react"

type InternalExternalLinkProps = {
  children: ReactNode
  className: string
  isInternalLink: boolean
  target?: '_blank' | '_self' 
  href: string
}

export default function InternalExternalLink ({ children, isInternalLink, href, className, target = '_blank' }: InternalExternalLinkProps) {
  
  if (!isInternalLink) {
    <a href={href} target={target} className={className}>
      {children}
    </a> 
  }
  
  return (
    <Link href={href} prefetch className={className}>
      {children}
    </Link>
  )
}