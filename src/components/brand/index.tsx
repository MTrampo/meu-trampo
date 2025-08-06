import BrandTicker from "./brand-ticker";

export default function Brands() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-y-20 md:gap-x-6 lg:gap-x-20 pt-20">
      <h6 className="text-center md:text-left text-nowrap uppercase">
        <span className="block">trampos que confiam</span>
        <span className="block">no meu trampo</span>
      </h6>
      <BrandTicker />
    </div>
  )
}