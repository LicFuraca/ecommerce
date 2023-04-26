import { useState, useEffect } from "react";

const useFetchProducts = url => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [url]);

  return { products, loading };
};

export default useFetchProducts;
