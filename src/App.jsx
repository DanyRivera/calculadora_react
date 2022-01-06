import styled from "@emotion/styled";
import OperacionProvider from "./context/OperacionContext";
import Calculadora from "./components/Calculadora";

const Contenedor = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {

  return (

    <OperacionProvider>

      <Contenedor>

        <Calculadora />

      </Contenedor>

    </OperacionProvider>
  )
}

export default App
