import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Products from "./products/products";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Products />
      </main>
    </div>
  );
}
