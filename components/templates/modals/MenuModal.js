import { useEffect } from "react";
import Image from "next/image";

const ModalMenu = ({ isOpen, toggleMenu }) => {
  useEffect(() => {
    // Disable scroll when modal is open
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      toggleMenu(); // Close the menu after clicking
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end items-center transition-transform duration-1000 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-[250px] h-full relative">
          <Image
          onClick={toggleMenu}
            src="/img/closeIcon.svg"
            width={40}
            height={40}
            alt="Close Icon"
            className="z-10 cursor-pointer absolute top-4 right-4"
          />
        <ul className="flex flex-col items-end justify-between mt-10 space-y-4 text-2xl font-semibold h-[350px]">
          <li onClick={() => handleScrollToSection("education")}>
            Образование
          </li>
          <li onClick={() => handleScrollToSection("experience")}>
            Опыт работы
          </li>
          <li onClick={() => handleScrollToSection("medal")}>Достижения</li>
          <li onClick={() => handleScrollToSection("location")}>
            Адрес приёма
          </li>
          <li onClick={() => handleScrollToSection("uslugi")}>Услуги</li>
          <li onClick={() => handleScrollToSection("contacts")}>Контакты</li>
          
        </ul>
      </div>
    </div>
  );
};

export default ModalMenu;
