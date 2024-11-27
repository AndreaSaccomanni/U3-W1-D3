import { Card } from "react-bootstrap";
//creao una funzione con un oggetto book come prop
const SingleBook = ({ book }) => {
  return (
    //la funzione ritorna una card composta da un'immagine e un titolo
    //In bookList ci sarà un'altra funzione che ritornerà un SingleBook
    //per ogni book presente nell'array  di oggetti(contenente libri) fornito

    <Card className="h-100">
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>
          <strong>Title: </strong>
          {book.title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
