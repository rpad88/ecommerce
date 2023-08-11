import { Button, Card } from "react-bootstrap";
import * as Styled from './productCard.style'

export default function ProductCardComponent({item}) {

    const MoneyFormatter = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      })


  return (
    <>
    <Styled.Card style={{margin: '5px'}}>
        <Card.Img variant="top" src="https://placehold.co/250x200" />
        <Card.Body className="d-flex flex-column justify-content-center" style={{ overflow: 'hidden', textOverflow: 'ellipsis'}}>
            <Card.Title>{MoneyFormatter.format(item.price)}</Card.Title>
            <Card.Text>{item.description} </Card.Text>
            <Button variant="outline-secondary" className="mx-auto">Adicionar ao carrinho</Button>
        </Card.Body>
    </Styled.Card>
    </>
  )
}
