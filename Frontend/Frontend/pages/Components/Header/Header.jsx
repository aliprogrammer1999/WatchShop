// dependency
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

// style 
import { Container, Row, Col, Form } from "react-bootstrap"
import HeaderCss from './Header.module.css'
import { motion } from "framer-motion"
// react icons 
import { BiSearch, BiShoppingBag, BiMenu, BiUser } from "react-icons/bi"
import { GiCuckooClock } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'

export default function Header() {
    const router = useRouter()
    const [navLink, setnavLink] = useState()
    const [navbar, setNavbar] = useState(false)

    const NavbarLink = [
        { title: 'Home', link: '/' },
        { title: 'Shop', link: '/shop' },
        { title: 'Blog', link: '/blog' },
        { title: 'Contact', link: '/contact' },
        { title: 'About Me', link: '/aboutme' },
    ]

    return (

        <Container fluid='md' className={HeaderCss.header}>
            <Row className={HeaderCss.HeaderBox}>
                {/* desktop and mobile respansive navBar link  */}
                <Col sm='12' md='4' className={HeaderCss.navLink_content}>
                    <button className={`_btn fs-2 ${HeaderCss.BtnMenu}`} onClick={() => setNavbar(!navbar)}>
                        <BiMenu />
                    </button>
                    <div className={HeaderCss.NavbarMenu} style={navbar ? { width: '320px', padding: "0 1rem" } : { width: 0, padding: 0 }}>
                        {NavbarLink.map((item, index) =>
                            <Link key={index} href={item.link} className={`_btn ${router.asPath === item.link ? HeaderCss.NavActive : HeaderCss.BtnNav} `}
                                onClick={() => setnavLink(index)} >{item.title}</Link>
                        )}
                        <button className={`_btn fs-2 ${HeaderCss.BtnClose}`} onClick={() => setNavbar(false)}>
                            <MdClose />
                        </button>
                    </div>
                </Col>

                {/* Logo  */}
                <Col sm='12' md="4" className={HeaderCss.logoBox}>
                    <Link href='/' className="_btn d-flex align-items-center fw-bold fs-3 user-select-none">
                        <GiCuckooClock className="fs-1 text-dark" /><span className="text-maroon">WATCH<span className="text-dark">shop</span></span>
                    </Link>
                </Col>

                {/* Nav Icons item  */}
                <Col sm='12' md='4' className={HeaderCss.headerIcons}>
                    <div className="position-relative">
                        <button className={`_btn fs-4`}>
                            <BiSearch />
                        </button>
                        <Form className={HeaderCss.searchBox}>
                            <input type="text" placeholder="Search product" />
                            <button className="_btn">
                                <BiSearch />
                            </button>
                        </Form>
                    </div>
                    <button className={`_btn fs-4`}>
                        <BiShoppingBag />
                    </button>
                    <button className={`_btn fs-4`}>
                        <BiUser />
                    </button>
                </Col>
            </Row>
        </Container >

    )
}