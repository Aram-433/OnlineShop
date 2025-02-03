import styles from "./singleProduct.module.css";
import { addClickedItem } from "../../../../Store/slices/CartData/cartDataSlice";
import { useDispatch } from "react-redux";

function SingleProduct(props) {
  const dispatch = useDispatch();
  return (
    <div className={styles.singleProduct}>
      <img src={props.thumbnail} className={styles.image} />
      <h2>Title:{props.title}</h2>
      <h3>Category:{props.category}</h3>
      <p>Price : {props.price} $</p>
      <button
        className={styles.order}
        onClick={() => dispatch(addClickedItem(props))}
      >
        Order
      </button>
    </div>
  );
}

export default SingleProduct;
