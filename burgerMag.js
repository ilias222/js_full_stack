"use strict";

const parEl = document.querySelector('.dialog_user');
const parEltop = document.querySelector('.toping');

class Burger {
    constructor(burger, price, calories, id) {
        this.burger = burger;
        this.price = price;
        this.calories = calories;
        this.id = id;
    }

    getUserBurger() {
        return `<div class="${this.id} delitDiv">
                <p>Товар: <span> ${this.burger}</span></p>
                <p class = "price_famili_${this.id}">Цена: 
                <span class = "price${this.id}"> ${this.price}</span></p>
                <p class = "calori_famili_${this.id}">Клории: 
                <span class = "calori${this.id}">${this.calories}</span></p>
                <p>Количество: <span class="looping${this.id}">1</span></p>
                </div>`
    }
}

class BurgerCalculation {
    // Количество позиции тавара, цена и калории
    static getCellBurger(ev) {
        if (parEl.querySelector(`.${ev.target.classList[0]}`)) {
            let loppCels = document.querySelector(`.looping${ev.target.classList[0]}`).textContent++;
            let priceBurger = parseInt(document.querySelector(`.price${ev.target.classList[0]}`).textContent);
            document.querySelector(`.price${ev.target.classList[0]}`).textContent = `${(priceBurger / loppCels) * (loppCels + 1)} рублей`;
            let burgerCallori = parseInt(document.querySelector(`.calori${ev.target.classList[0]}`).textContent);
            document.querySelector(`.calori${ev.target.classList[0]}`).textContent = `${(burgerCallori / loppCels) * (loppCels + 1)} каллорий`;

            this.totalPrice(document.querySelector(`.price${ev.target.classList[0]}`).textContent, document.querySelector(`.calori${ev.target.classList[0]}`).textContent, document.querySelector(`.looping${ev.target.classList[0]}`).textContent);
            return;
        }
        document.querySelector('.dialog_user').insertAdjacentHTML('afterbegin', productBurger[ev.target.classList[0]].map(elem => elem.getUserBurger()));

        this.totalPrice(document.querySelector(`.price${ev.target.classList[0]}`).textContent, document.querySelector(`.calori${ev.target.classList[0]}`).textContent, document.querySelector(`.looping${ev.target.classList[0]}`).textContent);
    }
    // Подсчет финальной цены и каллорий 
    static totalPrice(textPrice, textCallor, celloop) {
        let priceMai = document.querySelector('.total_price').textContent;
        document.querySelector('.total_price').textContent = `${((parseInt(textPrice) / parseInt(celloop)) + parseInt(priceMai))} руб`;
        let callorMai = document.querySelector('.total_callors').textContent;
        document.querySelector('.total_callors').textContent = `${((parseInt(textCallor) / parseInt(celloop)) + parseInt(callorMai))} каллории`;
    }
    // Подсчет топинга
    static getToping(ev) {
        if (parEltop.querySelector(`.${ev.target.classList[0]}`)) {
            let loppCels = document.querySelector(`.looping${ev.target.classList[0]}`).textContent++;
            let priceBurger = parseInt(document.querySelector(`.price${ev.target.classList[0]}`).textContent);
            document.querySelector(`.price${ev.target.classList[0]}`).textContent = `${(priceBurger / loppCels) * (loppCels + 1)} рублей`;
            let burgerCallori = parseInt(document.querySelector(`.calori${ev.target.classList[0]}`).textContent);
            document.querySelector(`.calori${ev.target.classList[0]}`).textContent = `${(burgerCallori / loppCels) * (loppCels + 1)} каллорий`;

            this.totalPrice(document.querySelector(`.price${ev.target.classList[0]}`).textContent, document.querySelector(`.calori${ev.target.classList[0]}`).textContent, document.querySelector(`.looping${ev.target.classList[0]}`).textContent);
            return;
        }
        document.querySelector('.toping').insertAdjacentHTML('beforeend', productToping[ev.target.classList[0]].map(elem => elem.getUserBurger()));
        this.totalPrice(document.querySelector(`.price${ev.target.classList[0]}`).textContent, document.querySelector(`.calori${ev.target.classList[0]}`).textContent, document.querySelector(`.looping${ev.target.classList[0]}`).textContent);
    }
    // Удаление листа продуктов
    static getClianList() {
        document.querySelectorAll('.delitDiv').forEach(elem =>
            elem.remove());
        document.querySelector('.total_price').textContent = "0 руб";
        document.querySelector('.total_callors').textContent = "0 каллорий";
    }
}

const productBurger = {
    burger1: [new Burger("Маленький Бургер", 50 + ' руб', 20 + ' каллорий', "burger1")],
    burger2: [new Burger("Средний Бургер", 100 + ' руб', 50 + ' каллорий', "burger2")],
    burger3: [new Burger("Большой Бургер", 150 + ' руб', 100 + ' каллорий', "burger3")],
}

const productToping = {
    toping1: [new Burger("Салат", 20 + ' руб', 5 + ' каллорий', "toping1")],
    toping2: [new Burger("Сыр", 10 + ' руб', 20 + ' каллорий', "toping2")],
    toping3: [new Burger("Картофель", 15 + ' руб', 10 + ' каллорий', "toping3")],
}
class StartRun {
    static run() {
        document.querySelector('.inner_user').addEventListener('click', event => {
            BurgerCalculation.getCellBurger(event);
        });

        document.querySelector('.inner_user_toping').addEventListener('click', event => {
            BurgerCalculation.getToping(event);
        });

        document.querySelector('.delete').addEventListener('click', event => {
            BurgerCalculation.getClianList();
        });
    }
}

StartRun.run();