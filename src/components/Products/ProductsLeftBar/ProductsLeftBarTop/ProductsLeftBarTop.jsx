import { useDispatch } from "react-redux";
import { searchByBrand } from "../../../../Store/slices/ProductDataSlice/productDataSlice";

function ProductsLeftBarTop({ brands }) {
  const dispatch = useDispatch();

  return (
    <ul>
      {brands.map((elm, ind) => {
        return (
          <li key={ind} onClick={() => dispatch(searchByBrand(elm))}>
            {elm}
          </li>
        );
      })}
    </ul>
  );
}

export default ProductsLeftBarTop;
