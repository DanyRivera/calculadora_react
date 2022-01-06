import { useContext } from "react";
import styled from "@emotion/styled";
import { OperacionContext } from "../context/OperacionContext";

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

    const { operacionInterfaz } = useContext(OperacionContext);

    return (
        <ContenidoResultado 
            type="text" 
            defaultValue={operacionInterfaz}
            disabled
        />
    )
}

export default Resultado
