import styles from './select.module.scss'

export function Select ({ value, onChange, options }) {
  return (
    <select
      value={value}
      className={styles.select}
      onChange={onChange}
    >
      { options.map(({ optionValue, text }) => {
        return (
          <option key={optionValue} value={optionValue}>
            {text}
          </option>
        )
      })}
    </select>
  )
}
