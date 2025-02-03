import Info from "../Info/Info";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.mainDiv}>
      <h2>About Us</h2>
      <p className={styles.message}>Thank you so much for your order! ...</p>
      <Info />
    </div>
  );
}

export default Header;
