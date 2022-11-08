import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";
import ProductCard from "../../components/ProductCard";
import styles from "./style.module.scss";

const Products = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("ERROR", err));
    dispatch(setProducts(response.data));
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);

  const ProductList = products.map((product) => {
    const { id, image, title, price, category } = product;

    return (
      <ProductCard
        key={id}
        title={title}
        img={image}
        price={price}
        category={category}
        id={id}
      />
      
    );
  });

  return <div className={styles.products}>{ProductList}</div>;
};

export default Products;
