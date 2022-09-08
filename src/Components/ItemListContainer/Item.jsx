import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div>
      <div className="item-container p-5">
        <img
          src={props.item.imagen}
          className="item-img img-fluid"
          alt="Responsive image"
        />
        <div className="flex flex-col items-center">
          <p className="card-tittle">{props.item.producto}</p>
          <p className="mb-4">{props.item.precio}$</p>
          <Link to={`/details/${props.item.id}`}>
            <button type="button" className="btn btn-outline-dark">
              Ver más
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
