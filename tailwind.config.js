/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        modalBlue: "rgba(20, 86, 211, 1)",
        buttonColor: "#306DDE",
        inputBg: "rgba(217, 217, 217, 0.13)",
        aboutBgStart: "#81B1FE",
        aboutBgEnd: "#1052D1",
        showButton: "#97B6EC",
        contactsBg: "#EFF2F7",
      },
      height: {
        'screen-minus-60': 'calc(100vh - 60px)', // Создает новый класс `h-screen-minus-60`
        'screen-minus-350': 'calc(100vh - 350px)', //для карты
      },
      scale: {
        '-1': '-1',  // Добавляет возможность использовать `scale-x-[-1]` и `scale-y-[-1]`
      }
    },
  },
  plugins: [],
};
