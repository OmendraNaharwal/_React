import styles from './Container.module.css';

const Item = (props) => {
  const { foodItem } = props;
  return (
    <li className="list-group-item kg-item">
      {foodItem}
      <button className={` ${styles.button} btn btn-success`}
      onClick={() => console.log("Buy button clicked.")}
      >Buy</button>
    </li>
  );
};

export default Item;