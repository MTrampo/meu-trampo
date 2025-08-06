import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE
  const encodedMessage = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE

  if (!phoneNumber || !encodedMessage) {
    console.error("Variáveis de ambiente do WhatsApp não configuradas!")
    return null
  }

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <footer className="border-t mt-12 sm:mt-24">
      <div className="mx-auto px-6 max-w-5xl py-6 sm:py-12 md:max-w-7xl">
        <div className="flex justify-between items-center">
          <span className="dark:text-gray-500">© Meu Trampo. 2025</span>
          <div className="flex gap-5 text-2xl text-gray-500 dark:text-gray-300">
            {/* <FaYoutube /> */}
            <a className="hover:text-foreground dark:hover:text-white" href="https://www.instagram.com/meutrampo.dev/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a className="hover:text-foreground dark:hover:text-white" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}