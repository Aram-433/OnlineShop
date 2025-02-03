import { Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout";
import ProductsPage from "../Pages/ProductsPage/ProductsPage";
import AboutPage from "../Pages/AboutPage/AboutPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<AboutPage />} />
        <Route path="/store" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
