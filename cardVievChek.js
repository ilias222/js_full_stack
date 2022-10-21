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

const cardViev =
{
    card1: [new ProductViev("Product text", 52.00, "card1")],
    card2: [new ProductViev("Product text", 52.00, "card2")],
    card3: [new ProductViev("Product text", 52.00, "card3")],
    card4: [new ProductViev("Product text", 52.00, "card4")],
    card5: [new ProductViev("Product text", 52.00, "card5")],
    card6: [new ProductViev("Product text", 52.00, "card6")],
    card7: [new ProductViev("Product text", 52.00, "card7")],
    card8: [new ProductViev("Product text", 52.00, "card8")],
}

document.querySelector('.brovse_add').addEventListener('click', elem => {
    for (card in cardViev) {
        document.querySelector('.cardbar_card').insertAdjacentHTML('beforeend', cardViev[card].map(cardVi => cardVi.getProductViev()));
    }
});