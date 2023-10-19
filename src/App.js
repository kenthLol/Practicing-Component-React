import BookList from "./components/ListBooks";
import Navbar from "./components/Navbar";
import ListFavorites from "./components/ListFavorites";
import dataBook from "./data/books";
import "./App.css";

import { useState } from "react";

function App() {
  function addBookToFavorite(element) {
    console.log(element);
    let tempBookList = [...ListFavoriteBooks];
    tempBookList.push(element);
    setListFavoriteBooks(tempBookList);
  }

  function removeBookFromFavorites(element) {
    const updatedFavorites = ListFavoriteBooks.filter(
      (book) => book.id !== element.id
    );
    setListFavoriteBooks(updatedFavorites);
  }

  const [bookList, setBookList] = useState(dataBook);
  const [ListFavoriteBooks, setListFavoriteBooks] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <BookList elements={bookList} fnAddFavorites={addBookToFavorite} />
          </div>
          <div className="col-md-3">
            <ListFavorites
              elements={ListFavoriteBooks}
              fnRemoveBookFromFavorites={removeBookFromFavorites}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
