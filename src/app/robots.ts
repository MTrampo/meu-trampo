import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Regra para todos os motores de busca (Google, Bing, etc)
      allow: '/',
      disallow: ['/admin', '/private'], // Proteja áreas sensíveis se existirem
    },
    sitemap: 'https://meutrampo.dev.br/sitemap.xml',
  }
}