const URL = 'https://jsonplaceholder.typicode.com/users';
const $list = document.querySelector(".list");
const $item = document.querySelector(".item");

fetch(URL)
    .then(res => res.json())
    .then(res => res.forEach(element => {
        let html = `
        <li class="item">
            <h3 class="item-title">ID: ${element.id}</h3>
            <p class="item-text">NAME: ${element.name}</p>
            <p class="item-email">EMAIL: ${element.email}</p>
            <p class="item-phone">PHONE: ${element.phone}</p>
            <a href="#" class="item-website">SITE: ${element.website}</a>
        </li>
    `

        $list.innerHTML += html;
    }))

$list.append($item);