import React, { useState } from "react";

const ItemCount = ({ inicial, stock, onAdd }) => {
  const [clickCount, SetClickCount] = useState(inicial);

  const Add = () => {
    if (clickCount < stock) {
      SetClickCount(clickCount + 1);
    }
  };

  const Remove = () => {
    if (clickCount > 1) {
      SetClickCount(clickCount - 1);
    }
  };

  return (
    <>
      <div
        className="btn-group btn-group-sm"
        role="group"
        aria-label="Small button group"
      >
        <button onClick={Remove} type="button" className="btn btn-outline-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-dash"
            viewBox="0 0 16 16"
          >
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
          </svg>
        </button>
        <p className="px-2 pt-2">{clickCount}</p>
        <button onClick={Add} type="button" className="btn btn-outline-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>
      </div>
      <div className="m-4 w-auto">
        <button onClick={()=> onAdd(clickCount)} type="button" className="btn btn-outline-dark">
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
