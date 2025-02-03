import { useDispatch } from "react-redux";
import { searchByCategory } from "../../../../Store/slices/ProductDataSlice/productDataSlice";

function ProductsLeftBarBottom({ categorys }) {
  const dispatch = useDispatch();
  return (
    <ul>
      {categorys.map((elm, ind) => {
        return (
          <li key={ind} onClick={() => dispatch(searchByCategory(elm))}>
            {elm}
          </li>
        );
      })}
    </ul>
  );
}

export default ProductsLeftBarBottom;
