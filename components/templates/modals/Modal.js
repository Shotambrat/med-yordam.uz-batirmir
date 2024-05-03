import { useState } from 'react';
import Image from 'next/image';
import SuccessModal from './SuccessModal';

export default function Modal({ closeModal }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [complaints, setComplaints] = useState('');
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, phone, complaints }),
    });

    if (response.ok) {
      setIsSuccessModalVisible(true);
      setTimeout(() => {
        setIsSuccessModalVisible(false);
        closeModal(); // Close the main modal
      }, 2000); // Show the success modal for 2 seconds
    }
  };

  return (
    <>
      {isSuccessModalVisible && <SuccessModal />}
      <div
        className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-modalBlue modal-enter z-[9998]`}
      >
        <div className="absolute right-8 top-12 md:cursor-pointer" onClick={closeModal}>
          <Image src="/img/closeIcon.svg" width={40} height={40} alt="Close Icon" />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-between px-6 w-full md:w-[700px]">
          <div className="mb-8">
            <h4 className="text-center text-white text-2xl md:text-3xl font-semibold md:mb-4">Записаться на приём</h4>
            <h4 className="md:block hidden text-center text-white text-xl max-w-[400px]">
              Поделитесь проблемой, и врач свяжется с вами в ближайшее время
            </h4>
          </div>
          <div className="flex flex-col w-full mb-10">
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
              className="placeholder-white md:h-14 md:text-xl text-white mb-4 border-2 border-slate-400 rounded-md bg-inputBg py-1 pl-3 outline-none focus:border-white"
            />
            <input
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+998"
              className="placeholder-white md:h-14 md:text-xl text-white mb-4 border-2 border-slate-400 rounded-md bg-inputBg py-1 pl-3 outline-none focus:border-white"
            />
            <textarea
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
              Отправить
            </button>
          </div>
        </form>
      </div>
    </>
  );
}



// import Image from "next/image";

// export default function Modal({ closeModal }) {
//   return (
//     <div className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-modalBlue modal-enter z-[9999]`}>

//       <div className="absolute right-8 top-12 md:cursor-pointer" onClick={closeModal}>
//         <Image
//           src="/img/closeIcon.svg"
//           width={40}
//           height={40}
//           alt="Close Icon"
//         />
//       </div>

//       <div className="md:block hidden absolute -top-[100px] -left-[100px] -z-10">
//       <Image
//           src="/img/medPlusCircle.svg"
//           width={400}
//           height={400}
//           alt="Close Icon"
//         />
//       </div>
//       <div className="md:block hidden absolute -bottom-12 right-0 -z-10">
//       <Image
//           src="/img/medRookh.png"
//           width={400}
//           height={400}
//           alt="Close Icon"
//         />
//       </div>
//       <form action="/api/telegram" method="POST" encType="multipart/form-data" className="flex flex-col items-center justify-between px-6 w-full md:w-[700px]">
//             <div className="mb-8">
//                 <h4 className="text-center text-white text-2xl md:text-3xl font-semibold md:mb-4">
//                     Записаться на приём
//                 </h4>
//                 <h4 className="md:block hidden text-center text-white text-xl max-w-[400px]">
//                 Поделитесь проблемой и врач свяжется с Вами в ближайшее время
//                 </h4>
//             </div>
//             <div className="flex flex-col w-full mb-10">
//                 <input  placeholder="Ваше имя" className="placeholder-white md:h-14 md:text-xl text-white mb-4 border-2 border-slate-400 rounded-md bg-inputBg py-1 pl-3 outline-none focus:border-white"/>
//                 <input  placeholder="+998" className="placeholder-white md:h-14 md:text-xl text-white mb-4 border-2 border-slate-400 rounded-md bg-inputBg py-1 pl-3 outline-none focus:border-white"/>
//                 <textarea placeholder="Жалобы" className="placeholder-white md:h-24 md:text-xl text-white mb-4 border-2 border-slate-400 rounded-md bg-inputBg py-1 pl-3 outline-none focus:border-white"/>
//             </div>
//             <div className="w-full flex justify-center">
//                 <button type="submit" className="bg-white w-full md:h-14 md:text-lg h-10 rounded-lg text-xs font-semibold text-buttonColor uppercase md:max-w-[400px] hover:bg-gradient-to-r hover:from-aboutBgEnd hover:to-aboutBgStart transition-all hover:text-white border-2 border-white">
//                     Отправить
//                 </button>
//             </div>
//         </form>
//     </div>
//   );
// }
