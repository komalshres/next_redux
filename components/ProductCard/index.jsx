import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

const ProductCard = ({ img, title, price, category, id }) => {
  return (
    <div className={styles.cardContainer}>
      <Link href={`/products/${id}`}>
        <Image src={img} alt={title} width={300} height={400} />
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{category}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
