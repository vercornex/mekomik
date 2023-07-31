"use client";

export default function FloatingButton() {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button
      className="sticky right-0 bottom-2 m-2 sm:m-8 bg-pink-500 p-2 rounded-full"
      onClick={backToTop}
    >
      Top
    </button>
  );
}
