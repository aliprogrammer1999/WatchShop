import Image from "next/image";
import Link from "next/link";
import React from "react";
import CartCss from "./Cart.module.css";
import { AiFillStar } from "react-icons/ai";

export default function Cart({ data }) {
  return (
    <div className={data.offer ? CartCss.cartOffer : CartCss.cart}>
      <div className={CartCss.rate}>
        <span className="fw-bold text-light">{data.rate}</span>
        <AiFillStar className="fw-bold text-light" />
      </div>
      <Link href="/shop">
        <img src={data.image} width={280} height={250} alt={data.name} />
      </Link>
      <div className="px-3 d-flex justify-content-center flex-column">
        <h6 className="text-center fw-bold text-truncate mb-1 border-bottom">
          {data.name}
        </h6>
        <div className="d-flex justify-content-center gap-2 user-select-none">
          <h6
            className={`text-center fw-bold ${
              data.offer ? CartCss.OfferPrice : ""
            }`}
          >
            {data.price} $
          </h6>
          {data.offer ? (
            <h6 className="text-center fw-bold">{data.offer} $</h6>
          ) : null}
        </div>
        <div className="d-flex gap-2 justify-content-center text-center text-maroon fs-7 fw-bold user-select-none">
          <span>Available in stock :</span>
          <span>{data.quntity}</span>
        </div>
        {data.offer ? (
          <span className="fw-bold bg-maroon rounded text-center px-2 text-light user-select-none">
            Product offer{" "}
            {Math.round(((data.price - data.offer) / data.price) * 100)}%
          </span>
        ) : null}
      </div>
    </div>
  );
}
