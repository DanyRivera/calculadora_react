import styled from "@emotion/styled";
import Calculadora from "./components/Calculadora";

//Context
import OperacionState from "./context/OperacionState";

const Contenedor = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {

  return (

    <OperacionState>

      <Contenedor>

        <Calculadora />

      </Contenedor>

    </OperacionState>

  )
}

export default App
