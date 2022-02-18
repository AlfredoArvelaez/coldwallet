import styles from './input.module.scss'

export function Input ({ label, type, name, placeholder, onChange, value }) {
  return (
    <div className={styles.div}>
      <label className={styles.label}>{label}</label>
      <input
        autoComplete='off'
        className={styles.input}
        inputMode='numeric'
        min='0'
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        step='0.01'
        type={type}
        value={value}
      />
    </div>
  )
}
