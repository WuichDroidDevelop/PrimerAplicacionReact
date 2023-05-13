import React from "react";
import Card from "./card";
import imagen1 from './../assets/1.png';
import imagen2 from './../assets/2.png';
import imagen3 from './../assets/3.png';

const informacionTarjeta = [
    {
        id:1,
        titulo: "Curso de Angular",
        imagen:imagen1,
        instructor: "Luis Oswaldo Sanchez"
    },
    {
        id:2,
        titulo: "Curso de GoogleClound",
        imagen:imagen2,
        instructor: "Duran Solares Francisco"
    },
    {
        id:3,
        titulo: "Curso de Java",
        imagen:imagen3,
        instructor: "Judas Izcariote"
    },
]

export default function cards() {
    console.log(informacionTarjeta);
  return (
    <>
      <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className="row">
            {
                informacionTarjeta.map(x => (
          <div className="col-md-4" key={x.titulo}>
            <Card key={x.id} id={x.id} title={x.titulo} image={x.imagen} instructor={x.instructor}></Card>
          </div>
          ))
          }
        </div>
      </div>
    </>
  );
}
