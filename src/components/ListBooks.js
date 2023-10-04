import dataBook from "../data/books";
import Book from "./Book";
import "../Book.css";

function BookList() {
  let lstBooks = dataBook.map((element) => {
    return (
      <Book
        title={element.title}
        author={element.author}
        genre={element.genre}
        year={element.year}
        image={element.image}
      />
    );
  });

  return <div className="card-grid-container">{lstBooks}</div>;
}

export default BookList;
