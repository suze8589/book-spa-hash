/*function render() {
  const container = document.querySelector('#container');
  container.innerHTML = ''; //removes the previous elements
};

export default { render };*/

function render(shorts) {
  const container = document.querySelector('#container');
  container.innerHTML = '<br>'; // removes the previous elements

  const heading = document.createElement('h1');
  heading.innerHTML = '<center>Shorts Stories</center>';
  heading.style.marginTop = '3%';
  heading.style.textAlign = 'center';
  container.appendChild(heading);

  const list = document.createElement('div');
  list.style = `display: flex; margin-top: 5%; flex-wrap: wrap; gap: 30px; justify-content: center;`;
  list.className = `text-center`;

  shorts[0].forEach(({ title, year, type, notes }) => {
    console.log("HELP", title, year, type, notes);
    const item = document.createElement('div');
   
    item.className = `card text-white bg-success mb-3`;
    item.style.maxWidth = '18rem';
    item.innerHTML = `<div class="card-header">Title</div>
                            <div class="card-body">
                                <h5 class="card-title">${title}</h5>
                                <div class="card-text">
                                    <p>Year: ${year}</p>
                                    <p>Type: ${type}</p>
                                    <p>Notes: ${notes}</p>
                                </div>
                            </div>`;
    list.appendChild(item);
  });

  container.appendChild(list);
}

export default { render };
