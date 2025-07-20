/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
/* tslint:disable */
import React, {useState, useRef} from 'react';

const App: React.FC = () => {
  const [isYesPressed, setIsYesPressed] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNoHover = () => {
    if (noButtonRef.current && containerRef.current) {
      const button = noButtonRef.current;
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      // Memastikan tombol tetap berada dalam batas container
      const maxX = containerRect.width - buttonRect.width - 20; // buffer 20px
      const maxY = containerRect.height - buttonRect.height - 20; // buffer 20px

      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;

      // Menerapkan style untuk memindahkan tombol
      button.style.position = 'absolute';
      button.style.left = `${newX}px`;
      button.style.top = `${newY}px`;
      button.style.transition = 'top 0.3s ease, left 0.3s ease'; // Menambahkan transisi halus
    }
  };

  const handleYesClick = () => {
    setIsYesPressed(true);
  };

  return (
    <main
      ref={containerRef}
      className="flex flex-col items-center justify-center h-screen w-full bg-gray-200 p-4 font-sans relative overflow-hidden"
      aria-live="polite">
      {isYesPressed ? (
        <div className="text-center animate-fade-in">
          <img
            src="https://i.imgflip.com/65k452.gif"
            alt="Pria Spanyol yang tertawa terbahak-bahak (El Risitas)"
            className="h-56 mx-auto rounded-lg shadow-lg"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 my-6 tracking-wide">
            WKWKWKWK KETAHUAN JUGA AKHIRNYA 😂
          </h2>
        </div>
      ) : (
        <>
          <img
            src="https://media.tenor.com/r6-A9as-a-UAAAAi/disappointed-cricket-fan-disappointed.gif"
            alt="Penggemar kriket yang kecewa menatap dengan serius"
            className="h-56 rounded-lg shadow-lg"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 my-8">
            Apakah Kamu GAY?
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 h-20">
            <button
              onClick={handleYesClick}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform text-xl z-10"
              aria-label="Iya, saya gay">
              IYA
            </button>
            <button
              ref={noButtonRef}
              onMouseOver={handleNoHover}
              onClick={handleNoHover} // Juga bergerak saat dicoba diklik
              className="bg-red-500 text-white font-bold py-3 px-8 rounded-full shadow-lg text-xl"
              aria-label="Tidak, saya tidak gay"
              style={{position: 'relative'}}>
              TIDAK
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default App;