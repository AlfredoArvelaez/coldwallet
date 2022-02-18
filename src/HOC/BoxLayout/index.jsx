import { useModal } from '@/hooks/useModal'

import { Modal } from '@/components/Modal'
import { RegisterTransactionForm } from '@/components/Transactions/RegisterForm'

import styles from './boxLayout.module.scss'

export function BoxLayout ({ children }) {
  const { isOpen } = useModal()

  return (
    <>
      <div className={
        `${styles.boxLayout} ${isOpen && styles.modalActive}`
      }>
        { children }
      </div>

      { isOpen && <Modal><RegisterTransactionForm /></Modal>}
    </>
  )
}
