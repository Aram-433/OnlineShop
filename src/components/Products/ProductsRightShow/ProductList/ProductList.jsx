import SingleProduct from "../SingleProduct/SingleProduct";
import style from "./productList.module.css";

function ProductList({ prodData }) {
  return (
    <div className={style.allProducts}>
      {prodData.map((elm, ind) => {
        return <SingleProduct key={elm.id} {...elm} />;
      })}
    </div>
  );
}

export default ProductList;
