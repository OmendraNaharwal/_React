import styles from './buttoncontainer.module.css'

const buttonContainer=()=>{

  const buttonnames = ['C', '1', '2', '+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

  return (
    <div className={styles.buttonContainer}>
      {buttonnames.map(buttonname => <button className={styles.button}>{buttonname}</button>
      )}
    </div>
  )
}

export default buttonContainer;