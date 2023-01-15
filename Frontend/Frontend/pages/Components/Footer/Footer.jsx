import Image from 'next/image'
// style 
import { Container, Row, Col } from 'react-bootstrap'
import FooterCss from './Footer.module.css'
// Icons 
import { BsGithub, BsInstagram, BsTelegram, BsWhatsapp, BsHeadphones, BsMailbox, BsFillPinMapFill } from 'react-icons/bs'
// break page 
import break_page from '../../../public/assest/Brack/break_page.png'


export default function Footer() {
    return (
        <footer className={FooterCss.footer}>
            <Image src={break_page} alt='breakPage' width={100} height={200} />
            <Container>
                <Row>
                    <Col sm='12'>
                        <div className={FooterCss.footerIcons}>
                            <BsGithub />
                            <BsInstagram />
                            <BsTelegram />
                            <BsWhatsapp />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm='12' lg='6'>
                        <p className='text-center p-3'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quaerat deleniti, fugiat officia, obcaecati atque veritatis dolores molestiae tenetur nostrum exercitationem, animi eaque dolorem dolore temporibus. Modi voluptate quasi vero!
                        </p>
                    </Col>
                    <Col sm='12' lg='6'>
                        <div className={FooterCss.FooterContact}>
                            <div><span className='fs-5'><BsHeadphones /></span> Phone : <span>09379534460</span></div>
                            <div><span className='fs-5'><BsMailbox /></span> Email : <span>ali.programer.1999@gmail.com</span></div>
                            <div><span className='fs-5'><BsFillPinMapFill /></span> Address : <span>Iran/ Mazandaran / Babol / Gatab</span></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm='12'>
                        <h4 className='bg-maroon text-light p-2 rounded text-center'>alirg@ 2023 create watch market with (Nextjs & Django) </h4>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}