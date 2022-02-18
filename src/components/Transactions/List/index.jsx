import { TransactionItem } from '@/components/Transactions/Item'
import { useTransactions } from '@/hooks/useTransactions'

import styles from './transactionsList.module.scss'

export function TransactionsList ({ filter }) {
  const { getTransactions } = useTransactions()

  return (
    <ul className={styles.transactionsList}>
      { getTransactions(filter).map(({ id, title, description, amount, type, date }) => {
        return (
          <TransactionItem
            key={id}
            title={title}
            description={description}
            amount={parseFloat(amount).toFixed(2)}
            type={type}
            date={date}
          />
        )
      })}
      </ul>
  )
}
