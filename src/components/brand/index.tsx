import BrandTicker from "./brand-ticker";

export default function Brands() {
  return (
    <div className="flex items-center gap-20 pt-20">
      <h6 className="text-nowrap uppercase">
        <span className="block">trampos que confiam</span>
        <span className="block">no meu trampo</span>
      </h6>
      <BrandTicker />
    </div>
  )
}