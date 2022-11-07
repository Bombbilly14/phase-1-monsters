fetch ('http://localhost:3000/monsters/?_limit=50&_page=3')
.then (res => res.json())
.then (data => data.forEach(monster => renderMonsters(monster)))



function renderMonsters(monster) {
    const li = document.createElement('li');
    li.className = "list-li"

    const h3 = document.createElement('h3');
    h3.textContent = monster.name;

    const mAge = document.createElement('h3')
    mAge.textContent= 'Age :' + monster.age

    const mDescrip= document.createElement('p');
    mDescrip.textContent = monster.description

    li.append(h3, mAge, mDescrip);
    document.querySelector('#monster-container').append(li)
}
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
})




// const addButton = document.createElement('button')
// addButton.textContent = 'Add'
document.querySelector('#create-monster').append(form);