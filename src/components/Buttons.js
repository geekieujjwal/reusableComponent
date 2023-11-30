const Buttons = ({ colorArr, setState }) => {
  const handleBtnClick = (e) => {
    // console.log(e.target.dataset.color, e.target.dataset.index);
    setState(() => ({
      color: e.target.dataset.color,
      index: e.target.dataset.index,
    }));
  };

  return (
    <div className="flex justify-center gap-5 ">
      {colorArr.map((color, i) => {
        return (
          <button
            style={{ backgroundColor: color }}
            key={i}
            className=" border-solid border-2 border-gray-500 px-5 py-1 text-white "
            onClick={handleBtnClick}
            data-color={color}
            data-index={i + 1}
          >
            Btn {i + 1}
          </button>
        );
      })}
    </div>
  );
};

export { Buttons };
