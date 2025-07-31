import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaStar } from "react-icons/fa6";
import { DivFadeInUp } from "../motion/container";

type FeedbackCardProps = {
  text: string
  author: string
  avatarSrc?: string
  avatarFallback?: string
  rating?: number
  animationIndex: number
}

export default function FeedbackCard({ text, author, avatarSrc, avatarFallback, rating, animationIndex }: FeedbackCardProps) {
  const colSpan = text.length > 200 ? 'md:col-span-2' : text.length > 400 ? 'lg:col-span-3' : ''

  const stars = Array.from({ length: rating || 1 })
  const animationDelay = 0.1 + (animationIndex * 0.15)

  return (
    <DivFadeInUp delay={animationDelay} amount={0} className={`relative flex flex-col border rounded-lg bg-linear-to-br from-slate-900 to-gray-950 ${colSpan}`}>   
      <div className="left-1/2 top-0 w-[150px] center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2 opacity-70 bg-linear-to-r from-slate-500 to-gray-500 " />
      <div className="flex flex-col gap-6 p-6">
        <p className="text-justify text-gray-400 text-sm whitespace-normal">
          {text}
        </p>
      </div>
      <div className="flex items-center gap-6 p-6 mt-auto">
        <Avatar className="size-10">
          <AvatarImage src={avatarSrc} alt="@Vlopes4" />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex gap-1 items-center">
            {stars.map((_, index) => (
              <FaStar key={index} className="text-xs text-amber-500"/>
            ))}
          </div>
          <h4 className="text-lg">
            {author}
          </h4>
        </div>
      </div>
    </DivFadeInUp>
  )
}