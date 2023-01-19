import React, { useEffect, useState } from "react";
import Layout from "./Components/Layout/Layout";
import ShopCss from "../styles/Shop.module.css";
import Cart from "./Components/Ui/Cart/Cart";
import { Container, Row, Col } from "react-bootstrap";
import BanerSlider from "./Components/Ui/Slider/BanerSlider";
import { BiSearchAlt } from "react-icons/bi";

function Shop({ product }) {
  const [shop, setShop] = useState(product);

  // search box
  const searchHandler = (e) => {
    e.preventDefault();
    let searchinput = e.target.value;
    let upper = searchinput.toUpperCase();
    setShop(product.filter((item) => item.name.match(upper)));
  };

  // Filter Product Type
  const ProductTypeHandler = (e) => {
    e.preventDefault();
    if (e.target.value == "all") {
      setShop(product);
    }
    if (e.target.value == "woman") {
      const woman = product.filter((item) => item.category == 2);
      setShop(woman);
    }
    if (e.target.value == "man") {
      const man = product.filter((item) => item.category == 1);
      setShop(man);
    }
    if (e.target.value == "kids") {
      const kids = product.filter((item) => item.category == 3);
      setShop(kids);
    }
    if (e.target.value == "Jolwary") {
      const Jolwary = product.filter((item) => item.category == 4);
      setShop(Jolwary);
    }
  };

  return (
    <Layout>
      <main className={ShopCss.shop}>
        {/* Header banner  */}
        <Container fluid>
          <Row>
            <Col>
              <BanerSlider />
            </Col>
          </Row>
        </Container>

        {/* filter product box*/}
        <Container>
          <Row className={ShopCss.filterProduct}>
            <Col sm="12" md="3">
              <select onChange={ProductTypeHandler}>
                <option value="all">All</option>
                <option value="woman">Woman</option>
                <option value="man">Man</option>
                <option value="kids">Kids</option>
                <option value="Jolwary">Jolwary</option>
              </select>
            </Col>
            <Col sm="12" md="9" className="position-relative">
              <input
                type="text"
                placeholder="Search your product"
                onChange={searchHandler}
              />
              <BiSearchAlt />
            </Col>
          </Row>
        </Container>

        {/* show Product  */}
        <Container>
          <Row>
            {shop.map((item) => (
              <Col sm="12" md="4" lg="3" key={item.id} className="my-2">
                <Cart data={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </Layout>
  );
}

export default Shop;

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:8000/api/");
  const product = await res.json();
  const ascprice = product.sort((a, b) => b.price - a.price);
  const desprice = product.sort((a, b) => a.price - b.price);
  const bestProduct = product.sort((a, b) => a.price - b.price);

  return {
    props: {
      product,
    },
  };
}
