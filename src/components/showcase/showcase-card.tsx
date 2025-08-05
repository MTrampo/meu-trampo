import { ShowCaseData } from "@/commons/interface/showcase"
import Image from "next/image"
import { Badge } from "../ui/badge"

type ShowCaseCardProps = {
  data: ShowCaseData
}

export default function ShowCaseCard({ data }: ShowCaseCardProps) {
  return(
    <a href={data.href} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col gap-5">
        <Image className="w-full h-auto rounded-xl" src={data.cover.src} alt={data.cover.alt} width={400} height={400}/>
        <div>
          <div className="flex gap-4">
            <h6>{data.title}</h6>
            <Badge>{data.badge}</Badge>
          </div>
          <span className="text-gray-500 text-sm">{data.type}</span>
        </div>
      </div>
    </a>
  )
}