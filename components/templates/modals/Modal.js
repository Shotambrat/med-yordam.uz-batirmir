import Image from "next/image";

export default function SuccessModal() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-modalBlue">

      <div className="absolute right-8 top-12 md:cursor-pointer">
        <Image
          src="/img/closeIcon.svg"
          width={40}
          height={40}
          alt="Close Icon"
        />
      </div>

      <div className="md:block hidden absolute -top-[100px] -left-[100px] -z-10">
      <Image
          src="/img/medPlusCircle.svg"
          width={400}
          height={400}
          alt="Close Icon"
        />
      </div>
      <div className="md:block hidden absolute -bottom-12 right-0 -z-10">
      <Image
          src="/img/medRookh.png"
          width={400}
          height={400}
          alt="Close Icon"
        />
      </div>
      <form className="flex flex-col items-center justify-between px-6 w-full md:w-[700px]">
            <div className="mb-8">
                <h4 className="text-center text-white text-2xl md:text-3xl font-semibold md:mb-4">
                    Записаться на приём
                </h4>
                <h4 className="md:block hidden text-center text-white text-xl max-w-[400px]">
                Поделитесь проблемой и врач свяжется с Вами в ближайшее время
                </h4>
            </div>
            <div className="flex flex-col w-full mb-10">
                <input  placeholder="Ваше имя" className="placeholder-white md:h-14 md:text-xl text-white mb-4 border-2 border-slate-300 rounded-md bg-inputBg py-1 pl-3 outline-none focus:border-white"/>
                <input  placeholder="+998" className="placeholder-white md:h-14 md:text-xl text-white mb-4 border-2 border-slate-300 rounded-md bg-inputBg py-1 pl-3 outline-none focus:border-white"/>
                <textarea placeholder="Жалобы" className="placeholder-white md:h-24 md:text-xl text-white mb-4 border-2 border-slate-300 rounded-md bg-inputBg py-1 pl-3 outline-none focus:border-white"/>
            </div>
            <div className="w-full flex justify-center">
                <button type="submit" className="bg-white w-full md:h-14 md:text-lg h-10 rounded-lg text-xs font-semibold text-buttonColor uppercase md:max-w-[400px]">
                    Отправить
                </button>
            </div>
        </form>
    </div>
  );
}