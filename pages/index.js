import { useState } from "react";
import Header from "@/components/layouts/Header";
import Main from "@/components/layouts/Main";
import HeaderMob from "@/components/layouts/HeaderMob"
import Modal from "@/components/templates/modals/Modal"
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <main className="">
      <HeaderMob toggleMenu={toggleMenu} />
      <Header />
      <Main isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}  />
      {/* <Modal /> */}
    </main>
  );
}
