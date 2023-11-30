const ColorChanger = ({ state }) => {
  const styles = { backgroundColor: state.color };
  return (
    <div
      style={styles}
      className="border-double border-4 border-sky-500 w-96 flex justify-center items-center h-64 text-white font-bold "
    >
      Btn {state.index} is clicked!
    </div>
  );
};

export default ColorChanger;
