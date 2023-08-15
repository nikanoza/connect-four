const Display = () => {
  const array = [];
  array[48] = "";
  array.fill("x");
  return (
    <div className="relative px-2 pt-2 pb-8 grid grid-cols-7 gap-3 bg-light mt-12 rounded-2xl border-4 border-black shadow-panel-shadow">
      {array.map(() => (
        <div
          key={Math.random()}
          className="w-8.5 h-8.5 rounded-full bg-dark-violet border-4 border-black shadow-circle-shadow"
        ></div>
      ))}
    </div>
  );
};

export default Display;
