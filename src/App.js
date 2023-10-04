import BookList from "./components/ListBooks";
import Navbar from "./components/Navbar";
import "./App.css";
// import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BookList />
    </div>
  );
}

export default App;
