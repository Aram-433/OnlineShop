import style from "./searchProducts.module.css";
import { searchByInput } from "../../../../Store/slices/ProductDataSlice/productDataSlice";
import {
  resetInputValue,
  setInputValue,
} from "../../../../Store/slices/InputValue/inputValue";

function SearchProduct(WrappedProduct) {
  return (props) => {
    return (
      <div className={style.allProducts}>
        <div className={style.forLeft}></div>
        <div className={style.right}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.dispatch(searchByInput(props.input));
              props.dispatch(resetInputValue());
            }}
          >
            <input
              type="text"
              placeholder="Search Product"
              value={props.input}
              onChange={(e) => props.dispatch(setInputValue(e.target.value))}
            />
            <button>Search</button>
          </form>
          <WrappedProduct prodData={props.prodArray} />
        </div>
      </div>
    );
  };
}

export default SearchProduct;
