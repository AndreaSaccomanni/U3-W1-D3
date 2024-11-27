/*import { Col, Container, Row } from "react-bootstrap";
import horror from "../books/horror.json";
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";

import Card from "react-bootstrap/Card";
import { Component } from "react";
import { Button } from "react-bootstrap";
class AllTheBooks extends Component {
  state = {
    books: fantasy
  };
  render() {
    return (
      <Container>
        <div className="d-flex gap-3 justify-content-center my-3">
          <Button onClick={() => this.setState({ books: history })} variant="success">
            History
          </Button>
          <Button onClick={() => this.setState({ books: horror })} variant="warning">
            Horror
          </Button>
          <Button onClick={() => this.setState({ books: fantasy })} variant="dark">
            Fantasy
          </Button>
          <Button onClick={() => this.setState({ books: romance })} variant="info">
            Romance
          </Button>
          <Button onClick={() => this.setState({ books: scifi })} variant="danger">
            Scifi
          </Button>
        </div>

        <Row xs={1} sm={2} md={3} lg={4} className="gy-3">
          {this.state.books.map((book) => {
            return (
              <Col key={book.asin}>
                <Card>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <div>
                      <Card.Text className="d-flex justify-content-around mt-4">
                        <p>
                          <strong>Category: </strong>
                          {book.category}
                        </p>
                        <p>
                          <strong>Price: </strong>
                          {book.price}$
                        </p>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default AllTheBooks;
*/
