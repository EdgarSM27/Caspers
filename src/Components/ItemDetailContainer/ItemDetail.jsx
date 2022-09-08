import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemListContainer/ItemCount";
import { CartContext } from "../Context";

const ItemDetail = ({ producto }) => {
  const handlerOnAdd = (cantidad) => {
    setwasClicked(true);
    agregarCarrito({ ...producto, cantidad: cantidad });
  };

  const [wasClicked, setwasClicked] = useState(false);

  const { agregarCarrito } = useContext(CartContext);

  //console.log(producto)
  return (
    <>
      <div className="container border border-light" key={`${producto.id}`}>
        <div className="row justify-content-center">
          <div className="col">
            <img
              src={`${producto.imagen}`}
              className="rounded pt-4 shadow-md p-5 w-100"
              alt=""
            />
          </div>
          <div className="col p-5">
            <div className=" pt-4 p-5 ">
              <p className="text-2xl">{`${producto.producto}`}</p>
              <p className="text-xl">{`${producto.precio}`}$</p>
              <div className="details-text">
                <p>peso: {`${producto.peso}`}</p>
                <p>Usos: {`${producto.usos}`}</p>
                <p>ID: {`${producto.id}`}</p>
                <div>
                  {wasClicked ? (
                    <>
                      <ItemCount
                        inicial={0}
                        stock={producto.stock}
                        onAdd={handlerOnAdd}
                      />
                      <div className="flex my-2">
                        <Link to="/">
                          {" "}
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                          >
                            {" "}
                            Seguir comprando{" "}
                          </button>
                        </Link>
                        <Link to="/cart">
                          {" "}
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                          >
                            {" "}
                            Ir al Carrito{" "}
                          </button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <ItemCount
                      inicial={1}
                      stock={producto.stock}
                      onAdd={handlerOnAdd}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
