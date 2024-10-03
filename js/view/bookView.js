function render(books) {
  const container = document.querySelector('#container');
  container.innerHTML = '<br>'; // removes the previous elements

  const heading = document.createElement('h1');
  heading.innerHTML = '<center>Stephen King Books</center>';
  heading.style.marginTop = '3%';
  heading.style.textAlign = 'center';
  container.appendChild(heading);

  const list = document.createElement('div');
  list.style = `display: flex; margin-top: 5%; flex-wrap: wrap; gap: 30px; justify-content: center;`;
  list.className = `text-center`;

  books[0].forEach(({ id, Title, Year, Publisher, handle }) => {
    console.log("HELP", id, Title, Year, Publisher, handle);
    const item = document.createElement('div');
   
    item.className = `card text-white bg-success mb-3`;
    item.style.maxWidth = '18rem';
    item.innerHTML = `<div class="card-header">${Title}</div>
                            <div class="card-body">
                                <h5 class="card-title">${Title}</h5>
                                <div class="card-text">
                                    <p>Year: ${Year}</p>
                                    <p>Publisher: ${Publisher}</p>
                                    <p>Handle: ${handle}</p>
                                </div>
                            </div>`;
    list.appendChild(item);
  });

  container.appendChild(list);
}

export default { render };

/*function render(books) {
  const container = document.querySelector('#container');
  container.innerHTML = '<br>'; // removes the previous elements
  const list = document.createElement('div');
  const heading = document.createElement('h1');
 
  list.style = `display: flex; margin-top: 5%; flex-wrap: wrap; gap: 30px;`;
  list.className = `text-center`;
  console.log("booksview", books);
  heading.innerHTML = '<center>All of Stephen King Books</center>';
  heading.style.marginTop = '3%';
  list.appendChild(heading);
  
  books[0].forEach(({ id, Title, Year, Publisher, handle }) => { 
    console.log("HELP", id, Title, Year, Publisher, handle);
    const item = document.createElement('div');
    
    item.className = `row card text-white bg-success mb-3" style="max-width: 18rem;`;
    item.innerHTML = `<div class="card-header">${Title}</div>
                            <div class="card-body">
                                <h5 class="card-title">${Title}</h5>
                                <p class="card-text">
                                    <p>Year: ${Year}</p>
                                    <p>Publisher: ${Publisher}</p>
                                    <p>Handle: ${handle}</p>
                                </p>
                            </div>`;
    list.appendChild(item);
  });

  container.appendChild(list);
}

export default { render };*/
