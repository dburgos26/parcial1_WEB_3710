import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Detail from './Detail';


/*

const mockData = [
    {
        "id": 1,
        "nombre": "Café Especial para tí",
        "tipo": "Blend",
        "region": "Angelópolis, Antioquia"
    },
    {
        "id": 2,
        "nombre": "Café Especial Navegante",
        "tipo": "Café de Origen",
        "region": "Guatapé, Antioquia"
    }
]


*/

async function getDatos() {
    const response = await fetch("http://localhost:3001/cafes");
      const data = await response.json();
      return data;
    }


export default function List() {
    const [selectedCofie, setSelectedCofie] = React.useState(null);

    const [mockData, setMockData] = React.useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getDatos();
            setMockData(data);
        }
        fetchData();
    }, []);


    const handleClick = (coffe) => {
        setSelectedCofie(coffe);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Tipo</th>
                                <th>Region</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockData.map((coffee) => (
                                <tr key={coffee.id} onClick={() => handleClick(coffee)}>
                                    <td>{coffee.id}</td>
                                    <td>{coffee.nombre}</td>
                                    <td>{coffee.tipo}</td>
                                    <td>{coffee.region}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
                {selectedCofie && (
                    <Col md={4}>
                        <Detail coffeid={selectedCofie.id} />
                    </Col>
                )}
            </Row>
        </Container>
    );
}



