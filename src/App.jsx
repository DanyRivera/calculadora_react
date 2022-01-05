import styled from "@emotion/styled";

const Contenedor = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Calculadora = styled.div`
  width: 20%;
  height: 50%;
  padding: 20px;
  position: absolute;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, .2); 
  backdrop-filter: blur( 20px );
  box-shadow: 0 2.5px 18px #0000005e;
`;

const ContenidoCalculadora = styled.div`
  display: grid;
  height: 100%;
  grid-template: repeat(5, 1fr) / repeat(4, 1fr);
  gap: 10px;
`;

const ResetBtn = styled.button`
  grid-column: 1 / 4;
`;

const PlusBtn = styled.button`
  grid-column: 4 / 5;
  grid-row: 4 / 6;
`;

const ZeroBtn = styled.button`
  grid-column: 1 / 3;
`;
function App() {

  return (
    <Contenedor>

      <Calculadora>

        {/* Resultado */}

        <ContenidoCalculadora>
          <ResetBtn>C</ResetBtn>
          <button>&divide;</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>&times;</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>&minus;</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <PlusBtn>+</PlusBtn>
          <ZeroBtn>0</ZeroBtn>
          <button>=</button>
        </ContenidoCalculadora>

      </Calculadora>

    </Contenedor>
  )
}

export default App
