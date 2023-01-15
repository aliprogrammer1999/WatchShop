import Image from "next/image";
import Link from "next/link";
import React from "react";
import CartCss from "./Cart.module.css";
import test from "../../../../public/assest/Home/product.jpg";
import { AiFillStar } from "react-icons/ai";

function Cart({ data }) {
  console.log(data.image);
  return (
    <>
      <div className={CartCss.cart}>
        <div className={CartCss.rate}>
          <span className="fw-bold text-light">{data.rate}</span>
          <AiFillStar className="fw-bold text-light" />
        </div>
        <Link href="/shop">
          <Image src={data.image} width={280} height={250} alt="img" />
        </Link>
      </div>
    </>
  );
}

export default Cart;
