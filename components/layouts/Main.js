import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "@/components/templates/modals/Modal";
import Card from "@/components/templates/Card";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import toast, { Toaster } from 'react-hot-toast';
import MenuModal from "@/components/templates/modals/MenuModal";

const Main = ({isMenuOpen, toggleMenu}) => {
  // console.log(activeId)

  const [modalOpen, setModalOpen] = useState(false);
  const [service, setService] = useState(false);


  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [complaints, setComplaints] = useState("");
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSuccessModalVisible(true);

    const response = await fetch("/api/telegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone, complaints }),
    });

    if (response.ok) {
        toast.success("Успешно отправлено!")
        setIsSuccessModalVisible(false);
    }
  };

  const handleServices = () => setService(!service)

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    {
      id: "education",
      title: "Образование",
    },
    {
      id: "experience",
      title: "Опыт работы",
    },
    {
      id: "medal",
      title: "Достижения",
    },
    {
      id: "location",
      title: "Адрес приёма",
    },
    {
      id: "uslugi",
      title: "Услуги",
    },
    {
      id: "contacts",
      title: "Контакты",
    },
  ];

  useIntersectionObserver(menuItems);

  const cardData = [
    {
      title: "Образование",
      id: "education",
      imageSrc: "/img/bakalavr.png",
      items: [
        "Тема диссертации. - Возможности эндоскопических вмешательств на хирургических этапахлечения портальная гипертензия (2009)",
        "Магистр лечебного факультета 1-го Ташкентского государственного медицинского института. Ташкент (1997)",
        "Аттестат об окончании последипломного образования по эндоскопии желудочно-кишечного тракта, Республиканский специализированный центр хирургии им. акад. В. Вахидова (1997)",
        "Сертификат об окончании. Новые технологии в желудочно-кишечной эндоскопии. Академия последипломного образования. Санкт-Петербург, Российская Федерация (2005)",
        "Свидетельство о прохождении эндоскопического вмешательства во время желудочно-кишечной хирургии, Ташкентский государственный медицинский институт последипломного образования (2008)",
        "Кандидат медицинских наук. Тема диссертации. - Возможности эндоскопических вмешательств на хирургических этапахлечения портальная гипертензия (2009)",

        // Другие элементы
      ],
    },
    {
      title: "Опыт работы",
      id: "experience",
      imageSrc: "/img/loc-point.png",
      items: [
        `С декабря 2020 г. по декабрь 2021 г. - консультант-гастроэнтеролог, больница им. Короля Фахда,
        <br/>Медина, Саудовская Аравия,`,
        "С декабря 2017 г. по ноябрь 2020 г., гастроэнтеролог-эндоскопист, больница «AKFA Medline», Ташкент.",
        "С марта 2017 г. по ноябрь 2017 г. Госпиталь «Доктор Д» - врач-гастроэнтеролог-эндоскопист Ташкент.",
        "Апрель 2015 г. - январь 2017 г. - специалист отделения гастроэнтерологии и эндоскопии, больница Аль-Адан, Кувейт.",
        "С 1997 г. по апрель 2015 г. Врач-эндоскопист отделения эндоскопии желудочно-кишечного тракта Республиканского специализированного центра хирургии имени профессора В. Вахидова, Ташкент, Узбекистан",
        // Другие элементы
      ],
    },
    {
      title: "Достижения",
      id: "medal",
      imageSrc: "/img/medal.png",
      items: [
        `Врач высшей категории со стажем 26 лет`,
        "Кандидат медицинских наук",
        "Опыт работы в Саудовской Аравии, Кувейте",
        "Член Российского общества гастроинтестинальной эндоскопии",
        "Член Медицинской ассоциации Кувейта",
        // Другие элементы
      ],
    },
    {
      title: "Места приёма",
      id: "location",
      imageSrc: "/img/chel-clock.png",
      items: [
        `Medion Innovation <br/> ул. Абдуллы Кадыри, 39 <br/> Ориентир: "FLORIYA" КАФЕ - ГАНГА, "ROSSINI" РЕСТОРАН <br/> пн, ср, пт, вс 14:00 - 17:00 <br/>сб 10:00 - 16:00 <br/>приём 350 000 сум`,
        "- Immunogen test <br/>ул. Я. Гулямова, 74 <br/>Ориентир: посольство Франции, Miran International гостиница <br/>пн, ср, пт, сб, вс <br/>вт, чт 09:00-13:00 <br/>приём: 200 000 сум",
        'Vega Med пр-т Мирзо Улугбека, 5 <br/>Ориентир: бывш. з-д "Ташсельмаш", дворец музыки <br/>пн, ср, пт 09:00-15:00 <br/>приём: 300 000 сум',
        // Другие элементы
      ],
    },
  ];
  return (
    <main>
            <Toaster />
      {modalOpen && <Modal closeModal={closeModal} />}
      <MenuModal isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <section className="relative h-screen-minus-60 md:h-screen-minus-60 p-2 w-full flex justify-center items-center bg-gradient-to-br from-aboutBgStart to-aboutBgEnd">
        <div className="absolute w-[300px] h-[300px] md:w-[800px] md:h-[800px] md:-top-16 md:-right-0 md:left-auto md:scale-x-[1] -left-8 top-[300px] scale-x-[-1] md:scal -z-5">
          <img
            src="/img/aboutBg.png"
            className="w-full h-full object-cover object-center"
            alt="about"
          />
        </div>
        <div className="w-[1100px] max-w-full h-full md:py-6 flex flex-col md:flex-row">
          <div className="md:w-[450px] md:h-full md:min-h-full h-1/2 min-h-1/2 flex flex-col justify-center">
            <div className="w-full h-full md:h-5/6 relative md:mb-4">
              <img
                src="/img/batirAva.png"
                className="w-full h-full object-cover rounded-xl md:rounded-none"
                alt="Batir Baxramovich foto"
              />
            </div>
            <button
              onClick={openModal}
              className="w-full h-14 hidden md:flex items-center justify-center text-center text-buttonColor rounded-md md:rounded-xl bg-white text-xl font-semibold hover:bg-gradient-to-r hover:from-aboutBgEnd hover:to-aboutBgStart transition-all hover:text-white border-2 border-white"
            >
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
                    <p>рус</p>
                  </div>
                  <div className="h-8 md:h-10 md:px-3 px-2 rounded-md border-2 border-slate-300 flex justify-center items-center">
                    <p>узб</p>
                  </div>
                  <div className="h-8 md:h-10 md:px-3 px-2 rounded-md border-2 border-slate-300 flex justify-center items-center">
                    <p>англ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-auto w-full bg-white flex justify-center px-2 md:px-0">
        <div className="md:w-[1100px] h-auto flex flex-col">
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
          {/* bg-blue-700 text-white */}
          <div className="flex justify-between w-full h-auto mt-8">
            <div className="w-1/4 h-auto hidden md:block">
              <ul className="list-none flex flex-col w-full h-[300px] justify-between sticky top-0 mb-5 z-10">
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    data-id={item.id} // New data attribute
                    className={`h-10 px-2 w-full flex items-center rounded-md bg-white text-black cursor-pointer transition-all`}
                    onClick={() =>
                      document.getElementById(item.id).scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                  >
                    <h2 className="text-center w-full">{item.title}</h2>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:w-3/4 w-full md:ml-12 h-auto transition-all">
              {cardData.map((card, index) => (
                <Card
                  id={card.id}
                  key={index}
                  title={card.title}
                  items={card.items}
                  imageSrc={card.imageSrc}
                  className="section transition-all"
                />
              ))}
              <div
                id="uslugi"
                className={`relative w-full ${service == false ? 'md:h-[500px] h-[390px]':'h-auto md:h-auto'} bg-gradient-to-r rounded-xl mb-8 from-aboutBgStart to-aboutBgEnd px-10 py-6 text-white`}
              >
                <h2 className="md:text-4xl text-2xl font-semibold mb-6">
                  Услуги
                </h2>
                <div className={`w-full flex flex-col overflow-y-hidden mb-6 ${service == false ? 'h-[250px] md:h-[350px]':'h-auto md:h-auto'}`}>
                  <div className="w-full mb-6">
                    <div className="w-full flex justify-between md:text-2xl text-md mb-3">
                      <h3>Консультация гастроэнтеролога</h3>
                      <h3 className="ml-8 font-bold">цена</h3>
                    </div>
                    <hr className="border-2" />
                  </div>
                  <div className="w-full mb-6">
                    <div className="w-full flex justify-between md:text-2xl text-md mb-3">
                      <h3>Гастродуоденоскопия (местная анестезия) без биопсии</h3>
                      <h3 className="ml-8 font-bold">цена</h3>
                    </div>
                    <hr className="border-2" />
                  </div>
                  <div className="w-full mb-6">
                    <div className="w-full flex justify-between md:text-2xl text-md mb-3">
                      <h3>Гастродуоденоскопия (под в/в седацией) без биопсии</h3>
                      <h3 className="ml-8 font-bold">цена</h3>
                    </div>
                    <hr className="border-2" />
                  </div>
                  <div className="w-full mb-6">
                    <div className="w-full flex justify-between md:text-2xl text-md mb-3">
                      <h3>Дуоденоскопия с осмотром большого дуоденального сосочка (под в/в седацией)</h3>
                      <h3 className="ml-8 font-bold">цена</h3>
                    </div>
                    <hr className="border-2" />
                  </div>
                  <div className="w-full mb-6">
                    <div className="w-full flex justify-between md:text-2xl text-md mb-3">
                      <h3>Биопсия простая (до 4 фрагментов включительно)</h3>
                      <h3 className="ml-2">цена</h3>
                    </div>
                    <hr className="border-2" />
                  </div>
                  <div className="w-full mb-6">
                    <div className="w-full flex justify-between md:text-2xl text-md mb-3">
                      <h3>Биопсия множественная (более 4 фрагментов)</h3>
                      <h3 className="ml-2">цена</h3>
                    </div>
                    <hr className="border-2" />
                  </div>
                  <div className="w-full mb-6">
                    <div className="w-full flex justify-between md:text-2xl text-md mb-3">
                      <h3>Установка назогастрального зонда</h3>
                      <h3 className="ml-2">цена</h3>
                    </div>
                    <hr className="border-2" />
                  </div>
                  <div className="w-full mb-6">
                    <div className="w-full flex justify-between md:text-2xl text-md mb-3">
                      <h3>Колоноскопия без биопсии (без анестезии)</h3>
                      <h3 className="ml-2">цена</h3>
                    </div>
                    <hr className="border-2" />
                  </div>
                  <div className="w-full mb-6">
                    <div className="w-full flex justify-between md:text-2xl text-md mb-3">
                      <h3>Колоноскопия без биопсии (под в/в седацией)</h3>
                      <h3 className="ml-2">цена</h3>
                    </div>
                    <hr className="border-2" />
                  </div>
                  <div className="w-full mb-6">
                    <div className="w-full flex justify-between md:text-2xl text-md mb-3">
                      <h3>Ректосигмоскопия</h3>
                      <h3 className="ml-2">цена</h3>
                    </div>
                    <hr className="border-2" />
                  </div>
                  <div className="w-full mb-6">
                    <div className="w-full flex justify-between md:text-2xl text-md mb-3">
                      <h3>Бронхоскопия</h3>
                      <h3 className="ml-2">цена</h3>
                    </div>
                    <hr className="border-2" />
                  </div>
                  <div className="w-full mb-6">
                    <div className="w-full flex justify-between md:text-2xl text-md mb-3">
                      <h3>Установка назоеюнального, назогастрального зонда</h3>
                      <h3 className="ml-2">цена</h3>
                    </div>
                    <hr className="border-2" />
                  </div>
                  <div className="w-full mb-6">
                    <div className="w-full flex justify-between md:text-2xl text-md mb-3">
                      <h3>Эндоскопическое удаление инородного тела из ЖКТ, трахеи и бронхов</h3>
                      <h3 className="ml-2">цена</h3>
                    </div>
                    <hr className="border-2" />
                  </div>
                  <div className="w-full mb-6">
                    <div className="w-full flex justify-between md:text-2xl text-md mb-3">
                      <h3>Эндоскопическое удаление полипов из ЖКТ 1 категории сложности</h3>
                      <h3 className="ml-2">цена</h3>
                    </div>
                    <hr className="border-2" />
                  </div>
                  <div className="w-full mb-6">
                    <div className="w-full flex justify-between md:text-2xl text-md mb-3">
                      <h3>Браш-цитология</h3>
                      <h3 className="ml-2">цена</h3>
                    </div>
                    <hr className="border-2" />
                  </div>
                  <div className="w-full mb-6">
                    <div className="w-full flex justify-between md:text-2xl text-md mb-3">
                      <h3>Смыв из бронхов</h3>
                      <h3 className="ml-2">цена</h3>
                    </div>
                    <hr className="border-2" />
                  </div>
                  <div className="w-full mb-6">
                    <div className="w-full flex justify-between md:text-2xl text-md mb-3">
                      <h3>Гемостаз желудочно-кишечного тракта</h3>
                      <h3 className="ml-2">цена</h3>
                    </div>
                    <hr className="border-2" />
                  </div>
                  <div className="w-full mb-6">
                    <div className="w-full flex justify-between md:text-2xl text-md mb-3">
                      <h3>Консультация</h3>
                      <h3 className="ml-2">цена</h3>
                    </div>
                    <hr className="border-2" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-10 w-full flex justify-end">
                  <button onClick={handleServices} className="h-8 md:h-10 w-[120px] md:w-[160px] bg-gray-200 text-blue-600 rounded-lg flex justify-center items-center font-semibold">
                    <p>Показать всё</p>
                  </button>
                </div>
              </div>
              <div
                id="contacts"
                className="relative w-full h-[136px] flex justify-around bg-contactsBg rounded-xl mb-8"
              >
                <div className="absolute bottom-0 left-0 h-full w-auto">
                  <Image
                    src="/img/phone-contacts.png"
                    height={200}
                    width={200}
                    alt="Phone-contacts-bg"
                    className="relative bottom-0"
                  />
                </div>
                <div className="h-full flex items-center">
                  <h2 className="md:text-4xl text-xl font-semibold">
                    Контакты
                  </h2>
                </div>
                <div className="flex flex-col justify-center items-center h-full md:mr-0">
                  <a
                    href="tel:+998998388078"
                    className="relative h-[35px] w-[160px] md:w-[200px] bg-blue-700 rounded-md text-white flex justify-around items-center mb-4"
                  >
                    <div className="relative top-0 left-0 h-full w-1/4 flex justify-center items-center">
                      <Image
                        src="/img/phone-icon.svg"
                        height={25}
                        width={25}
                        alt="Phone-icon"
                      />
                    </div>
                    <h3 className="w-3/4 flex justify-center">+998998388078</h3>
                  </a>
                  <a
                    href="https://t.me/gastroendouz"
                    target="_blank"
                    className="relative h-[35px] w-[160px] md:w-[200px] bg-blue-700 rounded-md text-white flex justify-between items-center"
                  >
                    <div className="relative top-0 left-0 h-full w-1/4 flex justify-center items-center">
                      <Image
                        src="/img/telegram-icon-contacts.svg"
                        height={25}
                        width={25}
                        alt="Phone-icon"
                      />
                    </div>
                    <h3 className="w-3/4 flex justify-center">Telegram</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-auto w-full bg-white flex justify-center px-2 md:px-0 mb-4">
        <div className="relative h-auto w-[1100px] max-w-[1100px] bg-gradient-to-br from-aboutBgStart to-aboutBgEnd flex justify-center items-center rounded-2xl">
          <div className="absolute md:-top-[100px] md:-left-[100px] left-0 top-0">
            <Image
              src="/img/medPlusCircle.svg"
              height={1}
              width={1}
              alt="Close Icon"
              className="md:w-[400px] md:h-[400px] w-[150px] h-[150px] "
            />
          </div>
          <div className="absolute bottom-0 md:-bottom-12 right-0">
            <Image
              src="/img/medRookh.png"
              width={400}
              height={400}
              alt="Close Icon"
              className="md:w-[400px] md:h-[400px] w-[200px] h-[200px] "
            />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center justify-between px-6 w-full md:w-[700px] z-10 my-8">
            <div className="mb-8">
              <h4 className="text-center text-white text-2xl md:text-3xl font-semibold mb-4">
                Записаться на приём
              </h4>
              <h4 className="text-center text-white text-md md:text-xl max-w-[400px]">
                Поделитесь проблемой и врач свяжется с Вами в ближайшее время
              </h4>
            </div>
            <div className="flex flex-col w-full mb-10">
            <input
              required
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
              className="placeholder-white md:h-14 md:text-xl text-white mb-4 border-2 border-slate-400 rounded-md bg-inputBg py-1 pl-3 outline-none focus:border-white"
            />
            <input
              required
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+998"
              className="placeholder-white md:h-14 md:text-xl text-white mb-4 border-2 border-slate-400 rounded-md bg-inputBg py-1 pl-3 outline-none focus:border-white"
            />
            <textarea
              required
              name="complaints"
              value={complaints}
              onChange={(e) => setComplaints(e.target.value)}
              placeholder="Жалобы"
              className="placeholder-white md:h-24 md:text-xl text-white mb-4 border-2 border-slate-400 rounded-md bg-inputBg py-1 pl-3 outline-none focus:border-white"
            />
            </div>
            <div className="w-full flex justify-center">
            <button
              type="submit"
              className="bg-white w-full md:h-14 md:text-lg h-10 rounded-lg text-xs font-semibold text-buttonColor uppercase md:max-w-[400px] hover:bg-gradient-to-r hover:from-aboutBgEnd hover:to-aboutBgStart transition-all hover:text-white border-2 border-white"
            >
              {isSuccessModalVisible == false ? "Отправить" : "Отправка..."}
            </button>
            </div>
          </form>
        </div>
      </section>
      <section id="map" className="w-full h-screen relative">
        <div className="md:absolute relative h-[350px] w-[300px] bg-gradient-to-tr from-aboutBgStart to-aboutBgEnd top-0 left-0 md:top-[200px] md:left-[200px] rounded-xl mx-auto md:mx-0 py-4 px-4 z-10">
          <div className="absolute right-0 top-2 h-[100px] w-[100px]">
            <Image
              src="/img/address-point.png"
              width={100}
              height={100}
              alt="Address Point"
            />
          </div>
          <div className="h-full w-full flex flex-col justify-between text-white">
              <h2 className="text-[26px] font-semibold mt-2 ml-2">
                Адрес приёма
              </h2>

              <div className="w-full flex flex-col">
                <div className="flex flex-col w-full justify-between h-[70px]">
                  <div className="flex items-center">
                    <p className="mx-2 text-6xl font-bold opacity-50">1</p>
                    <h4 className="w-[170px] text-sm">
                      <span className="font-semibold">Адрес: </span>Medion Innovation ул. Абдуллы Кадыри, 39 
                    </h4>
                  </div>
                  <hr className="border-2 opacity-50"/>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div className="flex flex-col w-full justify-between h-[70px]">
                  <div className="flex items-center">
                    <p className="mx-2 text-6xl font-bold opacity-50">2</p>
                    <h4 className="w-[170px] text-sm">
                      <span className="font-semibold">Адрес: </span> Immunogen test ул. Я. Гулямова, 74 
                    </h4>
                  </div>
                  <hr className="border-2 opacity-50"/>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div className="flex flex-col w-full justify-between h-[70px]">
                  <div className="flex items-center">
                    <p className="mx-2 text-6xl font-bold opacity-50">3</p>
                    <h4 className="w-[170px] text-sm">
                      <span className="font-semibold">Адрес: </span>Vega Med пр-т Мирзо Улугбека, 5 
                    </h4>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="w-full h-screen-minus-350 md:h-full relative top-0 left-0">
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A12f6e132d99e400ddc3ff95262d7eaf04d5e9175e86ab33bb6930dab08cb32fa&amp;source=constructor" className="w-full h-full" frameborder="0"></iframe>
          </div>
      </section>
      <footer className="w-full md:h-[200px] h-[300px] bg-gradient-to-r from-aboutBgStart to-aboutBgEnd flex justify-center items-center py-10">
        <div className="w-[1100px] max-w-[1100px] flex justify-start md:justify-around items-center h-full flex-col md:flex-row">
          <div className="md:flex flex-col h-full justify-between text-white hidden">
            <h3
              onClick={() => handleScrollTo("uslugi")}
              className="cursor-pointer"
            >
              Услуги и цены
            </h3>
            <h3 className="cursor-pointer">Специализации</h3>
            <h3 className="cursor-pointer">Блог</h3>
          </div>
          <div className="w-[250px] h-auto md:h-full flex flex-col justify-start md:justify-between">
            <div className="h-[40px] w-full bg-white text-blue-600 flex items-center justify-center rounded-lg md:mb-0 mb-4">
              <div className="h-[25px] w-1/5 flex items-center justify-center">
                <Image
                  src="/img/footer-phone-icon.svg"
                  height={100}
                  width={100}
                  alt="Phone-icon"
                  className="h-full w-full"
                />
              </div>
              <a href="tel:+998998388078" className="w-3/5 font-semibold">
                <h3>+998 99 838 80 78</h3>
              </a>
            </div>
            <div className="w-full h-auto flex justify-between items-center md:mb-0 mb-4">
              <a
                href="https://www.instagram.com/batirmir"
                target="_blank"
                className="w-[50px] h-[50px]"
              >
                <Image
                  src="/img/footer-inst-icon.svg"
                  height={1}
                  width={1}
                  alt="Inst Icon"
                  className="h-full w-full"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=1515585354"
                target="_blank"
                className="w-[40px] h-[40px]"
              >
                <Image
                  src="/img/footer-facebook-icon.svg"
                  height={1}
                  width={1}
                  alt="Facebook Icon"
                  className="h-full w-full"
                />
              </a>
              <a
                href="https://t.me/gastroendouz"
                target="_blank"
                className="w-[40px] h-[40px] telegram-icon"
              >
                <Image
                  src="/img/footer-tg-icon.svg"
                  height={1}
                  width={1}
                  alt="Telegram Icon"
                  className="h-full w-full"
                />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                className="w-[50px] h-[50px]"
              >
                <Image
                  src="/img/footer-utube-icon.svg"
                  height={1}
                  width={1}
                  alt="Youtube Icon"
                  className="h-full w-full"
                />
              </a>
            </div>
          </div>
          <a
            href="https://result-me.uz/"
            target="_blank"
            className="h-[70px] w-[200px] rounded-lg bg-gray-200 bg-opacity-65 flex justify-center items-center hover:bg-gray-100"
          >
            <p className="relative -top-1 text-xl mr-2 text-blue-700">by</p>
            <div className="">
              <Image
                src="/img/log-res-foot.png"
                height={500}
                width={500}
                alt="Result logo"
                className="h-full w-auto"
              />
            </div>
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Main;
