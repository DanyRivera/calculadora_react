import { useContext, useEffect } from "react";
import styled from "@emotion/styled";
import useOperacion from "../hooks/useOperacion";
import OperacionContext from "../context/OperacionContext";

const ContenidoCalculadora = styled.div`
  display: grid;
  grid-template: repeat(5, 1fr) / repeat(4, 1fr);
  gap: 10px;
  height: 100%;

  button {
    font-size: 35px;
    outline: none;
    background-color: #cccccc;
    color: #fff;
    border: none;
    transition: all .3s ease;

    &:hover {
        cursor: pointer;
        background-color:#b1b1b1;
    }

    @media (min-width: 876px) {
      font-size: 25px;
    }
  }
`;

const ZeroBtn = styled.button`
  grid-column: 1 / 3;
`;

const ResetBtn = styled.button`
  grid-column: 1 / 4;
  background-color: #eb707e !important;

  &:hover {
        background-color:#fa4055 !important;
    }
`;

const PlusBtn = styled.button`
  grid-column: 4 / 5;
  grid-row: 4 / 6;
  background-color: #6abbf8 !important;

  &:hover {
        background-color:#46a5ee !important;
    }
`;

const EqualBtn = styled.button`
  background-color: #4aeb97 !important;

  &:hover {
        background-color:#03c762 !important;
    }
`;

const BotonesCalculadora = () => {

    const { setOperacion, setResultado, reset, operacion } = useContext(OperacionContext);

    //Custom Hook
    const [resultado, CalcularResultado] = useOperacion(operacion);

    useEffect(() => {

        setResultado(resultado);

    }, [resultado])

    const handleClick = value => {

        if (value == 'reset') {
            reset();
            return;
        }

        setOperacion(value);
    }

    const handleSubmit = () => {
        CalcularResultado();
    }

    return (
        <ContenidoCalculadora>

            <ResetBtn
                value="reset"
                onClick={e => handleClick(e.target.value)}
            >
                C
            </ResetBtn>

            <button
                value="÷"
                onClick={e => handleClick(e.target.value)}
            >
                &divide;
            </button>

            {[1, 2, 3].map(numero => (
                <button
                    key={numero}
                    value={numero}
                    onClick={e => handleClick(e.target.value)}
                >
                    {numero}
                </button>
            ))}

            <button
                value="×"
                onClick={e => handleClick(e.target.value)}
            >
                &times;
            </button>

            {[4, 5, 6].map(numero => (
                <button
                    key={numero}
                    value={numero}
                    onClick={e => handleClick(e.target.value)}
                >
                    {numero}
                </button>
            ))}

            <button
                value="-"
                onClick={e => handleClick(e.target.value)}
            >
                &minus;
            </button>

            {[7, 8, 9].map(numero => (
                <button
                    key={numero}
                    value={numero}
                    onClick={e => handleClick(e.target.value)}
                >
                    {numero}
                </button>
            ))}

            <PlusBtn
                value="+"
                onClick={e => handleClick(e.target.value)}
            >
                +
            </PlusBtn>

            <ZeroBtn
                value={0}
                onClick={e => handleClick(e.target.value)}
            >
                0
            </ZeroBtn>

            <EqualBtn
                onClick={() => handleSubmit()}
            >
                =
            </EqualBtn>

        </ContenidoCalculadora>
    )
}

export default BotonesCalculadora
