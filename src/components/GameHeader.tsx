import { Logo } from "../svg";

const GameHeader = () => {
  return (
    <div className="flex justify-center items-center gap-10">
      <button className="border-none w-27 h-10 bg-dark-violet cursor-pointer text-light text-base font-bold rounded-[20px]">
        MENU
      </button>
      <Logo />
      <button className="border-none w-27 h-10 bg-dark-violet cursor-pointer text-light text-base font-bold rounded-[20px]">
        RESTART
      </button>
    </div>
  );
};

export default GameHeader;
