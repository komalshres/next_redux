import Image from "next/image";
import React from "react";
import styles from "./style.module.scss";

const ProductDetailsComp = ({ image, title, description, price, category }) => {
  return (
    <div className={styles.container}>
      <Image src={image} width={300} height={400} alt={title} />
      <div className={styles.details}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p className={styles.price}>${price}</p>
        <span className={styles.category}>{category}</span>
      </div>
    </div>
  );
};

export default ProductDetailsComp;
