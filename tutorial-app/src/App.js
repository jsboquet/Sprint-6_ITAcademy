import React, { useState } from "react";
import Escena from "./components/escena/Escena";
import textos from "./assets/textos";
import Welcome from "./components/welcome/Welcome";
import { Container, Boton } from "./components/styled/styled";

function App() {
  /* Exercici 4 */
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

  /* Exercici 5 */
  const [start, setStart] = useState(true);
  function startApp() {
    setStart(false);
  }

  return (
    <Container welcome={start}>
      {start ? (
        <Welcome>
          <button onClick={startApp}>Començar!</button>
        </Welcome>
      ) : (
        <>
          <Boton onClick={decrementCount}>Anterior</Boton>
          <Boton onClick={incrementCount}>Següent</Boton>
          {textos.map((text, index) =>
            index === current ? (
              <Escena content={text} key={index} active />
            ) : (
              <Escena content={text} key={index} />
            )
          )}
        </>
      )}
    </Container>
  );
}

export default App;
