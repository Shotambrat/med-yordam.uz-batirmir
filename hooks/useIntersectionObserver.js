import { useEffect } from 'react';

const useIntersectionObserver = (menuItems) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const menuItem = document.querySelector(`li[data-id='${entry.target.id}']`);
    
              // Проверяем пересечение сверху
              if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
                menuItems.forEach((items) => {
                  const item = document.querySelector(`li[data-id='${items.id}']`);
                  if (item) item.classList.remove('active');
                });
                menuItem.classList.add('active');
              }
            });
          },
          {
            root: null,
            rootMargin: '0px 0px -100% 0px', // Верхнее пересечение
            threshold: 0, // Уровень пересечения секции
          }
        );
    
        // Наблюдаем за всеми секциями
        menuItems.forEach((item) => {
            let id = item.id
          const section = document.getElementById(id);
          if (section) observer.observe(section);
        });
    
        return () => {
          menuItems.forEach((item) => {
            let id = item.id
            const section = document.getElementById(id);
            if (section) observer.unobserve(section);
          });
        };
      }, [menuItems]);
};

export default useIntersectionObserver;