import styles from './Display.module.css'
const Display=({value})=>{
  return (
    <input type="text" id='display' className={styles.display} value={value} readOnly />
  )
}

export default Display;