'use strict';

const peopleList = document.getElementById("people-list");

async function loadRandomUsers() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=10&nat=CA&seed=same");
    const data = await response.json();
    const users = data.results;

    users.forEach(user => {
      const li = document.createElement("li");
      li.classList.add("person");

      li.innerHTML = `
        <img class="person-image" src="${user.picture.thumbnail}" alt="${user.name.first} ${user.name.last}">
        <div class="person-info">
          <p class="person-name">${user.name.first} ${user.name.last}</p>
          <p class="person-location">${user.location.city}, ${user.location.country}</p>
        </div>
        <button class="btn-connect">
          <i class="fa-solid fa-user-plus"></i>
        </button>
      `;

      peopleList.appendChild(li);
    });

  } catch (error) {
    console.error(error.message);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadRandomUsers();
});

localStorage.setItem('projob_users', JSON.stringify({
    'kay.luz': 'class2026'
}));

function handleLogin() {

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const keep = document.getElementById('keepLoggedIn').checked;

    const stored = JSON.parse(localStorage.getItem('projob_users') || '{}');

    const err = document.getElementById('errorMsg');

    err.classList.remove('show');
    err.textContent = '';

    if (!stored[username]) {

        err.textContent = 'Username is incorrect';
        err.classList.add('show');

    } else if (stored[username] !== password) {

        err.textContent = 'Password is incorrect';
        err.classList.add('show');

    } else {

        localStorage.setItem('projob_session', JSON.stringify({
            username,
            loggedIn: true
        }));

        if (keep) {
            localStorage.setItem('projob_remember', username);
        } else {
            localStorage.removeItem('projob_remember');
        }

        window.location.href = 'home.html';
    }
}

document.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        handleLogin();
    }
});

const remembered = localStorage.getItem('projob_remember');

if (remembered) {
    document.getElementById('username').value = remembered;
    document.getElementById('keepLoggedIn').checked = true;
}

const session = JSON.parse(localStorage.getItem('projob_session') || 'null');

if (session && session.loggedIn) {
    window.location.href = 'home.html';
}
