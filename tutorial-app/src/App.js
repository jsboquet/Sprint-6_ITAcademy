import React, { useState } from "react";
import Escena from "./components/escena/Escena";
import textos from "./assets/textos";
import { Container, Boton } from "./components/styled/styled";

function App() {
  const [current, setCurrent] = useState(0);

  function decrementCount() {
    setCurrent((prevCount) =>
      prevCount - 1 < 0 ? textos.length - 1 : prevCount - 1
    );
  }

  function incrementCount() {
    setCurrent((prevCount) =>
      prevCount + 1 > textos.length - 1 ? 0 : prevCount + 1
    );
  }

  return (
    <Container>
      <Boton onClick={decrementCount}>Anterior</Boton>
      <Boton onClick={incrementCount}>Següent</Boton>
      {textos.map((text, index) =>
        index === current ? (
          <Escena content={text} key={index} active />
        ) : (
          <Escena content={text} key={index} />
        )
      )}
    </Container>
  );
}

export default App;
