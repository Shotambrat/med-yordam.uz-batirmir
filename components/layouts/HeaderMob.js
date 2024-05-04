import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "@/components/templates/modals/Modal";

function HeaderMob() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
  return (
  <div className="fixed md:hidden bottom-0 left-0 h-[60px] w-full flex justify-center items-center p-4 z-[9999] bg-white">
    {modalOpen && <Modal closeModal={closeModal} />}
    <div className="w-full h-full flex justify-between items-center">
        <a href="tel:+998998388078">
        <button className="h-[45px] w-[50px] bg-gray-100 flex justify-center items-center rounded-md">
            <Image 
                src="/img/phone.svg"
                height={30}
                width={30}
                alt="phone Icon"
            />
        </button>
        </a>
        <button onClick={openModal} className="h-[45px] w-[180px] bg-blue-700 rounded-md flex justify-center items-center">
            <h2 className="text-sm font-semibold text-white">
                Записаться на прием
            </h2>
        </button>
        <button className="h-[45px] w-[50px] bg-gray-100 flex justify-center items-center rounded-md">
            <Image 
                src="/img/burger-menu.svg"
                height={30}
                width={30}
                alt="phone Icon"
            />
        </button>
    </div>
  </div>
  );
}

export default HeaderMob;
