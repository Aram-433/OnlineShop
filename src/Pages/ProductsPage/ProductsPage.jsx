import ProductsLeftBar from "../../components/Products/ProductsLeftBar/ProductsLeftBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductsData } from "../../Store/slices/ProductDataSlice/API";
import { selectProductsData } from "../../Store/slices/ProductDataSlice/productDataSlice";
import SearchProduct from "../../components/Products/ProductsRightShow/SearchProduct/SearchProduct";
import ProductList from "../../components/Products/ProductsRightShow/ProductList/ProductList";
import { selectInputValue } from "../../Store/slices/InputValue/inputValue";
import { selectCartOpenSlice } from "../../Store/slices/CartOpen/cartOpenSlice";
import Cart from "../../components/Products/ProductsRightShow/Cart/Cart";

const HigerOrder = SearchProduct(ProductList);

function ProductsPage() {
  const dispatch = useDispatch();
  const prodData = useSelector(selectProductsData);
  const inputValue = useSelector(selectInputValue);
  const cart = useSelector(selectCartOpenSlice);

  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);

  const brandNames = prodData.data.reduce(
    (acc, elm) => {
      if (elm.brand == undefined) {
        return acc;
      } else {
        return [...acc, elm.brand];
      }
    },
    ["All"]
  );

  const categoryNames = prodData.data.reduce((acc, elm) => {
    if (!acc.includes(elm.category)) {
      return [...acc, elm.category];
    } else {
      return acc;
    }
  }, []);

  return (
    <div>
      <div></div>
      <ProductsLeftBar brand={brandNames} category={categoryNames} />
      <div>
        <HigerOrder
          prodArray={prodData.filtredData}
          dispatch={dispatch}
          input={inputValue}
        />
        {cart && <Cart />}
      </div>
    </div>
  );
}

export default ProductsPage;
