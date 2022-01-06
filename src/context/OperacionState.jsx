import { useReducer } from 'react';
import OperacionContext from './OperacionContext';
import OperacionReducer from './OperacionReducer';
import { 
    DEFINIR_OPERACION, 
    MOSTRAR_OPERACION, 
    RESETEAR_CALCULADORA 
} from '../types';

const OperacionState = props => {

    const initialState = {
        operacion: [],
        operacionInterfaz: ''
    }

    const [state, dispatch] = useReducer(OperacionReducer, initialState);

    //funciones que modifican el state
    const setOperacion = (value) => {
        dispatch({
            type: DEFINIR_OPERACION,
            payload: value
        })
    }

    const setOperacionInterfaz = () => {
        dispatch({
            type: MOSTRAR_OPERACION,
        })
    }

    const reset = () => {
        dispatch({
            type: RESETEAR_CALCULADORA,
        })
    }


    return (
        <OperacionContext.Provider
            value={{
                operacion: state.operacion,
                operacionInterfaz: state.operacionInterfaz,
                setOperacion,
                setOperacionInterfaz,
                reset
            }}
        >
            {props.children}
        </OperacionContext.Provider>
    )
}

export default OperacionState
