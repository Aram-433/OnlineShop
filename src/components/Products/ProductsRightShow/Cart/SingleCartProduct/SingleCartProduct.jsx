import styles from "./singleCart.module.css";
import { useDispatch } from "react-redux";
import {
  addItemPlus,
  minusItem,
} from "../../../../../Store/slices/CartData/cartDataSlice";

function SingleCartProduct(props) {
  const dispatch = useDispatch();
  return (
    <div className={styles.main}>
      <h3>{props.title}</h3>
      <img src={props.thumbnail} />
      <p>{props.count}</p>
      <div className={styles.buttons}>
        <i
          className="bi bi-dash"
          onClick={() => dispatch(minusItem(props.id))}
        ></i>
        <p>{(props.price * props.count).toFixed(2)} $</p>
        <i
          className="bi bi-plus-lg"
          onClick={() => dispatch(addItemPlus(props.id))}
        ></i>
      </div>
    </div>
  );
}

export default SingleCartProduct;
