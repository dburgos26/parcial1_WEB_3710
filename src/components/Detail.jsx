import React from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { FormattedMessage, FormattedDate } from "react-intl";
import "./Detail.css";

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
    const response = await fetch("http://localhost:3001/cafes/" + coffeid);
    const data = await response.json();
    return data;
}


export default function Detail({ coffeid }) {


    const [mockData, setMockData] = React.useState([]);


    useEffect(() => {
        async function fetchData() {
            const data = await getDatos(coffeid);
            setMockData(data);
        }
        fetchData();
    }, [coffeid]);


    return (
        <Card border="dark" bg="#E0BBBB33" className="border-0">
            <Card.Body>
                <Card.Title>
                    <strong>{mockData.nombre}</strong>
                </Card.Title>
                <Card.Text>
                    <FormattedDate value={new Date(mockData.fecha_cultivo)}
                        year='numeric'
                        month='numeric'
                        day='numeric'/>
                </Card.Text>
                <Card.Img src={mockData.imagen} alt={mockData.nombre} />
                <Card.Text>
                    <FormattedMessage id="notes" />
                    <br />
                    {mockData.notas}
                </Card.Text>
                <Card.Text>
                    <strong>
                        <FormattedMessage id="Height" />:
                    {" "}
                    {mockData.altura}{" "}
                    <FormattedMessage id="masl" />
                    </strong>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
