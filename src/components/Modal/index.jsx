import { useModal } from '@/hooks/useModal'

import { Button } from '@/components/Button'

import styles from './modal.module.scss'

export function Modal ({ children }) {
  const { handlers } = useModal()

  return (
    <div className={styles.modal}>

      <div className={styles.buttonWrapper}>
        <Button secondary handleClick={handlers.close}>
          Cerrar
        </Button>
      </div>

      <>
        { children }
      </>
    </div>
  )
}
