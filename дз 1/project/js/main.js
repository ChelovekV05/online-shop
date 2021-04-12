const products = [
    {id: 1, title: 'Notebook', price: 2000, src: 'img/'},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
const renderProduct = (item, src = "https://via.placeholder.com/400") => {
    return `<div class="product-item">
                <img src=${src} alt="img" class="product-img">
                <h3 class="product-h3">${item.title}</h3>
                 <p class="product-price">${item.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML += list.map(item => renderProduct(item)).join('');
};

renderPage(products);