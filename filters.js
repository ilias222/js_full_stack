/**
 * Скрипт фильтров на странице product.html
 */

"use strict";

const formUser = document.querySelector('.header_inputs_formbar');
const inputUser = document.querySelector('.header_inputs_innertext');
const buttonUser = document.querySelector('.header_inputs_imgglass');
const modalWin = document.querySelector('.window_user_text');
const cardList = document.querySelector('.cardbar_card');

let collList = null;
let arrCollCard =[];
let nameProdukt = '';
let sumOfNumbers = 0; 
let arrayCard = [];

class FilterCardVievs extends ProductVievTrigger{
    constructor (product, praise, img, id, size){
        super(product, praise, img);
        this.id = id;
        this.size = size;
    }
    getCardFilterNew (){
        return`
        <div class="cardbar_card_product ${this.img}">
        <div class="blackblok_button" data-type="${this.img}">
            <img src="corf_cardbar.png" data-type="${this.img}" alt="Chek" class="corp">
            <p class="corp_text" data-type="${this.img}">Add to Cart</p>
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

class InpUselWindow {
    
    // Загрузка json файла
    static setJsonFile (ev){
        if(ev.target.classList[0] == "header_inputs_innertext"){
            fetch('https://raw.githubusercontent.com/ilias222/js_full_stack/lessen1/card_list.json')
            .then(data => data.json()).then(list => {
                InpUselWindow.getInputUserText(Object.values(list), inputUser.value);
            });
        } 
    }

    //Принимаем полученный json файл и проверяем - количество листов, количество товаров
    static optionsJsonList (arr){
        collList = Object.entries(arr).length;
        for (let i = 0; i < collList; i++){
            arrCollCard[i] = Object.entries(arr[i]).length;
        }
        sumOfNumbers = arrCollCard.reduce((acc, arrColl) => acc + arrColl, 0);
    }

    // Обработка запроса клиента, и поиск строки в разобранном объекте json
    static getInputUserText(arr, textUser){
        InpUselWindow.optionsJsonList(arr);
        let arrayUsertext = []; 
        InpUselWindow.inspectArr(arrayCard);
        for(let i = 0; i < collList; i++){
            for(let a = 0; a < arrCollCard[i]; a++){
                nameProdukt = arr[i][`card${a}`].product;
                if(nameProdukt.indexOf(textUser) >= 0){ 
                    arrayUsertext.push([arr[i][`card${a}`].product]);
                    arrayCard.push(arr[i][`card${a}`]);
                }
            }
        }
        InpUselWindow.getScrolUserText(arrayUsertext, textUser);
    }
    // Инспектор массивов - при наличии элементов, обнуляет их
    static inspectArr (arr){
        arr.length = 0;
        return arr;
    }
    // Вывод подходящих строк в доп окно
    static getScrolUserText(card, text){
        if (text == ''){
            modalWin.innerHTML = "";
            modalWin.style = "display: none;";
            return;
        }
        modalWin.innerHTML ='';
        for(let q = 0; q < card.length; q++){
        modalWin.insertAdjacentHTML('beforeend', `<div class = "test_card">${card[q]}</div>`);
        } 
    }
}

class VievsCardWindow{
    // Вывод карт на экран
   static setCardWindowUserFilter(arr, productCar){
    for(let index in arr){
        if(arr[index].product == productCar){
            cardList.innerHTML = new FilterCardVievs(arr[index].product, arr[index].praise, arr[index].img, 
                arr[index].id,arr[index].size).getCardFilterNew();
            modalWin.style = "display: none;";
            return;
        } 
        if (arr.length != 0){
            cardList.insertAdjacentHTML('beforeend', new FilterCardVievs(arr[index].product,
                    arr[index].praise, arr[index].img, arr[index].id,arr[index].size).getCardFilterNew());
            modalWin.style = "display: none;";
        }
    }
    return;
    }
}

class MainUserFilter{
    // Запуск кода
    static runUserFilter() {
        // При вводе текста в строку поиска 
        formUser.addEventListener('input', event =>{
            modalWin.style = "display: flex;";
            InpUselWindow.setJsonFile (event);
        });
        // При нажатии на кнопку поиска
        formUser.addEventListener('click', event =>{
        event.preventDefault('click');
        if(event.target.classList[0] == 'header_inputs_imgglass'){
        cardList.innerHTML = '';
        VievsCardWindow.setCardWindowUserFilter(arrayCard, inputUser.value);
        }
        });
        // При выборе товара из модального окна авто подбора
        modalWin.addEventListener('click', event =>{
                if(event.target.classList[0] == 'test_card'){
                    inputUser.value = event.target.textContent;
                    cardList.innerHTML = '';
                    VievsCardWindow.setCardWindowUserFilter(arrayCard, event.target.textContent);
                }
                
        });
    }
}

MainUserFilter.runUserFilter();