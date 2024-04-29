import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <div className=' relative h-[60px] hidden md:flex justify-center items-center bg-white z-10'>
      <div className='w-[1100px] max-w-[1100px] flex justify-between items-center'>
        <div className="flex w-[235px] justify-between items-center">
          <div className="flex justify-between items-center">
            <div className="mr-2">
              <Image 
                src="/img/map-marker.svg"
                width={20}
                height={20}
                alt="Map Marker"
              />
            </div>
            <p className="text-sm font-semibold mr-2">
              Ташкент
            </p>
            <div className="w-[20px] h-[25px] flex items-end">
              <Image
                src="/img/angle-down.svg"
                width={20}
                height={20}
                alt="downIcon"
              />
            </div>
          </div>
          <Link href="/">
            <p className="text-sm">
              Услуги и цены
            </p>
          </Link>
        </div>
        <div className="h-full w-[450px] flex justify-between items-center">
          <div>
            <a href="tel:+998998388078" className="font-semibold">
              +998 99 838 80 78
            </a>
          </div>
          <div>
            <button className="h-8 bg-blue-800 text-white px-3 pb-1 rounded-md">
              Записаться
            </button>
          </div>
          <div>
            <button className="flex">
            <div className="w-[20px] h-[25px] flex items-center mr-2">
              <Image 
                src="/img/ruFlag.png"
                width={20}
                height={40}
                alt="flagRussian"
              />
            </div>
              <p className="mr-2 font-semibold">
                <span className="text-slate-400">
                  Язык:
                </span> <t/>
                Русский
              </p>
              <div className="w-[20px] h-[25px] flex items-end">
              <Image
                src="/img/angle-down.svg"
                width={20}
                height={20}
                alt="downIcon"
              />
            </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header