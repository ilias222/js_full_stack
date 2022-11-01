/*Код, создающий класс с параметрами продукта и методом возвращающим html 
разметку карточки продукта, сохраняет ее в появляющемя листе покупательской
корзины. Так же ведет подсчет стоимости товара и его количества.
Ручной ввод сумм не будет
*/


let numberLoop = 0;
let numberProduct = 0;
let callProduct = 0;
let loopMin = 1;

let listCheckout = [];
const parEl = document.querySelector('.numberLoop');
const divEl = document.querySelectorAll('.blackblok_button');
const productsEl = document.querySelector('.mini_box');
const totalPrice = document.querySelector('.price_full');
let arrayLite = [];


class ProductCard {
    constructor(product, praise, popular, img, id) {
        this.product = product;
        this.praise = praise;
        this.popular = popular;
        this.img = img;
        this.id = id;
    }
    getProductMarkup() {
        return `
        <div class="copf_img_box ${this.id}">
        <div class="img_list_box">
        <img src="${this.img}.png" alt="" class="copf_box">
        </div>
        <div class="price_info">
        <p class="text_copf">${this.product}</p>
        <img src="${this.popular}.png" alt="" class="like_img_box">
        <label class="label_call_copf">
        <span>Call :</span>
        <input type="number" data-inpat="${this.img}" id="${this.img}" class="copf_card_call" 
         value="1">
        </label>
        <p class="like_price_text ${this.img}" ">${this.praise}$</p>
        </div>
        <div class="delete_copf_card">
        <img src="delete.png" alt="" class="delete_copf_img ${this.img} ${this.id}">
        </div>
        </div>
      `;
    }
}


class CopfInnerHtml {

    /**
     * Метод добавления карты в корзину и его дублирования
     * @param {*} ev - элемент события 
     * @returns - не возвращает ничего
     */
    static getProductHtmlCopf(ev, arr) {
        arrayLite = arr;
        if (listCheckout.indexOf(ev.target.dataset.type) < 0) {
            listCheckout[numberProduct++] = ev.target.dataset.type;
            productsEl.insertAdjacentHTML('beforeend', new ProductCard(arr[ev.target
                .dataset.type].product, arr[ev.target
                    .dataset.type].praise, arr[ev.target
                        .dataset.type].like, arr[ev.target
                        .dataset.type].img, arr[ev.target
                            .dataset.type].id).getProductMarkup());
            parEl.textContent = ++numberLoop;
            totalPrice.textContent = `${parseInt(totalPrice.textContent)
                + parseInt(document.querySelector('.' + ev.target.dataset.type)
                    .textContent)}$`;
            return;
        }
        // Запуск при последущем клике на кнопке - добавить в корзину, 
        // если карта уже есть в корзине
        let callProduct =
            ++document.querySelector("#" + ev.target.dataset.type).value;
        let loopPriceCard =
            parseInt(document.querySelector('.' + ev.target.dataset.type)
                .textContent);
        document.querySelector('.' + ev.target.dataset.type).textContent =
            `${(loopPriceCard / (callProduct - 1)) * callProduct}$`;
        totalPriceCrosCard();
    }
    /**
     * Метод удаления карты из корзины и подсчета счетчика товаров
     */
    static getCopfDelite(even) {
        if (even.target.classList[0] == 'delete_copf_img') {
            document.querySelector('.'+ even.target.classList[2]).remove();
            numberLoop--;
            parEl.textContent = numberLoop;
            let noCard = listCheckout.indexOf(even.target.classList[1]);
            delete listCheckout[noCard];
        }
        totalPriceCrosCard();
       
    }
    // Метод добавления количества товара в корзине, выбераемого руками
    static getCallCard(ev) {
        let priceLite = productsEl.querySelector('.' + ev.target.dataset.inpat);
        let prisert = parseInt(ev.target.value);
        let uanProduct = parseInt(priceLite.textContent) / (parseInt(ev.target.value) - 1);

        if (prisert < 1) {
            ev.target.value = 1;
            priceLite.textContent = `${arrayLite[ev.target.dataset.inpat].praise}$`;
            totalPriceCrosCard();
            return;
        }
        if (uanProduct != arrayLite[ev.target.dataset.inpat].praise) {
            priceLite.textContent = `${(parseInt(priceLite.textContent) / (prisert + 1)) * prisert}$`;
            totalPriceCrosCard();
        } else {
            priceLite.textContent = `${(parseInt(priceLite.textContent) / (ev.target.value - 1) * ev.target.value)}$`;
           totalPriceCrosCard();
        }
    }


}



class Main {
    static run() {
        document.querySelector('.cardbar_card').addEventListener('click', event => {
            // Запуск при создании карты в корзине
            fetch('https://raw.githubusercontent.com/ilias222/js_full_stack/efdd346f27b67a998205d35458b4c5c9e1d94c5e/card_list.json').then(text => text.json()).then(data => {
                        let arra = (data.cardViev1);
                        CopfInnerHtml.getProductHtmlCopf(event, arra);
            });
        });

        // удаление позиции в листе корзины
        document.querySelector('.mini_box').addEventListener('click', event => {
            CopfInnerHtml.getCopfDelite(event);
        });

        // Ручной ввод количества позиции в корзине
        productsEl.addEventListener('input', event => {
            CopfInnerHtml.getCallCard(event);
        });
    }
}

/**
* Функция перебора созданных полей общей ценны одного товара, и сложения их
* в общую сумму выбранных товаров
* @param {number} - создание переменной счетчика общей суммы ценны выбранных 
* товаров
* @func           - функция перебирающая поля цен товаров 
* @param {number} - прибавление цены выбранного товара в счетчик
* @param {string} - присвоение счетчика цены к полю общей ценны
* @return {undefined}
*/
function totalPriceCrosCard() {
    let visible = 0;
    productsEl.querySelectorAll('.like_price_text').forEach(prai => {
        visible += parseInt(prai.textContent);
    });
    totalPrice.textContent = `${visible}$`;
}

// Запускаем
Main.run();


