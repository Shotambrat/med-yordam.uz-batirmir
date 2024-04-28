import Image from "next/image";

const Main = () => {
  return (
    <main>
      <section className="relative h-screen md:h-screen-minus-60 p-2 w-full flex justify-center items-center bg-gradient-to-br from-aboutBgStart to-aboutBgEnd">
        <div className="absolute w-[300px] h-[300px] left-0 top-64 scale-x-[-1] md:scal -z-5">
          <img src="/img/aboutBg.png" className="w-full h-full object-cover object-center" />
        </div>
        <div className="w-[1200px] max-w-full h-full md:py-14 flex flex-col md:flex-row">
          <div className="flex-1 h-full flex flex-col justify-center border-2 border-black">
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              {/* <img src="/img/tacosAva.png" className="w-full h-[90%]" /> */}
            </div>
            <butoon className="w-full h-14 hidden md:flex items-center justify-center text-center text-buttonColor rounded-md bg-white text-xl font-semibold">
              записаться на прием
            </butoon>
          </div>
          <div className="flex-1 h-full flex flex-col justify-start text-white">
            <h1 className="w-full text-xl text-center mt-4 font-bold">
              МИРЗАЕВ БАТЫР БАХРАМОВИЧ
            </h1>
            <div className="w-full flex flex-wrap justify-between mb-4">
              <div className="px-4 border-2 border-slate-300 rounded-2xl mt-4 h-8">
                <h3>Гастроэнтеролог</h3>
              </div>
              <div className="px-4 border-2 border-slate-300 rounded-2xl mt-4 h-8">
                <h3>Эндоскопист</h3>
              </div>
              <div className="px-4 border-2 border-slate-300 rounded-2xl mt-4 h-8">
                <h3>Гепатолог</h3>
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-col">
              <div className="font-bold">
                <h3>Опыт работы 26 лет</h3>
                <h3>Врач высшей категории</h3>
                <h3>Кандидат наук</h3>
              </div>
              <div className="flex items-center mb-4">
                <p className="w-[180px]">Знание языков:</p>
                <div className="flex justify-around items-center w-[300px] ">
                  <div className="h-8 px-2 rounded-md border-2 border-slate-300">
                    рус
                  </div>
                  <div className="h-8 px-2 rounded-md border-2 border-slate-300">
                    узб
                  </div>
                  <div className="h-8 px-2 rounded-md border-2 border-slate-300">
                    англ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
