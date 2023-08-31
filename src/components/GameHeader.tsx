import { Logo } from "../svg";

type PropsType = {
  setPause: React.Dispatch<React.SetStateAction<boolean>>;
  restart: () => void;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
};

const GameHeader: React.FC<PropsType> = ({ setPause, restart, setTimer }) => {
  return (
    <div className="flex justify-center items-center gap-10 md:gap-[200px] 2xl:gap-52">
      <button
        onClick={() => setPause(true)}
        className="border-none w-27 h-10 bg-dark-violet cursor-pointer text-light text-base font-bold rounded-[20px]"
      >
        MENU
      </button>
      <Logo />
      <button
        onClick={() => {
          restart();
          setTimer(30);
          setPause(false);
        }}
        className="border-none w-27 h-10 bg-dark-violet cursor-pointer text-light text-base font-bold rounded-[20px]"
      >
        RESTART
      </button>
    </div>
  );
};

export default GameHeader;
