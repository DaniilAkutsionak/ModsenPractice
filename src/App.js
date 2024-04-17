import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import BookDetails from './BookDetails';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBooks books={books} setBooks={setBooks} startIndex={startIndex} setStartIndex={setStartIndex} />} />
        <Route path="/book/:bookId" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
