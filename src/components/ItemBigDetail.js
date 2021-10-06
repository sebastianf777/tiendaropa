import React from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import img1 from "../assets/img/img1.png";
import { Card } from "react-bootstrap";
import "../css/ItemBigDetail.css";



const ItemBigDetail = () => {
  return (
    <>
      <div className="ItemBigD">
        <Card.Img className="imgB" variant="top" src={img1} />
        <ItemDetailContainer className="itemD" />
      </div>
    </>
  );
};

export default ItemBigDetail;
