import styles from './transactionItem.module.scss'

export function TransactionItem ({ title, description, amount, type, date }) {
  return (
    <li className={styles.item}>

      <header className={styles.itemHeader}>
        <h5 className={styles.itemTitle}>
          {title}
        </h5>
      </header>

      <div className={`${styles.amount} ${styles[type]}`}>
        { type === 'Gasto' ? `- $${amount}` : `+ $${amount}`}
      </div>

      <div className={styles.itemDescription}>
        <p>{description}</p>
      </div>

      <span className={styles.itemDate}>
        {date}
      </span>
    </li>)
}
