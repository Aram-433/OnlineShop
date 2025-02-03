import styles from "./navMenu.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../Images/logo.jpg";
import { useDispatch } from "react-redux";
import { forCart } from "../../Store/slices/CartOpen/cartOpenSlice";

function NavMenu() {
  const dispatch = useDispatch();

  return (
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <NavLink to="/store">
          <img src={logo} />
        </NavLink>
        <div className={styles.cart}>
          <i className="bi bi-cart" onClick={() => dispatch(forCart())}></i>
        </div>
      </div>
      <div className={styles.navRight}>
        <ul className={styles.ul}>
          <li>
            <NavLink to="/store">Store</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavMenu;
