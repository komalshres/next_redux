import Link from "next/link";
import styles from "./style.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <p>Redux Store</p>
      </Link>
    </div>
  );
};

export default Header;
