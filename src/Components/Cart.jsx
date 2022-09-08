import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./Context";

export const Cart = () => {
  const { cartList, limpiarCarro, eliminarItem, sumaPrecioItems } =
    useCartContext();
    console.log(cartList)
  return (
    <div className="h-full m-4">
      {!cartList.length > 0 ? (
        <>
          <p>Carrito vacio :(</p>
        </>
      ) : (
        <div className="flex flex-col items-center h-full">
          <h3 className="title">Carrito</h3>

          {cartList.map((prod) => (
            <div
              key={prod.id}
              className="flex flex-col justify-center items-center py-4 px-2 lg:flex lg:flex-row lg:justify-center lg:items-center"
            >
              <img src={prod.imagen} className="rounded h-32 mx-6" alt="" />
              <div className="mx-3">
                <Link to={`/details/${prod.id}`} style={{ textDecoration:'none' }}>
                  <h4 style={{ color:'black' }} className="text-lg my-3">{prod.producto}</h4>
                  <div className="flex flex-col items-start mb-3">
                    <p style={{ color:'black' }}>Cantidad: {prod.cantidad}</p>
                    <p style={{ color:'black' }}>Precio unitario: ${prod.precio}</p>
                    <p style={{ color:'black' }}>Subtotal: ${prod.precio * prod.cantidad}</p>
                  </div>
                </Link>
              </div>
              <button
                className="btn-delete"
                key={prod.id}
                onClick={() => eliminarItem(prod.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash3"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
              </button>
            </div>
          ))}

          <h4 className="text-2xl font-bold py-8">
            Total: ${sumaPrecioItems()}
          </h4>
          <div className="pt-8 flex">
            <Link to="/checkout">
              <button type="button" className="btn btn-outline-dark">
                Check-Out
              </button>
            </Link>
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={limpiarCarro}
            >
              Limpiar Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
