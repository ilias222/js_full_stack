/*Скрипт тригера
Ужасающе много ИФ, нужно еще и еще для условий*/
"use strict";

const clickTrig = document.querySelector('._numerpgge_index');

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
    static optionUserClick(){

    }
   
    static trigNext() {
       
    }
    static trigPrev() {
      
    }

}

class rotationCard {
    static cartRotation(call) {
        document.querySelector('.cardbar_card').innerHTML = "";
        if (parseInt(call) % 2) {
            fetch('https://raw.githubusercontent.com/ilias222/js_full_stack/efdd346f27b67a998205d35458b4c5c9e1d94c5e/card_list.json').then(text => text.json()).then(data => {
                let arra = (data.cardViev1);
                for (let i in arra){
                    document.querySelector('.cardbar_card').insertAdjacentHTML('beforeend', new ProductVievTrigger(arra[i].product, arra[i].praise, arra[i].img).getProductVievTrigger());

                }        
    });
        } else {
            fetch('https://raw.githubusercontent.com/ilias222/js_full_stack/efdd346f27b67a998205d35458b4c5c9e1d94c5e/card_list.json').then(text => text.json()).then(data => {
                let arra = (data.cardViev2);
                for (let i in arra){
                    document.querySelector('.cardbar_card').insertAdjacentHTML('beforeend', new ProductVievTrigger(arra[i].product, arra[i].praise, arra[i].img).getProductVievTrigger());
                }        
    });
        }
    }
}

let arrayNumetTrig = ['num1', 'num2', 'num3', 'num4'];

class MainTrig {
    static runTrig() {
        //Клик на номер страницы
        clickTrig.addEventListener('click', event => {
            console.log(event.target.classList[2]);
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