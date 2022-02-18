import { useTransactions } from '@/hooks/useTransactions'
import styles from './header.module.scss'

export function Header () {
  const { getCurrentBalance } = useTransactions()

  return (
    <header className={styles.header}>
      <span className={styles.currentBalance}>Mi balance</span>
      <h3 className={styles.title}>
        <span>${getCurrentBalance()}</span>
      </h3>
    </header>
  )
}
