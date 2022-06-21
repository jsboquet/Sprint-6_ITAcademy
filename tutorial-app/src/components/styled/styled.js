import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`;

export const Container = styled.div`
  display: ${(props) => (props.welcome ? "flex" : "default")};
  height: ${(props) => (props.welcome ? "90vh" : "auto")};
  justify-content: ${(props) => (props.welcome ? "center" : "auto")};
  flex-flow: column;
  width: 100vw;
  text-align: center;
`;

export const PillDiv = styled.div`
  margin: 15px 10px 0px 10px;
  padding: 15px;
  text-align: center;
  border: 3px solid black;
  border-radius: 500px;
  background-color: ${(props) =>
    props.active ? "salmon" : "rbga(255, 255, 255, 0.6)"};
`;

export const Boton = styled.button`
  margin-top: 10px;
  width: 49%;
  padding: 25px;
  font-size: 1.5rem;
`;
