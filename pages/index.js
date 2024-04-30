import Header from "@/components/layouts/Header";
import Main from "@/components/layouts/Main";
import HeaderMob from "@/components/layouts/HeaderMob"
import Modal from "@/components/templates/modals/Modal"
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeaderMob />
      <Header />
      <Main />
      {/* <Modal /> */}
    </main>
  );
}
