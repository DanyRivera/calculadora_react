import { createContext, useState, useEffect } from "react";

export const OperacionContext = createContext();

const OperacionProvider = props => {

    const [operacion, setOperacion] = useState([]);
    const [operacionInterfaz, setOperacionInterfaz] = useState('');

    useEffect(() => {

        //Une el arreglo en un string
        setOperacionInterfaz(operacion.join(''));

    }, [operacion])

    return (
        <OperacionContext.Provider
            value={{
                operacion,
                operacionInterfaz,
                setOperacion
            }}
        >
            {props.children}
        </OperacionContext.Provider>
    )
}

export default OperacionProvider;