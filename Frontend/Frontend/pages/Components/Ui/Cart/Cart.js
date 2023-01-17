import Image from "next/image";
import Link from "next/link";
import React from "react";
import CartCss from "./Cart.module.css";
import test from "../../../../public/assest/Home/product.jpg";
import { AiFillStar } from "react-icons/ai";

function Cart({ data }) {

  return (
    <div className={CartCss.cart}>
      <div className={CartCss.rate}>
        <span className="fw-bold text-light">{data.rate}</span>
        <AiFillStar className="fw-bold text-light" />
      </div>
      <Link href="/shop">
        {/* <Image src={data.image} width={280} height={250} alt="img" /> */}
        <img src={data.image} width={280} height={250} alt={data.name} />
      </Link>
      <div className="px-3">
        <h6 className="text-center fw-bold text-truncate border-bottom">{data.name}</h6>
        <h6 className="text-center fw-bold">{data.price} $</h6>
        <div className="d-flex gap-2 justify-content-center text-center text-maroon fs-7 fw-bold">
          <span>Available in stock :</span><span>{data.quntity}</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
