function render(villains) {
  const container = document.querySelector('#container');
  container.innerHTML = '<br>'; // removes the previous elements

  const heading = document.createElement('h1');
  heading.innerHTML = '<center>The Villains</center>';
  heading.style.marginTop = '3%';
  heading.style.textAlign = 'center';
  container.appendChild(heading);

  const list = document.createElement('div');
  list.style = `display: flex; margin-top: 5%; flex-wrap: wrap; gap: 30px; justify-content: center;`;
  list.className = `text-center`;

  villains[0].forEach(({ name, gender, status}) => {
    /*console.log("HELP", name, gender, status);*/
    const item = document.createElement('div');
   
    item.className = `card text-white bg-danger mb-3`;
    item.style.maxWidth = '18rem';
    item.innerHTML = `<div class="card-header">Villains</div>
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <div class="card-text">
                                    <p>Gender: ${gender}</p>
                                    <p>Status: ${status}</p>
                                    
                                </div>
                            </div>`;
    list.appendChild(item);
  });

  container.appendChild(list);
}

export default { render };

