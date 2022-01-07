import { useContext } from "react";
import styled from "@emotion/styled";
import OperacionContext from "../context/OperacionContext";

const ContenidoResultado = styled.input`
    width: 100%;
    margin-bottom: 20px;
    background-color: transparent;
    border: none;
    outline: none; 
    font-size: 80px;
    letter-spacing: 5px;
`;

const Resultado = () => {

    const { operacion, resultado } = useContext(OperacionContext)

    return (
        <ContenidoResultado 
            type="text" 
            defaultValue={ resultado ? resultado : operacion }
            disabled
        />
    )
}

export default Resultado
