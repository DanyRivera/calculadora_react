import styled from "@emotion/styled";

const Contenedor = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Calculadora = styled.div`
  width: 35%;
  padding: 50px;
  position: absolute;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, .2); 
  backdrop-filter: blur( 20px );
  box-shadow: 0 2.5px 18px #0000005e;
`;

const ContenidoCalculadora = styled.div`
  display: grid;
  grid: repeat(4, 1fr) / repeat(4, 1fr);
`;

const Numeros = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column: 1 / 4;
  grid-row: 1 / 5;
`;

const Acciones = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-row: 1 / 5;

/* 
  button[type="submit"] {
    grid-row: 4 / 7;
  }  */

`;

function App() {

  return (
    <Contenedor>

      <Calculadora>

        <div>
          Resultado / Operacion
        </div>

        <ContenidoCalculadora>

          <Numeros>

            <button>
              1
            </button>

            <button>
              1
            </button>

            <button>
              1
            </button>

            <button>
              1
            </button>

            <button>
              1
            </button>

            <button>
              1
            </button>

            <button>
              1
            </button>

            <button>
              1
            </button>

            <button>
              1
            </button>

            <button>
              1
            </button>

            <button>
              1
            </button>

          </Numeros>

          <Acciones>

            <button>
              -
            </button>

            <button>
              *
            </button>

            <button>
              /
            </button>

            <button type="submit">
              +
            </button>

            <button>
              =
            </button>

          </Acciones>

        </ContenidoCalculadora>

      </Calculadora>

    </Contenedor>
  )
}

export default App
