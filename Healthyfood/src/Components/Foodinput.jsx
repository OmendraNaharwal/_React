import styles from './Foodinput.module.css';

const Foodinput = ({ handleKeyDown }) => {
  return (
    <div>
      <input type="text" className={styles.input} placeholder='Enter food item'
      onKeyDown={handleKeyDown} />
    </div>
  )
}
export default Foodinput;