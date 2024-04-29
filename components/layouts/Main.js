import Image from "next/image";

const Main = () => {
  return (
    <main>
      <section className="relative h-screen-minus-60 md:h-screen-minus-60 p-2 w-full flex justify-center items-center bg-gradient-to-br from-aboutBgStart to-aboutBgEnd">
        <div className="absolute w-[300px] h-[300px] md:w-[800px] md:h-[800px] md:-top-16 md:-right-0 md:left-auto md:scale-x-[1] -left-8 top-[300px] scale-x-[-1] md:scal -z-5">
          <img src="/img/aboutBg.png" className="w-full h-full object-cover object-center" />
        </div>
        <div className="w-[1100px] max-w-full h-full md:py-6 flex flex-col md:flex-row">
          <div className="md:w-[450px] md:h-full md:min-h-full h-1/2 min-h-1/2 flex flex-col justify-center">
            <div
              className="w-full h-full md:h-5/6 relative md:mb-4"
            >
              <img src="/img/batirAva.png" className="w-full h-full object-cover rounded-xl md:rounded-none" />
            </div>
            <button className="w-full h-14 hidden md:flex items-center justify-center text-center text-buttonColor rounded-md md:rounded-xl bg-white text-xl font-semibold hover:bg-gradient-to-r hover:from-aboutBgEnd hover:to-aboutBgStart transition-all hover:text-white border-2 border-white">
              записаться на прием
            </button>
          </div>
          <div className="md:flex-1 md:h-full md:min-h-full h-1/2 max-h-1/2 flex flex-col md:justify-between justify-around text-white md:ml-4">
            <h1 className="w-full text-xl md:text-5xl md:text-left md:leading-[80px] text-center md:mt-0 mt-4 font-bold md:font-semibold">
              МИРЗАЕВ БАТЫР БАХРАМОВИЧ
            </h1>
            <div className="w-full flex flex-wrap md:flex-col md:items-start justify-between md:mb-0 mb-4">
              <div className="px-4 border-2 border-slate-300 rounded-2xl mt-4 md:mt-0 h-8 md:h-9 md:text-xl md:px-6">
                <h3>Гастроэнтеролог</h3>
              </div>
              <div className="px-4 border-2 border-slate-300 rounded-2xl mt-4 md:mt-8 h-8 md:h-9 md:text-xl md:px-6">
                <h3>Эндоскопист</h3>
              </div>
              <div className="px-4 border-2 border-slate-300 rounded-2xl mt-4 md:mt-8 h-8 md:h-9 md:text-xl md:px-6">
                <h3>Гепатолог</h3>
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-col md:mb-2">
              <div className="font-bold md:mb-12 mb-2 md:text-lg md:font-semibold">
                <h3>Опыт работы 26 лет</h3>
                <h3>Врач высшей категории</h3>
                <h3>Кандидат наук</h3>
              </div>
              <div className="flex items-center mb-4">
                <p className="w-[180px] md:text-xl">Знание языков:</p>
                <div className="flex justify-around md:justify-between items-center w-[250px] md:w-[200px]">
                  <div className="h-8 md:h-10 md:px-3 px-2 rounded-md border-2 border-slate-300 flex justify-center items-center">
                    <p>
                    рус
                    </p>
                  </div>
                  <div className="h-8 md:h-10 md:px-3 px-2 rounded-md border-2 border-slate-300 flex justify-center items-center">
                    <p>
                    узб
                    </p>
                  </div>
                  <div className="h-8 md:h-10 md:px-3 px-2 rounded-md border-2 border-slate-300 flex justify-center items-center">
                    <p>
                    англ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto w-full bg-white flex justify-center px-2 md:px-0">
        <div className="md:w-[1100px] h-[1000px] flex flex-col">
          <div className="w-full h-[150px] md:h-[200px] flex justify-between mt-4 md:mt-8 rounded-lg md:rounded-3xl bg-gradient-to-tr from-aboutBgStart to-aboutBgEnd">
            <div className="h-full w-1/4 md:w-1/5 flex items-end ">
              <Image
                src="/img/brain-citate.png"
                height={200}
                width={200}
                alt="Brain of Citate"
              />
            </div>
            <div className="w-2/4 md:w-3/5 h-full flex items-center justify-center">
              <h4 className="text-white md:text-3xl text-md text-center italic">
              ”Головой во многом управляет желудок”
              </h4>
            </div>
            <div className="h-full md:w-1/5 w-1/4 flex items-start justify-end">
              <Image
                src="/img/jeludok.png"
                height={300}
                width={300}
                alt="Brain of Citate"
              />
            </div>
          </div>
          <div className="flex justify-between w-full h-auto mt-8">
            <div className="w-1/4 h-full hidden md:block">
              <ul className="list-none flex flex-col w-full h-[350px] justify-between sticky">
                <li className="h-10 px-2 w-full flex items-center rounded-md bg-blue-700">
                  <h2 className="text-center text-white w-full">Образование</h2>
                </li>
                <li className="h-10 px-2 w-full flex items-center rounded-md">
                  <h2 className="text-center w-full">Опыт работы</h2>
                </li>
                <li className="h-10 px-2 w-full flex items-center rounded-md">
                  <h2 className="text-center w-full">Достижения</h2>
                </li>
                <li className="h-10 px-2 w-full flex items-center rounded-md">
                  <h2 className="text-center w-full">Адрес приёма</h2>
                </li>
                <li className="h-10 px-2 w-full flex items-center rounded-md">
                  <h2 className="text-center w-full">Услуги</h2>
                </li>
                <li className="h-10 px-2 w-full flex items-center rounded-md">
                  <h2 className="text-center w-full">Контакты</h2>
                </li>
              </ul>
            </div>
            <div className="md:w-3/4 w-full md:ml-12 h-auto">
              <div className="relative h-[230px] w-full rounded-lg bg-gray-300 flex p-4">
                <div className="h-full w-full md:w-1/6 flex items-center justify-center border-2 border-black">
                  <Image 
                    src="/img/bakalavr.png"
                    width={100}
                    height={100}
                    alt="Bakalavr"
                  />
                </div>
                <div>
                  <div>
                    <h2 className="text-2xl">Образование</h2>
                    <ul>
                      <li className="">
                      Тема диссертации. - Возможности эндоскопических вмешательств на хирургических этапахлечения портальная гипертензия (2009)
                      </li>
                    </ul>
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
