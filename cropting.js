/*Скрипт тригера
Ужасающе много ИФ, нужно еще и еще для услловий. Модет попробовать так оставить?
Или после ассорти рассортировать?*/



// Пока базы нет, извращаюсь как могу
class ProductVievTrigger {
    constructor(product, praise, img) {
        this.product = product;
        this.praise = praise;
        this.img = img;
    }
    getProductVievTrigger() {
        return `
        <div class="cardbar_card_product ${this.img}">
                    <div class="blackblok_button" data-type="${this.img}">
                        <img src="corf_cardbar.png" alt="Chek" class="corp" data-type="${this.img}">
                        <p class="corp_text" data-type="${this.img}">Add to copf</p>
                    </div>
                    <div class="box_media_card">
                        <img src="${this.img}.png" alt="Product" class="poduct_image">
                        <p class="product_text">${this.product}<span class="product_text_price">${this.praise}$</span>
                        </p>
                    </div>
                </div>
      `;
    }
}

const cardVievTrigger =
{
    card1: [new ProductVievTrigger("Product text", 52.00, "card8")],
    card2: [new ProductVievTrigger("Product text", 52.00, "card7")],
    card3: [new ProductVievTrigger("Product text", 52.00, "card5")],
    card4: [new ProductVievTrigger("Product text", 52.00, "card4")],
    card5: [new ProductVievTrigger("Product text", 52.00, "card3")],
    card6: [new ProductVievTrigger("Product text", 52.00, "card2")],
    card7: [new ProductVievTrigger("Product text", 52.00, "card1")],
    card8: [new ProductVievTrigger("Product text", 52.00, "card6")],
}

const cardVievTriggerAmore =
{
    card1: [new ProductVievTrigger("Product text", 52.00, "card3")],
    card2: [new ProductVievTrigger("Product text", 52.00, "card6")],
    card3: [new ProductVievTrigger("Product text", 52.00, "card1")],
    card4: [new ProductVievTrigger("Product text", 52.00, "card4")],
    card5: [new ProductVievTrigger("Product text", 52.00, "card8")],
    card6: [new ProductVievTrigger("Product text", 52.00, "card2")],
    card7: [new ProductVievTrigger("Product text", 52.00, "card5")],
    card8: [new ProductVievTrigger("Product text", 52.00, "card7")],
}

const numerPage = document.querySelector('._numerpgge_index');
const pageCard = document.querySelector('.cardbar_card');
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const num3 = document.querySelector('.num3');
const num4 = document.querySelector('.num4');
const amoreEl = document.querySelector('.amore');
const num20 = document.querySelector('.num20');
let numberNum = 0;
let arrayNumer = [num1, num2, num3, num4];
letarrayNumerFull = [num1, num2, num3, num4, num20];


function cartRotation(call) {

}

function goToTrigg(ev) {

}

numerPage.querySelector('.prevAmore').style = "display: none;";

//Клик на номер страницы
numerPage.addEventListener('click', event => {
    if (event.target.classList[0] == '_numerpagge_index_item_link') {
        document.querySelectorAll('._numerpagge_index_item_link').forEach(el =>
            el.classList.remove('rosse'));
        event.target.classList.add('rosse');

    }
    if (event.target.classList[2] == 'num4' && num4.textContent != 19) {
        numberNum = 0;
        // Здесь каретка нужна на 2
        for (index in arrayNumer) {
            let i = num4.textContent++;
            arrayNumer[numberNum++].textContent = i;
            event.target.classList.remove('rosse');
            num1.classList.add('rosse')
            numerPage.querySelector('.prevAmore').style = "display: block;";
        }
    }
    if (num4.textContent == '19') {
        numerPage.querySelector('.amore').style = "display: none;";
    }
    if (event.target.classList[2] == 'prevAmore') {
        // Сдесь пока все плохо(
        numberNum = 0;
        // Здесь каретка нужна на 2
        for (index in arrayNumer) {
            let i = num4.textContent--;
            arrayNumer[numberNum++].textContent = i;
            event.target.classList.remove('rosse');
            num1.classList.add('rosse')
            numerPage.querySelector('.prevAmore').style = "display: block;";
        }
    }
    console.log(event.target.classList);

})

//Управление тригером вперет и назад
document.querySelector('._next_page_link').addEventListener('click', event => {

});

document.querySelector('._prev_page_link').addEventListener('click', event => {


});