import { useContext } from "react";
import ShopCartContext from "../contexts/ShopCartContext";

import classes from "./ShoppingCart.module.css";

const ShoppingCart = ({ showCart }) => {
  const { cartProducts, total, deleteFromCart, clearCart, isEmpty } =
    useContext(ShopCartContext);

  let showingCart;
  if (showCart) {
    showingCart = classes.showCart;
  } else {
    showingCart = "";
  }

  return (
    <>
      <article className={`${classes.shoppingCartContainer} ${showingCart}`}>
        <h3>Your Cart</h3>
        {isEmpty && (
          <p className={classes.emptyCartText}>No products in your cart.</p>
        )}
        <ul className={classes.cartList}>
          {cartProducts.map(product => (
            <li className={classes.cartItem} key={product.id}>
              <span className={classes.cuantity}>{product.quantity}</span>
              <span className={classes.title}>{product.title}</span>
              <span className={classes.price}>${product.price}</span>
              <span
                className={classes.delete}
                onClick={() =>
                  deleteFromCart(product.id, product.price, product.quantity)
                }
              >
                X
              </span>
            </li>
          ))}
        </ul>
        <article className={classes.total}>
          <h3>Total</h3>
          <span>$ {parseInt(total)}</span>
        </article>
        <div className={classes.actions}>
          <button>Buy</button>
          <button className={classes.clearBtn} onClick={() => clearCart()}>
            Empty Cart
          </button>
        </div>
      </article>
    </>
  );
};
export default ShoppingCart;
