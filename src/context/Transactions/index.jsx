import { createContext, useReducer } from 'react'
import { transactionsReducer } from './reducer'

export const TransactionsContext = createContext({})

export function TransactionsProvider ({ children }) {
  const [state, dispatch] = useReducer(transactionsReducer, { transactions: [], currentBalance: 0 })

  return (
    <TransactionsContext.Provider value={{ state, dispatch }}>
      { children }
    </TransactionsContext.Provider>
  )
}
