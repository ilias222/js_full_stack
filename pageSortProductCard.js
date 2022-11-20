/**
 * Скрипт сортировки первой страницы Produkt.html
 * Выводит первый лист json в бар карт продуктов
 */
"use strict";

class PageSort extends ProductViev {
    constructor(product, praise, img) {
        super(product, praise, img);
    }
    getProductViev() {
        return `
        <div class="cardbar_card_product ${this.img}">
                    <div class="blackblok_button" data-type="${this.img}">
                        <img src="corf_cardbar.png" alt="Chek" class="corp" data-type="${this.img}">
                        <p class="corp_text" data-type="${this.img}">Add to CartAdd</p>
                    </div>
                    <div class="box_media_card" onclick="window.open('single_page.html', '_self');">
                        <img src="${this.img}.png" alt="Product" class="poduct_image">
                        <p class="product_text">${this.product}<span class="product_text_price">${this.praise}$</span>
                        </p>
                    </div>
                </div>
      `;
    }
}

class PageSortViev {
    static getVievCardWindow(card) {
            document.querySelector('.cardbar_card').insertAdjacentHTML('beforeend', card.getProductViev());
    }
}

class PageSortMain {
    static runViev() {
            fetch('https://raw.githubusercontent.com/ilias222/js_full_stack/lessen1/card_list.json').then(text => text.json()).then(data => {
                        let arra = (data.cardViev1);
                        document.querySelector('.cardbar_card').innerHTML = "";
                        for (let i in arra){
                            PageSortViev.getVievCardWindow(new PageSort(arra[i].product,arra[i].praise,arra[i].img));
                        }        
            });
        
    }
}

PageSortMain.runViev();