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

export default function Home({ bestProduct }) {
  // section 5 category style
  const [selectedIndex, setSelectedIndex] = useState();
  const [category, setCategory] = useState([
    "All",
    "Woman",
    "Man",
    "Kids",
    "Jolwary",
  ]);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <main className={HomeCss.home}>
          {/* section 1 Home */}
          <Container fluid>
            <Row>
              <Col sm="12"></Col>
            </Row>
          </Container>

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

          {/* section 3 Home best product */}
          <Container fluid="md">
            <Row>
              <Col sm="12">
                <h4 className={HomeCss.bestProudctTitle}>
                  Best seller products
                </h4>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <SliderProduct data={bestProduct}/>
              </Col>
            </Row>
          </Container>

          {/* section 4 Relite Time  */}
          <Container fluid>
            <Row>
              <Col className={HomeCss.realTime}>
                <Image src={TimeBG} alt="real time" />
                <div className="text-center ff-title">
                  <h4>-- Watch Shop International --</h4>
                  {/* <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /> */}
                </div>
              </Col>
            </Row>
          </Container>

          {/* section 5 Product bestProduct  */}
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
                      onClick={() => setSelectedIndex(index)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm="12" className="p-2"></Col>
            </Row>
          </Container>

          {/* section 6 Home Banner  */}
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
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:8000/api/");
  const posts = await res.json();
  const bestProduct = await posts.filter(best => best.rate > 4)
  return {
    props: {
      bestProduct,
    },
  };
}
