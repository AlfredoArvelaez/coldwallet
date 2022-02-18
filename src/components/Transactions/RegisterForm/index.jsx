import { useState } from 'react'

import { useModal } from '@/hooks/useModal'
import { useTransactions } from '@/hooks/useTransactions'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Select } from '@/components/Select'

import { selectOptions } from './selectOptions'
import { TRANSACTION_TYPES } from '@/context/Transactions/types'

import styles from './registerForm.module.scss'

export function RegisterTransactionForm () {
  const { handlers } = useModal()
  const { createTransaction, computeBalance } = useTransactions()

  // FORM FIELDS
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState(TRANSACTION_TYPES.INGRESO)

  // ERROR AND VALIDATING
  const haveErrors = (formData) => {
    if (Object.values(formData).some(value => value === '')) {
      setError(true)
      return true
    }
  }
  const [error, setError] = useState(false)

  const handleSubmit = evt => {
    evt.preventDefault()

    const transactionData = { title, description, amount, type }

    if (haveErrors(transactionData)) { return }

    // Always is OK
    createTransaction(transactionData)
    computeBalance(type, amount)
    handlers.close()
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h3>Nueva transacci&oacute;n</h3>
        <h5 className={styles.subtitle}>A&ntilde;ade un nuevo registro a tu billetera</h5>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label='T&iacute;tulo'
          name='title'
          onChange={evt => setTitle(evt.target.value)}
          placeholder='Ida a la tienda'
          type='text'
          value={title}
        />

        <Input
          label='Descripci&oacute;n'
          name='description'
          onChange={evt => setDescription(evt.target.value)}
          placeholder='Snacks y Coca-Cola'
          type='text'
          value={description}
        />

        <div className={styles.amountGroup}>
          <Input
            label='Monto'
            name='amount'
            onChange={evt => setAmount(evt.target.value)}
            placeholder='$10.00'
            type='number'
            value={amount}
          />

          <Select
            onChange={evt => setType(evt.target.value)}
            options={selectOptions}
            value={type}
          />
        </div>

        <Button primary>
          Registrar
        </Button>

        { error && <small className={styles.error}>Todos los campos son requeridos!!!</small>}
      </form>
    </div>
  )
}
