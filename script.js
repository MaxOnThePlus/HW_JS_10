const avangers = JSON.parse(avangersInfo);
const ava = document.querySelector('.avangers');
avangers.forEach(element => {
    ava.insertAdjacentHTML('afterbegin',`
    <div class="card_style">
    <img src="${element.url}" alt="#" width="240px" height = "320px">
    <h3>${element.name}</h3>
    <p>НАСТОЯЩЕЕ ИМЯ:${element.realname}</p>
    <p>ОСОБЕННОСТИ:${element.capabilities}</p>
    </div>
    `);
});