import { useContext } from 'react'
import { TransactionsContext } from '../context/Transactions'
import { TRANSACTION_ACTIONS } from '../context/Transactions/actions'

export function useTransactions () {
  const { state, dispatch } = useContext(TransactionsContext)

  const getCurrentBalance = () => parseFloat(state.currentBalance).toFixed(2)
  const getTransactions = () => state.transactions

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
    dispatch({
      type: TRANSACTION_ACTIONS.CREATE,
      payload: {
        id: title,
        title,
        description,
        amount,
        type,
        date: new Date().toLocaleDateString()
      }
    })
  }

  return { getCurrentBalance, getTransactions, createTransaction, computeBalance }
}
