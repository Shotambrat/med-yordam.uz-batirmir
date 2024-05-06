import { useState } from 'react';
import Image from 'next/image';

const Card = ({ id, title, items, imageSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div id={id} className={`relative h-auto w-full rounded-lg bg-contactsBg flex p-2 md:p-4 mb-10 ${isOpen ? 'h-auto' : 'h-[160px] md:h-[230px]'} transition-all`}>
      <div className="h-full w-1/4 md:w-1/6 flex items-center justify-center transition-all mr-2">
        <Image
          src={imageSrc}
          width={300}
          height={300}
          alt="Bakalavr"
          className='w-[70px] h-[70px] transition-all'
        />
      </div>
      <div className={`w-2/3 ${isOpen ? 'h-auto' : 'max-h-[160px] md:max-h-[230px] overflow-y-hidden'} transition-all`}>
        <div className="md:ml-4 ml-2 transition-all">
          <h2 className="text-2xl font-bold my-2 md:my-4">
            {title}
          </h2>
          <ul style={{ paddingLeft: "20px" }} className={`list-disc ${isOpen ? 'h-auto md:mb-8' : 'max-h-[0px] md:max-h-[80px] overflow-y-hidden md:mb-0 mb-2'} transition-all duration-500`}>
            {items.map((item, index) => (
              <li key={index} className="text-sm md:text-lg mb-4 whitespace-pre-line">
                {item.replace(/<br\s*\/?>/gi, '\n')}
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full flex justify-end'>
        <button
          onClick={toggleOpen}
          className="md:absolute relative  md:right-4 md:bottom-4 bg-showButton h-8 border-none text-white px-4 rounded-md z-10"
        >
          {isOpen ? 'Скрыть' : 'Показать всё'}
        </button>
        </div>
      </div>
    </div>
  );
};

export default Card;