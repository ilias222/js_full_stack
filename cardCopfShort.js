/*Код, создающий класс с параметрами продукта и методом возвращающим html 
разметку карточки продукта, сохраняет ее в появляющемя листе покупательской
корзины. Так же ведет подсчет стоимости товара и его количества.
Не реализован ручной ввод количества товаров (не успел написать пересчет суммы)
*/
"use strict";

let numberLoop = 0;
let numberProduct = 0;
let callProduct = 0;
let loopMin = 1;

let listCheckout = [];
const parEl = document.querySelector('.numberLoop');
const divEl = document.querySelectorAll('.blackblok_button');
const productsEl = document.querySelector('.mini_box');
const totalPrice = document.querySelector('.price_full');

class ProductCard {
    constructor(product, praise, popular, img) {
        this.product = product;
        this.praise = praise;
        this.popular = popular;
        this.img = img;
    }
    getProductMarkup() {
        return `
        <div class="copf_img_box">
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
        <img src="delete.png" alt="" class="delete_copf_img">
        </div>
        </div>
      `;
    }
}

const products =
{
    card1: [new ProductCard("Product text", 52, "like", "card1")],
    card2: [new ProductCard("Product text", 52, "like", "card2")],
    card3: [new ProductCard("Product text", 52, "like", "card3")],
    card4: [new ProductCard("Product text", 52, "like", "card4")],
    card5: [new ProductCard("Product text", 52, "like", "card5")],
    card6: [new ProductCard("Product text", 52, "like", "card6")],
    card7: [new ProductCard("Product text", 52, "like", "card7")],
    card8: [new ProductCard("Product text", 52, "like", "card8")],
}


document.querySelector('.cardbar_card').addEventListener('click', event => {
    // Запуск при создании карты в корзине
    if (listCheckout.indexOf(event.target.dataset.type) < 0) {

        listCheckout[numberProduct++] = event.target.dataset.type;
        productsEl.insertAdjacentHTML('beforeend', products[event.target
            .dataset.type].map(product => product.getProductMarkup()));
        parEl.textContent = ++numberLoop;
        totalPrice.textContent = `${parseInt(totalPrice.textContent)
            + parseInt(document.querySelector('.' + event.target.dataset.type)
                .textContent)}$`;
        return;
    }
    // Запуск при последущем клике на кнопке - добавить в корзину, 
    // если карта уже есть в корзине
    let callProduct =
        ++document.querySelector("#" + event.target.dataset.type).value;
    let loopPriceCard =
        parseInt(document.querySelector('.' + event.target.dataset.type)
            .textContent);
    document.querySelector('.' + event.target.dataset.type).textContent =
        `${(loopPriceCard / (callProduct - 1)) * callProduct}$`;


    totalPriceCrosCard();
});

// удаление позиции в листе корзины
document.querySelector('.mini_box').addEventListener('mouseover', nt => {
    document.querySelectorAll('.copf_img_box').forEach(evet => {
        evet.querySelector('.delete_copf_img').addEventListener('click', event => {
            let arrCard = evet.querySelector('.copf_card_call');
            delete listCheckout[listCheckout.indexOf(arrCard.id)];
            parEl.textContent--;
            --numberLoop;
            if (parEl.textContent < 0) {
                parEl.textContent = 0;
                numberLoop = 0;
            }
            evet.remove();
            totalPriceCrosCard();
        })
    })
});

// Ручной ввод количества позиции в корзине
productsEl.addEventListener('input', event => {

    let priceLite = productsEl.querySelector('.' + event.target.dataset.inpat);
    let prisert = parseInt(event.target.value);
    let uanProduct = parseInt(priceLite.textContent) / (parseInt(event.target.value) - 1);

    if (prisert < 1) {
        event.target.value = 1;
        priceLite.textContent = `${products[event.target.dataset.inpat][0].praise}$`;
        totalPriceCrosCard();
        return;
    }
    if (uanProduct != products[event.target.dataset.inpat][0].praise) {
        priceLite.textContent = `${(parseInt(priceLite.textContent) / (prisert + 1)) * prisert}$`;
        totalPriceCrosCard();
    } else {
        priceLite.textContent = `${(parseInt(priceLite.textContent) / (event.target.value - 1) * event.target.value)}$`;
        totalPriceCrosCard();
    }
});

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

