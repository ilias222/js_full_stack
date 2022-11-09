// /**
//  * Скрипт сортировки первой страницы Produkt.html
//  * Выводит первый лист json в бар карт продуктов
//  */
"use strict";

 
 const app = new Vue({
     el: "#app",
     data: {
//1 Код первоначального рендеринга карт, так же последующих при переходе к первоначальной странице
        goods: [],
        API_URL: 'https://raw.githubusercontent.com/ilias222/js_full_stack/lessen1/card_list.json',
//--------------------------------------------------------------------------------------------------1

//2 Переменные. Код 2 Корзина ----------------------------------------------------------------------------
        listCheckout: [],
        arrayLite: [],
        numberProduct: 0,
        numberLoop: 0,
        histCard: '',
//---------------------------------------------------------------------------------------------------Код2
        filter: [],
        allListgoods: [],
        allValuesgoods: [],
        arrCollCard: [],
        arrayCard: [],
        collList: null,
        nameProdukt: "",
        cardWindowUser: [],
        seter: true
     },

    methods:{
// 2 Код управления корзиной покупок - добавить, удалить, изменить количество--------------------------
        getProductHtmlCopf(ev, arr) {
            if (this.listCheckout.indexOf(ev.target.dataset.type) < 0) {
                this.arrayLite.push(this.goods[ev.target.dataset.type]);
                this.histCard = ev.target.dataset.type;
                this.listCheckout[this.numberProduct++] = ev.target.dataset.type;
                document.querySelector('.numberLoop').textContent = ++this.numberLoop;
                this.totalPriceCrosCard(this.goods[ev.target.dataset.type].praise);
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
            this.totalPriceCrosCard(0);
        },
        // Пересчет общей суммы
        totalPriceCrosCard(wanProd) {
            let visible = 0 + wanProd;
            document.querySelector('.mini_box').querySelectorAll('.like_price_text').forEach(prai => {
                visible += parseInt(prai.textContent);
            });
            document.querySelector('.price_full').textContent = `${visible}$`;
        },
         /**
        * Метод удаления карты из корзины и подсчета счетчика товаров
        */
        getCopfDelite(even) {
        if (even.target.classList[0] == 'delete_copf_img') {
            document.querySelector('.'+ even.target.classList[2]).remove();
            this.numberLoop--;
            document.querySelector('.numberLoop').textContent = this.numberLoop;
            let noCard = this.listCheckout.indexOf(even.target.classList[1]);
            //SPLICE REFACTORING
            delete this.listCheckout[noCard];
        }
            this.totalPriceCrosCard(0);
        },
         // Метод добавления количества товара в корзине, выбераемого руками
    getCallCard(ev) {
        let priceLite = document.querySelector('.' + ev.target.dataset.inpat);
        let prisert = parseInt(ev.target.value);
        let uanProduct = parseInt(priceLite.textContent) / (parseInt(ev.target.value) - 1);
        if (prisert < 1) {
            ev.target.value = 1;
            priceLite.textContent = `${this.goods[ev.target.dataset.inpat].praise}$`;
            this.totalPriceCrosCard(0);
            return;
        }
        if (uanProduct != this.goods[ev.target.dataset.inpat].praise) {
            priceLite.textContent = `${(parseInt(priceLite.textContent) / (prisert + 1)) * prisert}$`;
            this.totalPriceCrosCard(0);
        } else {
            priceLite.textContent = `${(parseInt(priceLite.textContent) / (ev.target.value - 1) * ev.target.value)}$`;
           this.totalPriceCrosCard(0);
        }
    },
//------------------------------------------------------------------------------------------------Код 2
    //Принимаем полученный json файл и проверяем - количество товаров
    optionsJsonList (arr){
        this.collList = this.allListgoods.length; 
        for (let i = 0; i < this.collList; i++){
            this.arrCollCard[i] = Object.entries(arr[i]).length; 
        }
        
    },
    // Обработка запроса клиента, и поиск строки в разобранном объекте json
    getInputUserText(arr){
        let textUser = document.querySelector('.header_inputs_innertext').value;
        this.optionsJsonList(arr);
        let arrayUsertext = []; 
        this.inspectArr(this.arrayCard);
        for(let i = 0; i < this.collList; i++){
            for(let a = 0; a < this.arrCollCard[i]; a++){
                this.nameProdukt = arr[i][`card${a}`].product;
                if(this.nameProdukt.indexOf(textUser) >= 0){ 
                    arrayUsertext.push([arr[i][`card${a}`].product]);
                    this.arrayCard.push(arr[i][`card${a}`]);
                }
            }
        }
        this.getScrolUserText(arrayUsertext, textUser);
    },
    // Инспектор массивов - при наличии элементов, обнуляет их
    inspectArr (arr){
        arr.length = 0;
        return arr;
    },
    // Вывод подходящих строк в доп окно
    getScrolUserText(card, text){
        if (text == ''){
            document.querySelector('.window_user_text').innerHTML = "";
            document.querySelector('.window_user_text').style = "display: none;";
            this.seter = true;
            return;
        }
        document.querySelector('.window_user_text').style = "display: flex;";
        document.querySelector('.window_user_text').innerHTML ='';
        for(let q = 0; q < card.length; q++){
            document.querySelector('.window_user_text').insertAdjacentHTML('beforeend', `<div class = "test_card">${card[q]}</div>`);
        } 
    },
    // Вывод кард на экран
    setCardWindowUserFilter(arr, textUser){
        this.seter = false;
        for(let index in arr){
            if(arr[index].product == textUser){
                document.querySelector('.window_user_text').style = "display: none;";
                this.cardWindowUser[index] = arr[index];
                console.log(arr[index]);
                return;
            } else {
                document.querySelector('.window_user_text').style = "display: none;";
                this.cardWindowUser = arr;
            }
        }
        return;
        }
    },

    mounted(){
// 1 Код первоначального рендеринга карт, так же последующих при переходе к первоначальной странице
        fetch('https://raw.githubusercontent.com/ilias222/js_full_stack/lessen1/card_list.json')
        .then(text => text.json())
        .then(data => {
        this.goods = data.cardViev1;
        this.allListgoods = Object.keys(data);
        this.allValuesgoods = Object.values(data);
    });
//--------------------------------------------------------------------------------------------------1

    } 
        
    });

    