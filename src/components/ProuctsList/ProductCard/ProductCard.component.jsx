import { Card } from "react-bootstrap";

export default function ProductCardComponent() {
  return (
    <>
    <Card style={{width: '250px'}}>
        <Card.Img variant="top" src="https://placehold.co/250x200" />
        <Card.Body style={{textOverflow: 'ellipsis'}}>
            <Card.Title>R$ 999.99</Card.Title>
            <Card.Text >Pellentesque feugiat elit quis orci volutpat varius. Nullam sagittis lectus non est vehicula, quis cursus risus semper. Maecenas ac dui eu nisi rhoncus mattis id quis dolor. </Card.Text>
        </Card.Body>
    </Card>
    </>
  )
}
