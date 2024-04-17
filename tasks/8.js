console.log("Восьмое задание"); 

function fetchData(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Сетевая ошибка при загрузке данных');
        }
        return response.json();
      })
      .catch(error => console.error('Ошибка при загрузке данных:', error));
  }
  
  function fetchAllData(url1, url2) {
    return Promise.all([fetchData(url1), fetchData(url2)])
      .then(results => {
        const [userData, postData] = results;
        return {
          user: userData,
          posts: postData
        };
      })
      .catch(error => console.error('Ошибка при загрузке данных:', error));
  }
  
  const userDataUrl = 'https://jsonplaceholder.typicode.com/users/1';
  const postDataUrl = 'https://jsonplaceholder.typicode.com/posts?userId=1';
  
  fetchAllData(userDataUrl, postDataUrl)
  .then(data => {
    console.log('Объединенные данные:', data);
    console.log("_________________________"); 
  
  })
  .catch(error => {
    console.error('Ошибка во время выполнения запросов:', error);
    console.log("_________________________"); 
  
  });
