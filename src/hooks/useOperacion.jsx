import { useState } from "react"

const useOperacion = (operacion) => {

    const [state, setState] = useState(0);

    const CalcularResultado = () => {
        //Lógica para calcular el resultado
    }

    return [state]
}

export default useOperacion
