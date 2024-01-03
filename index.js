function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch books. Status: ${response.status}`);
      }
      return response.json();
    })
    .then(booksData => {
      renderBooks(booksData); 
      return booksData;
      })
    .catch(error => {
      console.error('Error fetching books:', error.message);
      throw error;
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


