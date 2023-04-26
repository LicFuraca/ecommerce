import { useState, createContext } from "react";

const ShopCartContext = createContext();

export const ShopCartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);

  const addToCart = (id, title, price, quantity) => {
    const isProductInCart = cartProducts.find(product => product.id === id);

    if (isProductInCart) {
      const products = cartProducts.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

      setTotal(total + price * quantity);
      setIsEmpty(false);
      return setCartProducts([...products]);
    }

    setTotal(total + price * quantity);
    setIsEmpty(false);
    setCartProducts(prevState => [
      ...prevState,
      { id, quantity, title, price },
    ]);
  };

  const deleteFromCart = (id, price, quantity) => {
    const products = cartProducts.filter(product => product.id !== id);

    setTotal(total - price * quantity);
    setCartProducts(products);
    if (products.length === 0) setIsEmpty(true);
  };

  const clearCart = () => {
    setTotal(0);
    setCartProducts([]);
    setIsEmpty(true);
  };

  return (
    <ShopCartContext.Provider
      value={{
        addToCart,
        deleteFromCart,
        clearCart,
        cartProducts,
        total,
        isEmpty,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  );
};

export default ShopCartContext;
