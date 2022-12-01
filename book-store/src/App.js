import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Footer from './components/Footer';
import LatestRelease from './components/LatestRelease';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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
    <Router>
      <div className="App">
        <NavBar changeCategory={changeCategory} />
        <Routes>
          <Route exact path='/' element={<Home books={selectValue} selectValue={selectValue} />} />
          <Route path='/latestRelease' element={<LatestRelease book={selectValue} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
