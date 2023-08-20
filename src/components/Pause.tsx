type PropsType = {
  setPause: React.Dispatch<React.SetStateAction<boolean>>;
  restart: () => void;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
};

const Pause: React.FC<PropsType> = ({ setPause, restart, setTimer }) => {
  return (
    <div className="fixed z-30 w-screen h-screen top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center px-5">
      <div className="w-full py-7 px-5 bg-dark-violet border-2 border-black rounded-[40px] shadow-panel-shadow">
        <h3 className="text-6xl text-light font-bold text-center">PAUSE</h3>
        <button
          onClick={() => setPause(false)}
          className="border-2 border-black w-full bg-light h-[72px] text-2xl text-night font-bold rounded-[20px] mt-7 shadow-panel-shadow"
        >
          CONTINUE GAME
        </button>
        <button
          onClick={() => {
            restart();
            setTimer(30);
            setPause(false);
          }}
          className="border-2 border-black w-full bg-light h-[72px] text-2xl text-night font-bold rounded-[20px] mt-7 shadow-panel-shadow"
        >
          RESTART
        </button>
        <button className="border-2 border-black w-full bg-pink h-[72px] text-2xl text-light font-bold rounded-[20px] mt-7 shadow-panel-shadow">
          QUIT GAME
        </button>
      </div>
    </div>
  );
};

export default Pause;
