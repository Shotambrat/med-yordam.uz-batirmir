import Image from "next/image";

export default function SuccessModal() {
  return (
    <div
      style={{
        background: "linear-gradient(to left, #1758D4, #578EED)",
      }}
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[9999]"
    >
      <div className="flex flex-col items-center">
        <p className="text-center w-3/4 text-2xl font-semibold text-white mb-8">
          Вы успешно записались на приём
        </p>
        <Image
          src="/img/succesIcon.svg"
          width={400}
          height={400}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
