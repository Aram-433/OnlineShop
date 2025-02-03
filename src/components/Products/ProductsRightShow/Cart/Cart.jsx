import { selectCartData } from "../../../../Store/slices/CartData/cartDataSlice";
import styles from "./cart.module.css";
import SingleCartProduct from "./SingleCartProduct/SingleCartProduct";
import { useDispatch, useSelector } from "react-redux";
import { orderProducts } from "../../../../Store/slices/CartData/cartDataSlice";

function Cart() {
  const cartData = useSelector(selectCartData);
  const dispatch = useDispatch();
  return (
    <div className={styles.cart}>
      <h2>Your Order</h2>
      <p className={styles.price}>Total price {cartData.total}$</p>
      {cartData.cartData.map((elm) => {
        return <SingleCartProduct key={elm.id} {...elm} />;
      })}
      <button
        onClick={() => dispatch(orderProducts())}
        className={styles.order}
      >
        Order
      </button>
    </div>
  );
}

export default Cart;
