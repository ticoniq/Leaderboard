import './styles/style.css';
import Spinner from './assets/spinner.gif';

const addUserBtn = document.querySelector('.add-user');
const refresh = document.querySelector('.refresh');
const ul = document.querySelector('.ul');
const loadImg = document.querySelector('.load');

const errorMsg = (message, color) => {
  const msg = document.querySelector('.msg');
  msg.style.display = 'block';
  msg.innerText = message;
  msg.style.background = color;
  setTimeout(() => {
    msg.style.display = 'none';
  }, 3000);
};

let gameId = '';
const createGame = async () => {
  const game = 'Fifa-2023';

  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name: game }),
    });

    const data = await response.json();
    // eslint-disable-next-line prefer-destructuring
    gameId = data.result.split(' ')[3];
  } catch (error) {
    errorMsg('An error occurred', 'red');
  }
};

const addUser = async (e) => {
  const name = document.querySelector('.name').value;
  const score = document.querySelector('.score').value;

  const button = document.querySelector('.add-user');
  button.disabled = true;

  if (name === '' && score === '') {
    errorMsg('All fields are required', 'red');
  } else {
    try {
      const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ user: name, score }),
      });

      document.querySelector('.name').value = '';
      document.querySelector('.score').value = '';

      const data = await response.json();
      errorMsg(data.result, 'green');
    } catch (error) {
      errorMsg('An error occurred', 'red');
    }
  }

  button.disabled = false;
  e.preventDefault();
};

// Function to refresh the scores for a game
const getUsers = async () => {
  const loader = document.createElement('img');
  loader.className = 'spinner';
  loader.src = Spinner;
  loadImg.appendChild(loader);

  try {
    setTimeout(async () => {
      const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
      const data = await response.json();
      const users = data.result;

      ul.innerHTML = '';

      if (users.length === 0) {
        const list = document.createElement('li');
        const p = document.createElement('p');
        p.className = 'error';
        p.textContent = 'No user available';
        list.appendChild(p);
        ul.appendChild(list);
      } else {
        users.forEach((user, index) => {
          const list = document.createElement('li');
          list.innerHTML = `
            <span class="index">${index += 1}</span>
            <p>${user.user}</p>
            <span class="scores">${user.score}</span>
          `;
          ul.appendChild(list);
        });
      }
      loader.style.display = 'none';
    }, 2000);
  } catch (error) {
    errorMsg('An error occurred', 'red');
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  await createGame();
  getUsers();
});
addUserBtn.addEventListener('click', addUser);
refresh.addEventListener('click', getUsers);
