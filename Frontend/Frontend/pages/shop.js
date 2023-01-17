import React from "react";
import Layout from "./Components/Layout/Layout";
import ShopCss from '../styles/Shop.module.css'

function Shop({ product }) {
  console.log(product);
  return <Layout>
    <main className={ShopCss.shop}>

    </main>
  </Layout>;
}

export default Shop;

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:8000/api/");
  const product = await res.json();
  return {
    props: {
      product,
    },
  };
}
