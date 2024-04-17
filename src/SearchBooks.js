import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SearchBooks({ books, setBooks, startIndex, setStartIndex }) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('relevance');

  const fetchBooks = async (newSearch = false) => {
    if (newSearch) {
      setBooks([]);
      setStartIndex(0);
    }
  
    setLoading(true);
    setError(null);
    let url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    if (category !== 'all') {
      url += `+subject:${category}`;
    }
    url += `&startIndex=${startIndex}&maxResults=30&orderBy=${sort}&key=AIzaSyAp_SEVuEBh_sl5m5zwDEbLclu-D8k1Q2w`;
    
    try {
      const response = await axios.get(url);
      if (newSearch) {
        setBooks(response.data.items);
      } else {
        setBooks(prevBooks => [...prevBooks, ...response.data.items]);
      }
      setStartIndex(prevIndex => prevIndex + 30);
    } catch (err) {
      setError("Ошибка при загрузке данных");
      console.error(err);
    }
    setLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query) fetchBooks(true);
  };

  const handleLoadMore = () => {
    if (!loading) {
      setStartIndex(startIndex + 30);
      fetchBooks();
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Введите название книги"
        />
        <button type="submit">Поиск</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div className="book-grid">
        {books.map(book => (
          <div key={book.id} className="book-item">
            <Link to={`/book/${book.id}`}>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150x200?text=No+Cover'}
                alt={book.volumeInfo.title}
              />
              <div>{book.volumeInfo.title}</div>
            </Link>
          </div>
        ))}
      </div>
      {books.length > 0 && (
        <button onClick={handleLoadMore} disabled={loading}>Load more</button>
      )}
    </div>
  );
}

export default SearchBooks;
