import styles from "./productsLeftBar.module.css";
import ProductsLeftBarTop from "./ProductsLeftBarTop/ProductsLeftBarTop";
import ProductsLeftBarBottom from "./ProductsLeftBarBottom/ProductsLeftBarBottom";

function ProductsLeftBar({ brand, category }) {
  return (
    <aside className={styles.aside}>
      <h2>Brands</h2>
      <ProductsLeftBarTop brands={brand} />
      <h2>Category</h2>
      <ProductsLeftBarBottom categorys={category} />
    </aside>
  );
}

export default ProductsLeftBar;
