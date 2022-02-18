import { useModal } from '@/hooks/useModal'

import { Button } from '@/components/Button'
import { TransactionsList } from '@/components/Transactions/List'

import styles from './section.module.scss'

export function Section () {
  const { handlers } = useModal()

  return (
    <section className={styles.section}>

      <header className={styles.header}>
        <h4>Historial</h4>
      </header>

      <div className={styles.buttonWrapper}>
        <Button handleClick={handlers.open} primary>
          Registrar
        </Button>
      </div>

      <TransactionsList />

    </section>
  )
}
