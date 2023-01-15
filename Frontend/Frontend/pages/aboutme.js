import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../Components/Layout/Layout'
import AboutMeCss from '../styles/AboutMe.module.css'
import Image from 'next/image'
import MyImage from '../public/assest/AboutMe/myImage.jpeg'
// icons 
import { BsGithub, BsInstagram, BsTelegram, BsTwitter, BsHeadphones, BsGoogle } from 'react-icons/bs'

function AboutMe() {
    return (
        <Layout>
            <Head>
                <title>About Me</title>
            </Head>
            <Container>
                <Row>
                    <Col sm='12'>
                        <h1 className='fw-bold text-center my-4'>Hello! I am Ali</h1>
                        <p className='text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacus metus, convallis ut leo nec, tincidunt eleifend justo. Ut felis orci, hendrerit a pulvinar et, gravida ac lorem. Sed vitae molestie sapien, at sollicitudin tortor.
                            Duis id volutpat libero, id vestibulum purus.Donec euismod accumsan felis,egestas lobortis velit tempor vitae. Integer eget velit fermentum, dignissim odio non, bibendum velit.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className={AboutMeCss.AboutCart}>
                <Row className='h-100'>
                    <Col sm='12' md='6' className={AboutMeCss.AboutMeImg}>
                        <Image src={MyImage} alt="AboutMeImage" />
                    </Col>
                    <Col sm='12' md='6'>
                        <div className='p-3 user-select-none'>
                            <h2 className='fw-bold'>My Name is <span className='text-maroon'>Ali Rezapour Gatabi</span></h2>
                            <p className='my-4'>Hi.I'm Ali, I'm an accounting student, but because of my great interest in computers and programming, I changed my field of activity to programming (web developer).
                            </p>
                            <div className={AboutMeCss.AboutDetile}>
                                <h5 className='fw-bold'><BsGithub /> : ali-programmer-1999</h5>
                                <h5 className='fw-bold'><BsTelegram /> : ali_rezapour_gatabi</h5>
                                <h5 className='fw-bold'><BsInstagram /> : ali.r.g.1999</h5>
                                <h5 className='fw-bold'><BsTwitter /> : G1372R</h5>
                                <h5 className='fw-bold'><BsGoogle /> : ali.programer.1999@gmail.com</h5>
                                <h5 className='fw-bold'><BsHeadphones /> : 09379534460</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default AboutMe