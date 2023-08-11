import { Card } from "react-bootstrap";

export default function ProductCardComponent({item}) {

    const MoneyFormatter = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      })


  return (
    <>
    <Card style={{margin: '5px', maxHeight: '350px'}}>
        <Card.Img variant="top" src="https://placehold.co/250x200" />
        <Card.Body style={{textOverflow: 'ellipsis'}}>
            <Card.Title>{MoneyFormatter.format(item.price)}</Card.Title>
            <Card.Text >{item.description} </Card.Text>
        </Card.Body>
    </Card>
    </>
  )
}
