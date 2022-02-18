import { TRANSACTION_ACTIONS } from './actions'

export const transactionsReducer = (state, action) => {
  switch (action.type) {
    case TRANSACTION_ACTIONS.CREATE_INGRESO:
      return {
        ...state,
        ingresos: [...state.ingresos, action.payload]
      }

    case TRANSACTION_ACTIONS.CREATE_GASTO:
      return {
        ...state,
        gastos: [...state.gastos, action.payload]
      }

    case TRANSACTION_ACTIONS.COMPUTE_BALANCE:
      return {
        ...state,
        currentBalance: action.payload
      }

    default:
      return state
  }
}
