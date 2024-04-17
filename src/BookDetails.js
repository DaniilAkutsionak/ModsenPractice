import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function BookDetails() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=AIzaSyAp_SEVuEBh_sl5m5zwDEbLclu-D8k1Q2w`);
        setBook(response.data);
      } catch (err) {
        console.error("Error loading the book details:", err);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="book-details-container">
      <div className="book-cover">
        <Link to="/" className="return-home">Return to homepage</Link>
        <h1>{book.volumeInfo.title}</h1>
        <img
          src={book.volumeInfo.imageLinks?.large || book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/300x400?text=No+Cover'}
          alt={book.volumeInfo.title}
        />
      </div>
      <div className="book-info">
        <p><strong>Author(s):</strong> {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'No authors available'}</p>
        <p><strong>Categories:</strong> {book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : 'No categories available'}</p>
        <p>{book.volumeInfo.description}</p>
      </div>
    </div>
  );
}

export default BookDetails;
