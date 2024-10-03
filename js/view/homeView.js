/*var books;
function render(onClick) {
  const container = document.querySelector('#container');
  const button = document.createElement('button');
  const div = document.createElement('div');

  div.className = `text-center`;
  button.className = `btn btn-primary`;
  button.type = `button`;
  button.style = `margin-top: 10%; margin-bottom: 10%`;

  div.appendChild(button);

  container.innerHTML = ''; //removes the previous elements
  button.innerText = `CLICK ME FOR RANDOM BOOK`;

  button.addEventListener('click', async e => {
    e.preventDefault();
   console.log("welcome to the homeView");

    const {
      Title,
      Year,
      villains,
      villains: name
    } = await onClick(parseInt(Math.random() * books.length));
    console.log("I'm trying to find a book!", books);
    const elem = document.createElement('div');
    elem.className = `text-center`;

    elem.innerHTML = `<h1>${Title}</h1>
        <h3>${Year}</h3>
        <h3>${villains}</h3>
        <h3>${name}</h3>`;

    if (container.childElementCount > 1) {
      container.removeChild(container.lastChild);
    }

    container.appendChild(elem);
  });

  container.appendChild(div);
};

export default { render };*/

function render(onClick) {
  const container = document.querySelector('#container');
  const button = document.createElement('button');
  const div = document.createElement('div');

  div.className = `text-center`;
  button.className = `btn btn-success`;
  button.type = `button`;
  button.style = `margin-top: 10%; margin-bottom: 10%`;

  div.appendChild(button);

  container.innerHTML = ''; // Removes the previous elements
  button.innerText = `CLICK ME FOR RANDOM BOOK`;

  button.addEventListener('click', async e => {
    e.preventDefault();
    console.log("Welcome to the homeView");
    
    const books = await onClick(Math.floor(Math.random() * 63));
    console.log("I'm trying to find a book!", books);

    const { Title, Year, Publisher, villains} = books.data[Math.floor(Math.random() * 63)];

    villains.forEach(({name}) => {
    const elem = document.createElement('div');
    elem.className = `text-center`;

    elem.innerHTML = `<h1> Book Title: ${Title}</h1>
                      <h3> Year: ${Year}</h3>
                      <h3> Publisher: ${Publisher}</h3>
                      <h3> Villain name: ${name}</h3>`;

                    

    if (container.childElementCount > 1) {
      container.removeChild(container.lastChild);
    }

    container.appendChild(elem);
  });
});
  container.appendChild(div);
}  

export default { render };
