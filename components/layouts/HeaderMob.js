import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
  <div className="fixed md:hidden bottom-0 left-0 h-[60px] w-full flex justify-center items-center p-4 z-10 bg-white">
    <div className="w-full h-full flex justify-between items-center">
        <button className="h-[45px] w-[50px] bg-gray-100 flex justify-center items-center rounded-md">
            <Image 
                src="/img/phone.svg"
                height={30}
                width={30}
                alt="phone Icon"
            />
        </button>
        <button className="h-[45px] w-[180px] bg-blue-700 rounded-md flex justify-center items-center">
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

export default Header;
