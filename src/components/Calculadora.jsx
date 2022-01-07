import styled from "@emotion/styled";
import Resultado from "./Resultado";
import BotonesCalculadora from "./BotonesCalculadora";

const ContenedorCalculadora = styled.div`
  width: 80%;
  height: 50%;
  padding: 20px 20px 135px 20px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, .2); 
  backdrop-filter: blur( 20px );
  box-shadow: 0 2.5px 18px #0000005e;

  @media (min-width: 480px) {
    width: 40%;
  }

  @media (min-width: 876px) {
    width: 30%;
  }

  @media (min-width: 1230px) {
    width: 23%;
  }

`;

const Calculadora = () => {
  return (
    <ContenedorCalculadora>

        <div>
          <Resultado />
        </div>

        <BotonesCalculadora />

    </ContenedorCalculadora>
  )
}

export default Calculadora
