import SingleBook from "./SingleBook";
import books from "../books/scifi.json";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Component } from "react";

// BookList mappa l'array books che contiene tutti i libri di scifi.json (in questo caso)
//e passa ogni oggetto dell'array come prop di SingleBook, quindi ci sarà una Card per ogni oggetto(libro)

class BookList extends Component {
  state = {
    searchInput: "",
    filteredBooks: books
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Input: ", this.state.searchInput);
    //dichiaro searchInput
    const searchInput = this.state.searchInput;
    //creo un array che contiene solo i libri che contengono quello che viene inserito nell'input
    const filteredArrBooks = books.filter((book) => book.title.toLowerCase().includes(searchInput.toLowerCase()));
    //aggiorno lo state e filteredBooks non è più books, quindi tutti i libri, ma solo quelli filtrati
    //dovrò cambiare l'array che verrà mappato con filteredBook, altrimenti non vedrei il cambiamento
    this.setState({ filteredBooks: filteredArrBooks });
  };
  handleReset = (e) => {
    e.preventDefault();
    this.setState({ filteredBooks: books });
    
    this.setState({ searchInput: "" });
  };

  render() {
    const filteredBooks = this.state.filteredBooks;
    return (
      <Container>
        <div className="d-flex flex-column w-50 mx-auto mb-5">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="search">
              <Form.Label className="fs-2">Search your books</Form.Label>
              <Form.Control //prittier-ignored
                type="text"
                value= {}
                placeholder="Search books..."
                onChange={(e) => this.setState({ searchInput: e.target.value })}
              />
            </Form.Group>
            <Button className="mt-3 py-1" type="submit">
              Search
            </Button>
            <Button className="mt-3 ms-3 bg-danger py-1" type="button" onClick={this.handleReset}>
              Reset
            </Button>
          </Form>
        </div>

        <Row xs={1} sm={2} md={3} lg={4} className="gy-4 mb-5">
          {filteredBooks.map((libro) => {
            return (
              <Col key={libro.asin}>
                <SingleBook book={libro} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
