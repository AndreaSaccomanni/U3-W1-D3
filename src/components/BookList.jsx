import SingleBook from "./SingleBook";
import books from "../books/scifi.json";
import { Col, Container, Form, Row } from "react-bootstrap";

// BookList mappa l'array books che contiene tutti i libri di scifi.json (in questo caso)
//e passa ogni oggetto dell'array come prop di SingleBook, quindi ci sarà una Card per ogni oggetto(libro)

const BookList = () => {
  return (
    <Container>
      <div className="d-flex flex-column w-50 mx-auto mb-5">
        <Form.Label htmlFor="search" className="fs-2">
          Search your books
        </Form.Label>
        <Form.Control type="text" id="search" placeholder="Search books..." />
      </div>
      <Row xs={1} sm={2} md={3} lg={4} className="gy-4">
        {books.map((libro) => {
          return (
            <Col key={libro.asin}>
              <SingleBook book={libro} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BookList;
