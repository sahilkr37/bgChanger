import { useState } from "react";
import "./App.css";
import ColorButton from "./ColorButton";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}></div>
      <div className="fixed flex flex-wrap  bottom-5 justify-center inset-x-0 h-1/5 w-auto p-5">
        <div className="flex flex-wrap justify-center self-center gap-3 bg-white p-5 rounded-2xl">
          <ColorButton colorName="red" setColor={setColor} />
          <ColorButton colorName="blue" setColor={setColor} />
          <ColorButton colorName="yellow" setColor={setColor} />
          <ColorButton colorName="white" setColor={setColor} />
          <ColorButton colorName="green" setColor={setColor} />
        </div>
      </div>
    </>
  );
}

export default App;
