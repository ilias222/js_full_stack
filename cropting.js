/*Скрипт тригера
Ужасающе много ИФ, нужно еще и еще для условий*/
"use strict";

const numerPage = document.querySelector('._numerpgge_index');
const pageCard = document.querySelector('.cardbar_card');
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const num3 = document.querySelector('.num3');
const num4 = document.querySelector('.num4');
const amoreEl = document.querySelector('.amore');
const num5 = document.querySelector('.num5');
let numberNum = 0;
let arrayNumer = [num1, num2, num3, num4];
let arrayNumerFull = [num1, num2, num3, num4, num5];
let dis = 0;
numerPage.querySelector('.amore').style = "display: block;"


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

class ClickTrig {
    static optionUserClick(ev) {
        if (ev.target.classList[0] == '_numerpagge_index_item_link') {
            document.querySelectorAll('._numerpagge_index_item_link').forEach(el =>
                el.classList.remove('rosse'));
            ev.target.classList.add('rosse');
            rotationCard.cartRotation(ev.target.textContent);
        }
        if (ev.target.classList[2] == 'num4' && num4.textContent != 19) {
            numberNum = 0;
            for (index in arrayNumer) {
                let i = num4.textContent++;
                arrayNumer[numberNum++].textContent = i;
                ev.target.classList.remove('rosse');
                num1.classList.add('rosse');
            }
        }
        if (num4.textContent == 19 || ev.target.classList[2] == 'num5') {
            numerPage.querySelector('.amore').style = "display: none;"
            num4.textContent = 19;
            num3.textContent = 18;
            num2.textContent = 17;
            num1.textContent = 16;
            dis = 4;
        }
    }
    static trigNext() {
        if (dis >= 4) {
            dis = 4;
        }
        if (num4.textContent >= 19) {
            numerPage.querySelector('.amore').style = "display: none;"
            document.querySelector('.rosse').classList.remove('rosse');
            arrayNumerFull[dis++].classList.add('rosse');
            rotationCard.cartRotation(arrayNumerFull[(dis - 1)].textContent);
            return;
        }
        numberNum = 0;
        for (let index in arrayNumer) {
            let i = num4.textContent++;
            arrayNumer[numberNum++].textContent = i;
            document.querySelectorAll('.rosse').forEach(element => {
                element.classList.remove('rosse')
            });
            num1.classList.add('rosse');
            rotationCard.cartRotation(num1.textContent);
        }
    }
    static trigPrev() {
        if (num1.textContent <= 1) {
            num1.textContent = "1";
            rotationCard.cartRotation(num1.textContent);
            return;
        }
        if (dis > 4) {
            dis = 4;
        }
        if (dis > 1) {
            console.log(dis + " Из прева");
            document.querySelector('.rosse').classList.remove('rosse');
            arrayNumerFull[--dis].classList.add('rosse');
            rotationCard.cartRotation(arrayNumerFull[dis].textContent);
        } else {
            console.log(dis);
            numberNum = 3;
            for (let index in arrayNumer) {
                let i = num1.textContent--;
                arrayNumer[numberNum--].textContent = i;
                document.querySelectorAll('.rosse').forEach(element => {
                    element.classList.remove('rosse')
                });
                num1.classList.add('rosse');
                rotationCard.cartRotation(num1.textContent);
            }
        }
        numerPage.querySelector('.amore').style = "display: block;"
    }

}

class rotationCard {
    static cartRotation(call) {
        document.querySelector('.cardbar_card').innerHTML = "";
        if (parseInt(call) % 2) {
            for (let card in cardVievTrigger) {
                document.querySelector('.cardbar_card').insertAdjacentHTML('beforeend', cardVievTrigger[card].map(cardVi => cardVi.getProductVievTrigger()));
            }
        } else {
            for (let card in cardVievTriggerAmore) {
                document.querySelector('.cardbar_card').insertAdjacentHTML('beforeend', cardVievTriggerAmore[card].map(cardVi => cardVi.getProductVievTrigger()));
            }
        }
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

class MainTrig {
    static runTrig() {
        //Клик на номер страницы
        numerPage.addEventListener('click', event => {
            ClickTrig.optionUserClick(event);
        });

        //Управление тригером вперет и назад
        document.querySelector('._next_page_link').addEventListener('click', event => {
            ClickTrig.trigNext();
        });

        document.querySelector('._prev_page_link').addEventListener('click', event => {
            ClickTrig.trigPrev();
        });
    }
}

MainTrig.runTrig();