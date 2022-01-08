import { useReducer } from 'react';
import OperacionContext from './OperacionContext';
import OperacionReducer from './OperacionReducer';
import { 
    DEFINIR_OPERACION, 
    RESETEAR_CALCULADORA,
    RESETEAR_OPERACION,
    MOSTRAR_RESULTADO 
} from '../types';

const OperacionState = props => {

    const initialState = {
        operacion: '',
        resultado: null
    }

    const [state, dispatch] = useReducer(OperacionReducer, initialState);

    //funciones que modifican el state
    const setOperacion = value => {
        dispatch({
            type: DEFINIR_OPERACION,
            payload: value
        })
    }

    const setResultado = resultado => {
        dispatch({
            type: MOSTRAR_RESULTADO,
            payload: resultado
        })
    }

    const resetOperacion = obj => {
        dispatch({
            type: RESETEAR_OPERACION,
            payload: obj
        })
    }

    const reset = () => {
        dispatch({
            type: RESETEAR_CALCULADORA
        })
    }

    return (
        <OperacionContext.Provider
            value={{
                operacion: state.operacion,
                resultado: state.resultado,
                setOperacion,
                setResultado,
                resetOperacion,
                reset
            }}
        >
            {props.children}
        </OperacionContext.Provider>
    )
}

export default OperacionState
