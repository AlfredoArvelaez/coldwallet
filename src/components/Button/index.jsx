import styles from './button.module.scss'

export function Button ({ children, handleClick, primary, secondary }) {
  return (
    <button onClick={handleClick} className={
      `
        ${styles.button}
        ${primary && styles.primary} 
        ${secondary && styles.secondary}
      `}>
      { children }
    </button>
  )
}
