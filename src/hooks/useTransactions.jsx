import { useContext } from 'react'
import { TransactionsContext } from '@/context/Transactions'
import { TRANSACTION_ACTIONS } from '@/context/Transactions/actions'
import { TRANSACTION_TYPES } from '@/context/Transactions/types'

export function useTransactions () {
  const { state, dispatch } = useContext(TransactionsContext)

  const getCurrentBalance = () => parseFloat(state.currentBalance).toFixed(2)
  const getTransactions = (filter) => {
    if (filter === TRANSACTION_TYPES.TODOS) {
      return [...state.ingresos, ...state.gastos]
    }

    if (filter === 'Ingresos') {
      return [...state.ingresos]
    }

    if (filter === 'Gastos') {
      return [...state.gastos]
    }
  }

  const computeBalance = (type, amount) => {
    if (type === 'Ingreso') {
      dispatch({
        type: TRANSACTION_ACTIONS.COMPUTE_BALANCE,
        payload: Number(state.currentBalance) + Number(amount)
      })
    }

    if (type === 'Gasto') {
      dispatch({
        type: TRANSACTION_ACTIONS.COMPUTE_BALANCE,
        payload: Number(state.currentBalance) - Number(amount)
      })
    }
  }

  const createTransaction = ({ title, description, amount, type }) => {
    const transactionData = {
      id: title,
      title,
      description,
      amount,
      type,
      date: new Date().toLocaleDateString()
    }

    if (type === TRANSACTION_TYPES.INGRESO) {
      dispatch({
        type: TRANSACTION_ACTIONS.CREATE_INGRESO,
        payload: { ...transactionData }
      })
    }

    if (type === TRANSACTION_TYPES.GASTO) {
      dispatch({
        type: TRANSACTION_ACTIONS.CREATE_GASTO,
        payload: { ...transactionData }
      })
    }
  }

  return {
    getCurrentBalance,
    getTransactions,
    createTransaction,
    computeBalance
  }
}
