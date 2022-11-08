import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import ProductDetailsComp from "../../components/ProductDetails";
import styles from "./style.module.scss";

const ProductDetails = () => {
  const [product, setProduct] = React.useState({});

  const router = useRouter();
  let productId = router.query.productdetails;

  React.useEffect(() => {
    if (productId)
      axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .then((resp) => setProduct(resp.data));
  }, [productId]);

  if (!product.id) return <Loading />;

  return (
    <>
      <Head>
        <title>{product.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductDetailsComp {...product} />
    </>
  );
};

export default ProductDetails;
