import Image from "next/image"
import Link from "next/link"
import Modal from "@/components/templates/modals/Modal";
import { useState } from "react";

function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className=' relative h-[60px] hidden md:flex justify-center items-center bg-white z-10'>
      {modalOpen && <Modal closeModal={closeModal} />}
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
          </div>
          <button onClick={() => handleScrollTo('uslugi')} className="text-sm">
              Услуги и цены
          </button>
        </div>
        <div className="h-full w-[450px] flex justify-between items-center">
          <div>
            <a href="tel:+998998388078" className="font-semibold">
              +998 99 838 80 78
            </a>
          </div>
          <div>
            <button onClick={openModal} className="h-8 bg-blue-800 text-white px-3 pb-1 rounded-md">
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