import React from "react";
import Item from "./Item";

const ItemList = (props) => {

  return (
    <>
     <div className="text-center justify-content-md-center row row-cols-4 h-25">
      {props.productos.map((prod) => (
        <Item
          key={prod.id}
          item={prod}
        />
        
      ))}
    </div>
    </>
  );
};

export default ItemList;
