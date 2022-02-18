import { useModal } from '@/hooks/useModal'
import styles from './appLayout.module.scss'

export function AppLayout ({ children }) {
  const { active } = useModal()

  return (
    <div className={`${styles.app} ${active && styles.modalActive}` } >
      { children }
    </div>
  )
}
