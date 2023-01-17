import { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// Style Component
import { Container, Row, Col } from "react-bootstrap";
import Layout from "./Components/Layout/Layout";
import HomeCss from "../styles/Home.module.css";
// Component
import SliderProduct from "./Components/Ui/Slider/SliderProduct";
// assest
import section_2 from "../public/assest/Home/section_2.jpg";
import section_2_2 from "../public/assest/Home/section_2_2.jpg";
import banner_1 from "../public/assest/Home/sectionbanner_1.jpg";
import banner_2 from "../public/assest/Home/sectionbanner_2.jpg";
import TimeBG from "../public/assest/Home/deal-bg.jpg";
import BrandSlider from "./Components/Ui/Slider/BrandSlider";

export default function Home({ bestProduct, posts }) {
  const [product, setProduct] = useState(posts);
  const [selectedIndex, setSelectedIndex] = useState();
  const [category, setCategory] = useState([
    "All",
    "Woman",
    "Man",
    "Kids",
    "Jolwary",
  ]);

  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("12/31/2023 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // console.log(posts.category);

  const CategoryHandler = (index) => {
    setSelectedIndex(index);
    if (index == 0) {
      setProduct(posts);
    }
    if (index == 1) {
      const woman = posts.filter((item) => item.category == 2);
      setProduct(woman);
    }
    if (index == 2) {
      const man = posts.filter((item) => item.category == 1);
      setProduct(man);
    }
    if (index == 3) {
      const kids = posts.filter((item) => item.category == 3);
      setProduct(kids);
    }
    if (index == 4) {
      const Jolwary = posts.filter((item) => item.category == 4);
      setProduct(Jolwary);
    }
  };
  // =========================================

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <main className={HomeCss.home}>
          {/* section 2 Home Banner  */}
          <Container fluid="md" className="my-5">
            <Row>
              <Col sm="12" md="6" className="my-1">
                <Image
                  src={section_2}
                  alt="section 2"
                  className={HomeCss.section_2}
                />
              </Col>
              <Col sm="12" md="6" className="my-1">
                <Image
                  src={section_2_2}
                  alt="section 2"
                  className={HomeCss.section_2}
                />
              </Col>
            </Row>
          </Container>

          {/* section 2 Home best product */}
          <Container fluid="md">
            <Row>
              <Col sm="12">
                <h4 className={HomeCss.bestProudctTitle}>Best rate products</h4>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <SliderProduct data={bestProduct} />
              </Col>
            </Row>
          </Container>

          {/* section 3 Relite Time  */}
          <Container fluid>
            <Row>
              <Col className={HomeCss.realTime}>
                <Image src={TimeBG} alt="real time" />
                <div className="text-center ff-title d-flex flex-column gap-3">
                  <h2 className="fw-bold text-capitalize">
                    -- Time left until the new year --
                  </h2>
                  <div className={HomeCss.TimeCount}>
                    <div className="d-flex flex-column align-items-center">
                      {days}
                      <span>Days</span>
                    </div>
                    :
                    <div className="d-flex flex-column align-items-center">
                      {hours}
                      <span>Hour</span>
                    </div>
                    :
                    <div className="d-flex flex-column align-items-center">
                      {minutes}
                      <span>Min</span>
                    </div>
                    :
                    <div className="d-flex flex-column align-items-center">
                      {seconds} <span>Sec</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          {/* section 4 Product bestProduct  */}
          <Container>
            <Row>
              <Col sm="12" className={HomeCss.showProduct}>
                <h4 className="fw-bold">Some Product</h4>
                <div className="d-flex justify-content-center gap-3">
                  {category.map((item, index) => (
                    <button
                      key={index}
                      className={`_btn ${
                        index === selectedIndex
                          ? HomeCss.isActive
                          : HomeCss.btn_cat
                      } `}
                      onClick={() => CategoryHandler(index)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm="12" className="p-2">
                <SliderProduct data={product} />
              </Col>
            </Row>
          </Container>

          {/* section 5 Home Banner  */}
          <Container fluid="md" className="my-5">
            <Row>
              <Col sm="12" md="6" className="my-1">
                <Link href="/shop">
                  <Image
                    src={banner_1}
                    alt="section 2"
                    className={HomeCss.section_2}
                  />
                </Link>
              </Col>
              <Col sm="12" md="6" className="my-1">
                <Link href="/shop">
                  <Image
                    src={banner_2}
                    alt="section 2"
                    className={HomeCss.section_2}
                  />
                </Link>
              </Col>
            </Row>
          </Container>

          {/* pupoler brand  */}
          <Container>
            <Row>
              <Col sm="12">
                <h4 className="fw-bold">Populer Brand</h4>
                <BrandSlider />
              </Col>
            </Row>
          </Container>
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:8000/api/");
  const posts = await res.json();
  const bestProduct = await posts.filter((best) => best.rate > 4);
  return {
    props: {
      bestProduct,
      posts,
    },
  };
}
