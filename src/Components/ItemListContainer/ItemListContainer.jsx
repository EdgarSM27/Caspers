import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  where,
  query,
  getDoc,
} from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  //useEffect(() => {
  // getDoc(doc(getFirestore(),'Productos'))
  //     .then(res=> console.log(res.data))
  //   }, [idCategoria]);

  useEffect(() => {
    let productosHardcode = [
      {
        id: "IPMAXBRYWTM",
        producto: "IPLAY MAX BERRY WATERMELON",
        descripcion:
          "Este vape desechable lo tiene todo: increíbles combinaciones de sabores que tienes que probar, una batería interna de 1200 mAh, 8 ml. de e-líquido pre cargado de nicotina de sal al 5%",
        marca: "IPLAY",
        peso: "62gr.",
        precio: 250,
        stock: 10,
        usos: "2500",
        idCategoria: "berries",
        imagen: "/src/components/Imagenes/BERRY WATERMELON.jpg",
      },
      {
        id: "IPMAXBLURZLMN",
        producto: "IPLAY MAX BLUE RAZ LEMON",
        descripcion:
          "Este vape desechable lo tiene todo: increíbles combinaciones de sabores que tienes que probar, una batería interna de 1200 mAh, 8 ml. de e-líquido pre cargado de nicotina de sal al 5%",
        marca: "IPLAY",
        peso: "62gr.",
        precio: 250,
        stock: 10,
        usos: "2500",
        idCategoria: "water",
        imagen: "/src/components/Imagenes/BLUE RAZ LEMON.jpg",
      },
      {
        id: "IPMAXENGYWTRICE",
        producto: "IPLAY MAX ENERGY WATER ICE",
        descripcion:
          "Este vape desechable lo tiene todo: increíbles combinaciones de sabores que tienes que probar, una batería interna de 1200 mAh, 8 ml. de e-líquido pre cargado de nicotina de sal al 5%",
        marca: "IPLAY",
        peso: "62gr.",
        precio: 250,
        stock: 10,
        usos: "2500",
        idCategoria: "water",
        imagen: "/src/components/Imagenes/ENERGY WATER ICE.jpg",
      },
      {
        id: "IPMAXGPESTWBRY",
        producto: "IPLAY MAX GRAPE STRAWBERRY",
        descripcion:
          "Este vape desechable lo tiene todo: increíbles combinaciones de sabores que tienes que probar, una batería interna de 1200 mAh, 8 ml. de e-líquido pre cargado de nicotina de sal al 5%",
        marca: "IPLAY",
        peso: "62gr.",
        precio: 250,
        stock: 10,
        usos: "2500",
        idCategoria: "berries",
        imagen: "/src/components/Imagenes/GRAPE STRAWBERRY.jpg",
      },
      {
        id: "IPMAXGVARPBRY",
        producto: "IPLAY MAX GUAVA RASPBERRY",
        descripcion:
          "Este vape desechable lo tiene todo: increíbles combinaciones de sabores que tienes que probar, una batería interna de 1200 mAh, 8 ml. de e-líquido pre cargado de nicotina de sal al 5%",
        marca: "IPLAY",
        peso: "62gr.",
        precio: 250,
        stock: 10,
        usos: "2500",
        idCategoria: "berries",
        imagen: "/src/components/Imagenes/GUAVA RASPBERRY.jpg",
      },
      {
        id: "IPMAXSTWBRYLCHE",
        producto: "IPLAY MAX STRAWBERRY LYCHE",
        descripcion:
          "Este vape desechable lo tiene todo: increíbles combinaciones de sabores que tienes que probar, una batería interna de 1200 mAh, 8 ml. de e-líquido pre cargado de nicotina de sal al 5%",
        marca: "IPLAY",
        peso: "62gr.",
        precio: 250,
        stock: 10,
        usos: "2500",
        idCategoria: "berries",
        imagen: "/src/components/Imagenes/STRAWBERRY LYCHE.jpg",
      },
    ];
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!idCategoria) {
          resolve(productosHardcode);
        } else {
          resolve(
            productosHardcode.filter(
              (producto) => producto.idCategoria === idCategoria
            )
          );
        }
      }, 100);
    });
    promesa.then((resolve) => {
      setProductos(resolve);
    });
  }, [idCategoria, productos, setProductos]);

  return (
    <div className="bg-$gray-100 container">
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
