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

