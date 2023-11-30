import { useState } from "react";
import { Buttons } from "../components/Buttons";
import ColorChanger from "../components/ColorChanger";

const HomePage = () => {
  const colorArr = ["red", "green", "orange", "blue", "pink", "brown", "cyan"];

  const [state, setState] = useState({
    color: "red",
    index: "1",
  });

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-20">
      <ColorChanger state={state} setState={setState} />
      <Buttons colorArr={colorArr} setState={setState} />
    </div>
  );
};

export default HomePage;
