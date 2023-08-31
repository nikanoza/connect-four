import { useState } from "react";
import { Link } from "@tanstack/react-router";

import { Check, Logo, VsPlayer } from "../svg";

const Start = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center px-5 py-24">
      {!showModal ? (
        <div className="flex flex-col items-center border-[3px] rounded-[40px] border-transparent border-solid md:shadow-panel-shadow md:px-10 md:py-16 md:border-night">
          <Logo />
          <Link
            to="/game"
            className="py-3 pl-5 pr-4 flex justify-center  border-night border-solid items-center gap-9 md:gap-24 bg-yellow border-2 shadow-panel-shadow 2xl:hover:shadow-hover-shadow rounded-3xl mt-20"
          >
            <h3 className="text-night text-2xl font-bold">PLAY VS PLAYER</h3>
            <VsPlayer />
          </Link>
          <button
            className="w-85 md:w-full py-5 pl-5 pr-4 bg-light border-2 border-night border-solid shadow-panel-shadow 2xl:hover:shadow-hover-shadow rounded-3xl mt-8"
            onClick={openModal}
          >
            <h3 className="text-night text-left text-2xl font-bold">
              GAME RULES
            </h3>
          </button>
        </div>
      ) : (
        <div className="flex flex-col max-w-[480px]">
          <div className="shadow-panel-shadow rounded-3xl bg-light pt-8 px-9 pb-14">
            <h1 className="text-night text-center text-[56px]">RULES</h1>
            <h2 className="text-semi-violet text-xl font-bold mt-7">
              OBJECTIVE
            </h2>
            <p className="mt-6 text-night text-base font-medium opacity-70">
              Be the first player to connect 4 of the same colored discs in a
              row (either vertically, horizontally, or diagonally).
            </p>
            <h2 className="text-semi-violet text-xl font-bold mt-8">
              HOW TO PLAY
            </h2>
            <div className="flex gap-5 mt-4">
              <h3 className="text-night text-base font-bold">1</h3>
              <p className="text-night text-base font-medium opacity-70">
                Red goes first in the first game.
              </p>
            </div>
            <div className="flex gap-5 mt-3">
              <h3 className="text-night text-base font-bold">2</h3>
              <p className="text-night text-base font-medium opacity-70">
                Players must alternate turns, and only one disc can be dropped
                in each turn.
              </p>
            </div>
            <div className="flex gap-5 mt-3">
              <h3 className="text-night text-base font-bold">3</h3>
              <p className="text-night text-base font-medium opacity-70">
                The game ends when there is a 4-in-a-row or a stalemate.
              </p>
            </div>
            <div className="flex gap-5 mt-3">
              <h3 className="text-night text-base font-bold">4</h3>
              <p className="text-night text-base font-medium opacity-70">
                The starter of the previous game goes second on the next game.
              </p>
            </div>
          </div>
          <div className="m-auto -mt-8 cursor-pointer" onClick={closeModal}>
            <Check />
          </div>
        </div>
      )}
    </div>
  );
};

export default Start;
