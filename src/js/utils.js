const nav = document.querySelector('.header__list');

//Обработчик событий табов переключения окна между корзиной и каталогом через делегирование событий
const onNavigation = () => {
    nav.addEventListener('click', (evt) => {
        const target = evt.target.closest('li');
        const catalog = document.querySelector('.catalog');
        const cart = document.querySelector('.cart');
        if (target.dataset.nav === 'catalog' && catalog.classList.contains('js-nodisplay')) {
            catalog.classList.remove('js-nodisplay');
            catalog.classList.add('js-display');
            cart.classList.add('js-nodisplay');
            cart.classList.remove('js-display');
        };
        if (target.dataset.nav === 'cart' && cart.classList.contains('js-nodisplay')) {
            catalog.classList.add('js-nodisplay');
            catalog.classList.remove('js-display');
            cart.classList.remove('js-nodisplay');
            cart.classList.add('js-display');
        };
    })
};

//отрисовка каталога

const renderCatalog = (data) => {
    const catalogList = document.querySelector('.catalog__list');
    data.forEach((item) => {
        const template = document.querySelector('.catalog-template')
            .content
            .querySelector('.catalog__item');
        const newItem = template.cloneNode(true);
        console.log(newItem)
        newItem.querySelector('.catalog__image').src = item.images[1];
        newItem.querySelector('.catalog__title').textContent = item.title;
        newItem.querySelector('.catalog__description').textContent = item.info;
        newItem.querySelector('.catalog__price').textContent = item.price;
        newItem.dataset.min = item.min;
        newItem.dataset.max = item.max;
        catalogList.appendChild(newItem);
    })
}

const start = (data) => {
    onNavigation();
    renderCatalog(data);
}

export default start;