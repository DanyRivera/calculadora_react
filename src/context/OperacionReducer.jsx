import {
    DEFINIR_OPERACION,
    MOSTRAR_OPERACION,
    RESETEAR_CALCULADORA
} from "../types";

export default (state, action) => {

    switch (action.type) {

        case DEFINIR_OPERACION:
            return {
                ...state,
                operacion: [...state.operacion, action.payload]
            }

        case MOSTRAR_OPERACION:
            return {
                ...state,
                operacionInterfaz: state.operacion.join('')
            }

        case RESETEAR_CALCULADORA:
            return {
                ...state,
                operacion: []
            }


        default:
            return state;
    }

}