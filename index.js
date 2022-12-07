const URL = 'https://jsonplaceholder.typicode.com/users';
const $list = document.querySelector(".list");
const $item = document.querySelector(".item");

fetch(URL)
    .then(res => res.json())
    .then(res => res.forEach(element => {
        let html = `
        <li class="item">
            <h3 class="item-title">${element.id}</h3>
            <p class="item-text">${element.name}</p>
            <p class="item-email">${element.email}</p>
            <p class="item-phone">${element.phone}</p>
            <p class="item-website">${element.website}</p>
        </li>
    `

        $list.innerHTML += html;
    }))

$list.append($item);