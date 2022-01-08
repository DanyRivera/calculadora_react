import { useState, useEffect } from "react"

const useOperacion = operacion => {

    const [state, setState] = useState(0);

    //Lógica para calcular el resultado // alt + 246 -- alt + 158 
    const CalcularResultado = () => {

        //Lógica para fomatear la operacion(string) por * y /
        let formatOperacion;

        formatOperacion = operacion.replace('÷','/') 
        formatOperacion = formatOperacion.replace('×','*');

        const total = eval(formatOperacion);
        
        //Evaluar el resultado para ver si es necesario redondear o es igual a cero
        if(total.toString().includes('.') || total === 0) {

            setState(total.toFixed(3));

        } else {

            setState(total);

        }

    }

    //Limpiar el state
    const ResetResultado = () => {

        setState(0);

    }

    return [state, CalcularResultado, ResetResultado]
}

export default useOperacion;



