import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`;

export const Container = styled.div`
  display: ${(props) => (props.welcome ? "flex" : "default")};
  height: ${(props) => (props.welcome ? "90vh" : "100vh")};
  justify-content: ${(props) => (props.welcome ? "center" : "auto")};
  background-image: url(${(props) => props.bg});
  background: ${(props) => (props.welcome ? "none" : "default")};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
    props.active ? "salmon" : "rgba(255, 255, 255, 0.5)"};
`;

export const Boton = styled.button`
  margin-top: 10px;
  width: 49%;
  padding: 25px;
  font-size: 1.5rem;
`;
