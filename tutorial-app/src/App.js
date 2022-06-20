import React from "react";
import Escena from "./components/escena/Escena";
import textos from "./assets/textos";

function App() {
  return (
    <div>
      {textos.map((text, index) => (
        <Escena content={text} key={index} />
      ))}
    </div>
  );
}

export default App;
