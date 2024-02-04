import React from 'react';
import './Card.scss';
const Card = (prop) =>{
  return (
    <div className="card">
    <img src={"https://cdn.pixabay.com/photo/2016/11/29/12/30/phone-1869510_1280.jpg"} className="image" alt="img"/>
    <div className="cardInfo">
        <div className="cardDetails">
            <h4 className="cardType">{prop.itemntype}</h4>
            <h4 className="cardName">{prop.itemname}</h4>
        </div>
        <div className="description">
            {prop.itemdesc}
        </div>
    </div>
</div >
  )
}

export default Card