import { TRANSACTION_TYPES } from '@/context/Transactions/types'

export const selectOptions = [
  {
    optionValue: TRANSACTION_TYPES.INGRESO,
    text: 'Ingreso'
  },

  {
    optionValue: TRANSACTION_TYPES.GASTO,
    text: 'Gasto'
  }
]
