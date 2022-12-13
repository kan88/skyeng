const nav = document.querySelector('.header__list');
const catalog = document.querySelector('.catalog');
const cart = document.querySelector('.cart');


//Обработчик событий табов переключения окна между корзиной и каталогом через делегирование событий
const onNavigation = () => {
    nav.addEventListener('click', (evt) => {
        if (evt.target.tagName !== 'UL') {
            const target = evt.target.closest('li');
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

        }
    })
};

//проверка на наличие товара в корзине

const checkCart = (id) => {
    const productsList = document.querySelectorAll('.product__item')
    //сначала проверим что корзина не пуста
    if (productsList.length > 0) {
        const arrList = [...productsList];
        const check = (item) => item.dataset.id == id;
        return arrList.some(check)
    }
}

//добавление в корзину

const renderCart = (item) => {
    if (!checkCart(item.id)) {
        const productList = document.querySelector('.product__list');
        const template = document.querySelector('.cart-template')
            .content
            .querySelector('.product__item');
        const newItem = template.cloneNode(true);
        newItem.querySelector('.product__image').src = item.images[0];
        newItem.querySelector('.product__title').textContent = item.title;
        newItem.querySelector('.product__description').textContent = item.info;
        newItem.querySelector('.product__price').textContent = item.price;
        newItem.querySelector('.product__quality').textContent = item.min;
        newItem.dataset.min = item.min;
        newItem.dataset.max = item.max;
        newItem.dataset.id = item.id;

        //добавление товара при условии что количество меньше чем максимум
        newItem.querySelector('.product__button--add').addEventListener('click', () => {
            if (Number(newItem.querySelector('.product__quality').textContent) < item.max) {
                document.querySelector('.order__value').textContent = item.price * item.min + Number(document.querySelector('.order__value').textContent);
                newItem.querySelector('.product__quality').textContent = Number(newItem.querySelector('.product__quality').textContent) + item.min;
            }
        })
        //уменьшение товара при условии что количество больше чем в корзине
        newItem.querySelector('.product__button--remove').addEventListener('click', () => {
            newItem.querySelector('.product__quality').textContent = Number(newItem.querySelector('.product__quality').textContent) - item.min;
            document.querySelector('.order__value').textContent = Number(document.querySelector('.order__value').textContent) - item.price * item.min;
            if (newItem.querySelector('.product__quality').textContent == '0') {
                newItem.remove();
            }
        })

        //удаляем все единицы этого наименования
        newItem.querySelector('.product__link--del').addEventListener('click', () => {
            document.querySelector('.order__value').textContent = Number(document.querySelector('.order__value').textContent) - item.price * Number(newItem.querySelector('.product__quality').textContent);
            newItem.remove();
        })


        productList.appendChild(newItem)
        // увеличиваем корзину при первом добавлении
        document.querySelector('.order__value').textContent = item.price * item.min + Number(document.querySelector('.order__value').textContent);
    }
}

//добавление в корзину

const addToCart = (data, evt) => {
    const target = evt.target.closest('li')
    const id = target.dataset.id
    data.forEach((item) => {
        if (item.id == id) {
            renderCart(item)
        }

    })
}

//отрисовка каталога

const sortingData = (data) => {
    const sorted = (a, b) => {
        return a.price - b.price
    }
    return data.sort(sorted)
}
let sortBoolean;
const renderCatalog = (data, sortBoolean = true) => {
    const catalogList = document.querySelector('.catalog__list');
    if (sortBoolean) {
        const sortedData = sortingData(data)
        console.log(sortedData)
        sortedData.forEach((item) => {
            const template = document.querySelector('.catalog-template')
                .content
                .querySelector('.catalog__item');
            const newItem = template.cloneNode(true);
            newItem.querySelector('.catalog__image').src = item.images[1];
            newItem.querySelector('.catalog__title').textContent = item.title;
            newItem.querySelector('.catalog__description').textContent = item.info;
            newItem.querySelector('.catalog__price').textContent = item.price;
            newItem.dataset.min = item.min;
            newItem.dataset.max = item.max;
            newItem.dataset.id = item.id;
            newItem.addEventListener('click', (evt) => {
                addToCart(data, evt);
            })
            catalogList.appendChild(newItem);
        })
    } else {
        data.forEach((item) => {
            const template = document.querySelector('.catalog-template')
                .content
                .querySelector('.catalog__item');
            const newItem = template.cloneNode(true);
            newItem.querySelector('.catalog__image').src = item.images[1];
            newItem.querySelector('.catalog__title').textContent = item.title;
            newItem.querySelector('.catalog__description').textContent = item.info;
            newItem.querySelector('.catalog__price').textContent = item.price;
            newItem.dataset.min = item.min;
            newItem.dataset.max = item.max;
            newItem.dataset.id = item.id;
            newItem.addEventListener('click', (evt) => {
                addToCart(data, evt);
            })
            catalogList.appendChild(newItem);
        })
    }
}

//очистка корзины 

const clearCart = () => {
    const buttonClearCart = document.querySelector('.command__button--clear');
    buttonClearCart.addEventListener('click', () => {
        const products = document.querySelectorAll('.product__item');
        for (let i = 0; i < products.length; i++) {
            products[i].remove()
        }
        document.querySelector('.order__value').textContent = '0'

    })
}

//переход в каталог по клику на продолжить покупки
const goCatalog = () => {
    const buttonGo = document.querySelector('.command__button--moveon')
    buttonGo.addEventListener('click', () => {
        catalog.classList.remove('js-nodisplay');
        catalog.classList.add('js-display');
        cart.classList.add('js-nodisplay');
        cart.classList.remove('js-display');
    })
}

//событие change select 
const sortingBySelect = (data) => {
    const select = document.querySelector('.catalog__sort')
    select.addEventListener('change', (evt) => {
        console.log(evt.target.value)
        console.log('change')
        // const products = document.querySelectorAll('.catalog__item');
        // for (let i = 0; i < products.length; i++) {
        //     products[i].remove();
        // }
        if (evt.target.value = 'cheap') {
            'сначала дешевле'
            // renderCatalog(data);
        } else {
            'сначала дороже'
            // renderCatalog(data, false);
        }

    })
}
const start = (data) => {
    onNavigation();
    renderCatalog(data);
    clearCart();
    goCatalog();
    sortingBySelect(data);
}

export default start;