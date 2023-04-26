import { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import ShopCartContext from "../contexts/ShopCartContext";
import useFetchProducts from "../hooks/useFetchProducts";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import classes from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const URL = `https://fakestoreapi.com/products/${productId}`;

  const { products: product } = useFetchProducts(URL);

  const { addToCart } = useContext(ShopCartContext);

  const addToCartHandler = () => {
    addToCart(
      product.id,
      product.title,
      parseInt(product.price),
      (product.quantity = 1)
    );
  };

  return (
    <>
      <Navbar />
      <section className={classes.container}>
        <div className={classes.imageContainer}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={classes.productDescription}>
          <h4 className={classes.title}>{product.title}</h4>
          <h5 className={classes.price}>Price: $ {parseInt(product.price)}</h5>
          <p>{product.description}</p>
          <div className={classes.actions}>
            <button onClick={addToCartHandler}>add to cart</button>
            <Link to="/products-list">
              <button className={classes.backBtn}>back to store</button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default ProductDetail;
