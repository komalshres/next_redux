import Head from "next/head";
import React from "react";
import styles from "./style.module.scss";

const Loading = () => {
  return (
    <>
      <Head>
        <title>Loading...</title>
      </Head>
      <div className={styles.container}>
        <p className={styles.loader}></p>
      </div>
    </>
  );
};

export default Loading;
