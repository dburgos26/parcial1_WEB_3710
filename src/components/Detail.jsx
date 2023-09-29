import React from "react";
import { useEffect } from "react";

/*

const mockData = {
    "id": 1,
    "nombre": "Café Especial para tí",
    "tipo": "Blend",
    "region": "Angelópolis, Antioquia",
    "notas": "Panela, Durazno, Caramelo",
    "fecha_cultivo": "2023-01-18",
    "altura": 1920,
    "imagen": "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-para-ti-cafe-colombiano_720x.png?raw=true"
}

*/


async function getDatos(coffeid) {
const response = await fetch("http://localhost:3001/cafes/"+coffeid);
  const data = await response.json();
  return data;
}


export default function Detail({ coffeid }) {


    const [mockData, setMockData] = React.useState([]);

    console.log(coffeid);

    useEffect(() => {
        async function fetchData() {
            const data = await getDatos(coffeid);
            console.log(data);
            setMockData(data);
        }
        fetchData();
    }, [coffeid]);


    return (
        <>
            <h2>{coffeid}</h2>
            <p><strong>nombre:</strong> {mockData.nombre}</p>
            <p><strong>tipo:</strong> {mockData.tipo}</p>
            <p><strong>Region:</strong> {mockData.region}</p>
            <p><strong>Notas:</strong> {mockData.notas}</p>
            <p><strong>Fecha de cultivo:</strong> {mockData.fecha_cultivo}</p>
            <p><strong>Altura:</strong> {mockData.altura}</p>
            <img src={mockData.imagen} alt={mockData.nombre} />
        </>
    );
}
