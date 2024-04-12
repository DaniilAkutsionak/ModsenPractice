async function fetchDataFromMultipleSources(urls) {
    try {
      const fetchPromises = urls.map(url => fetch(url).then(response => {
        if (!response.ok) {
          throw new Error(`Ошибка при загрузке данных с ${url}: ${response.status}`);
        }
        return response.json();
      }));
  
      const results = await Promise.all(fetchPromises);
      console.log('Данные с всех источников загружены:', results);
      return results;
    } catch (error) {
      console.error('Произошла ошибка:', error);
      return null;
    }
  }
  
  const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/todos'
  ];
  
  fetchDataFromMultipleSources(urls)
    .catch(error => console.error('Ошибка в ходе выполнения функции fetchDataFromMultipleSources:', error));
  