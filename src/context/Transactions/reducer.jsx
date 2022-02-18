import { TRANSACTION_ACTIONS } from './actions'

export const transactionsReducer = (state, action) => {
  switch (action.type) {
    case TRANSACTION_ACTIONS.CREATE:
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
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
