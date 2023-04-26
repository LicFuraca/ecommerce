import { Link } from "react-router-dom";
import { useContext } from "react";
import FilterContext from "../contexts/FilterContext";

import { InfoOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import LoadingSpinner from "./../components/UI/LoadingSpinner";

import classes from "./ProductsList.module.css";

const ProductsList = () => {
  const { products, loading, category, changeCategoryHandler } =
    useContext(FilterContext);

  const icons = (
    <>
      <ShoppingCartOutlined />
      <InfoOutlined />
    </>
  );

  let clothingProducts;
  if (category === "") {
    clothingProducts = products.filter(
      product => product.category !== "electronics"
    );
  } else {
    clothingProducts = products.filter(
      product => product.category === category
    );
  }

  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.titles}>
          <h2>our products</h2>
          <ul>
            <li onClick={changeCategoryHandler}>All</li>
            <li onClick={changeCategoryHandler}>Women</li>
            <li onClick={changeCategoryHandler}>Men</li>
            <li onClick={changeCategoryHandler}>Accessories</li>
          </ul>
        </div>
        <div className={classes.productsList}>
          {loading && (
            <div className={classes.center}>
              <LoadingSpinner />
            </div>
          )}
          {clothingProducts.map(product => (
            <Link key={product.id} to={`/product-details/${product.id}`}>
              <Card url={product.image} text={icons} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>

    // if (product.category === category) {
    //   show = (
    //     <Link key={product.id} to={`/product-details/${product.id}`}>
    //       <Card url={product.image} text={icons} />;
    //     </Link>
    //   );
    // }

    // if (category === "") {
    //   show = (
    //     <Link key={product.id} to={`/product-details/${product.id}`}>
    //       <Card url={product.image} text={icons} />;
    //     </Link>
    //   );
    // }
  );
};
export default ProductsList;
