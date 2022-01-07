import {
    DEFINIR_OPERACION,
    RESETEAR_CALCULADORA,
    MOSTRAR_RESULTADO
} from "../types";

export default (state, action) => {

    switch (action.type) {

        case DEFINIR_OPERACION:
            return {
                ...state,
                operacion: state.operacion.concat(action.payload),
            }

        case MOSTRAR_RESULTADO:
            return {
                ...state,
                resultado: action.payload
            }


        case RESETEAR_CALCULADORA:
            return {
                ...state,
                operacion: '',
                resultado: null
            }

        default:
            return state;
    }

}