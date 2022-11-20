/*Скрипт кнопки - показать больше, без применения тригера*/

"use strict";

class ProductViev {
    constructor(product, praise, img) {
        this.product = product;
        this.praise = praise;
        this.img = img;
    }
     getProductViev() {
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

class CardViev {
    static getVievCardWindow(card) {
            document.querySelector('.cardbar_card').insertAdjacentHTML('beforeend', card.getProductViev());
    }
}

class VievMain {
    static runViev() {
        document.querySelector('.brovse_add').addEventListener('click', elem => {
            fetch('https://raw.githubusercontent.com/ilias222/js_full_stack/lessen1/card_list.json').then(text => text.json()).then(data => {
                        let arra = (data.cardViev1);
                        for (let i in arra){
                            CardViev.getVievCardWindow(new ProductViev(arra[i].product,arra[i].praise,arra[i].img));
                        }        
            });
        });
    }
}

VievMain.runViev();

console.log('ki');