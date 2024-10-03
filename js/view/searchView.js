function render(searchResults) {
  const container = document.querySelector('#container');
  container.innerHTML = '';

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.id = 'search-input';
  searchInput.className = 'form-control';
  searchInput.placeholder = 'Search for books...';

  const searchButton = document.createElement('button');
  searchButton.textContent = 'Search';
  searchButton.id = 'search-button';
  searchButton.className = 'btn btn-primary';

  const inputGroup = document.createElement('div');
  inputGroup.className = 'input-group mb-3';
  inputGroup.appendChild(searchInput);
  inputGroup.appendChild(searchButton);

  container.appendChild(inputGroup);

  
  searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    displayResults(searchResults.filter(book => book.data.toLowerCase().includes(query)));
    const searchButton = document.createElement('button');
    searchButton.textContent = 'Search';
    searchButton.id = 'search-button';
   
  });
 

  container.appendChild(searchInput);
  container.appendChild(searchButton);
}


function displayResults(searchResults) {
  const resultsContainer = document.createElement('div');
  resultsContainer.id = 'results-container';
  
  searchResults.forEach(searchResults => {
    const bookElement = document.createElement('div');
    bookElement.innerHTML = `<h3>${searchResults.Title}</h3><p>${data}</p>`;
    resultsContainer.appendChild(bookElement);
  });
  
  const container = document.querySelector('#container');
  container.appendChild(resultsContainer);
}

export default { render, displayResults};
