import { useState } from 'react'
import Head from 'next/head'
import Layout from './Components/Layout/Layout'
import { Container, Row, Col, Form } from 'react-bootstrap'
import ContactCss from '../styles/Contact.module.css'
import Image from 'next/image'
import ContactImg from '../public/assest/Contact/contentImage.jpg'
import { AiOutlineCheck } from 'react-icons/ai'

function Contact() {
    const [contactForm, setContactFrom] = useState({})
    const ChangeHandler = (e) => {
        setContactFrom({ ...contactForm, [e.target.name]: e.target.value })
    }
    const sendFromHandel = (e) => {
        e.preventDefault()
    }

    return (
        <Layout>
            <Head>
                <title>Contact</title>
            </Head>
            <Container fluid='sm' className={ContactCss.contactContainer}>
                <Row className={ContactCss.Protection}>
                    <Col sm='12' md='6' className={ContactCss.proContent}>
                        <h3 className='fw-bold'>WatchShop Buyer Protection</h3>
                        <div className={ContactCss.ProtectionContent}>
                            <span><AiOutlineCheck />Payment via the Escrow Service</span>
                            <span><AiOutlineCheck />Authenticity Guarantee</span>
                            <span><AiOutlineCheck />Legally mandated 14-day return policy</span>
                            <span><AiOutlineCheck />Strict dealer guidelines</span>
                            <span><AiOutlineCheck />Insured Shipments</span>
                        </div>
                    </Col>
                    <Col sm='12' md='6' className={ContactCss.contactImg}>
                        <Image src={ContactImg} alt="Image Contact" />
                    </Col>
                </Row>
                <Row className='h-75 d-flex py-5'>
                    <Col sm='12' lg='7' className='p-5'>
                        <h3 className='fw-bold mb-4'>TELL US YOUR PROJECT</h3>
                        <Form className={ContactCss.contactFrom} onSubmit={sendFromHandel} method='get'>
                            <div>
                                <input type='text' name='name' placeholder='Name*' onChange={ChangeHandler} />
                                <input type='email' name='email' placeholder='Email*' onChange={ChangeHandler} />
                            </div>
                            <div>
                                <input type='number' name='phone' placeholder='Phone Number*' onChange={ChangeHandler} />
                                <input type='type' name='subject' placeholder='Subject*' onChange={ChangeHandler} />
                            </div>
                            <textarea placeholder='Massage*' name='massage' onChange={ChangeHandler}></textarea>
                            <button type='submit' className='_btn' onChange={ChangeHandler}>Send Mail</button>
                        </Form>
                    </Col>
                    <Col sm='12' lg='5' className='p-5'>
                        <div className='bg-gray w-100 h-100 p-4 rounded-3 d-flex flex-column gap-3'>
                            <h3 className='fw-bold'>Contact US</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nam ex odio expedita, officia temporibus ipsum, placeat magni quibusdam sint, atque distinctio
                            </p>

                            <div>
                                <h6 className=' border-bottom pb-2'>Address : Iran/ Mazandaran / Babol / Gatab</h6>
                                <h6 className=' border-bottom pb-2'>Email : watchShop@1999.mail</h6>
                                <h6 className=' border-bottom pb-2'>Phone : 09379534460</h6>
                                <h6>Center phone : 0111210012</h6>
                            </div>
                            <div className='d-flex flex-column'>
                                <h5>
                                    Working hours:
                                </h5>
                                <h6>
                                    Monday – Saturday:  7:00 AM – 23:00 PM
                                </h6>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Contact