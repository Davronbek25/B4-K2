import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"
import NavBar from "./components/Navbar";
import Home from "./components/Home";

function App() {

  const [books, setBooks] = useState([])
 const [selectValue, setSelectValue] = useState([])

  const url = "http://localhost:7000/books"

  useEffect(() => {
    const getBooks = async () => {
      let books = await fetchBooks()
      setBooks(books)
      setSelectValue(books[0].fantasy)
    } 
    
    getBooks()
  }, [])
  
  const fetchBooks = async () => {
    const res = await fetch(url)
    const data = await res.json()

    return data
  }

  const changeCategory = (e) => {
    let selectVal = e.target.value
    setSelectValue(Object.values(books[selectVal])[0])
  }
  
  return (
    <div className="App">
      <NavBar changeCategory={changeCategory} />
      <Home books={selectValue} selectValue={selectValue} />
    </div>
  );
}

export default App;
