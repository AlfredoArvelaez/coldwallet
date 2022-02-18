import { useState } from 'react'
import { useModal } from '@/hooks/useModal'

import { Button } from '@/components/Button'
import { TransactionsList } from '@/components/Transactions/List'

import styles from './section.module.scss'
import { Select } from '@/components/Select'

const filterOptions = [
  {
    optionValue: 'Ingresos',
    text: 'Ingresos'
  },

  {
    optionValue: 'Gastos',
    text: 'Gastos'
  },

  {
    optionValue: 'Todos',
    text: 'Todos'
  }
]

export function Section () {
  const { handlers } = useModal()
  const [transactionsFilter, setTransactionsFilter] = useState('Todos')

  return (
    <section className={styles.section}>

      <header className={styles.header}>
        <h4>Historial</h4>

        <Select
          options={filterOptions}
          value={transactionsFilter}
          onChange={evt => setTransactionsFilter(evt.target.value)}
        />
      </header>

      <div className={styles.buttonWrapper}>
        <Button handleClick={handlers.open} primary>
          Registrar
        </Button>
      </div>

      <TransactionsList filter={transactionsFilter} />

    </section>
  )
}
