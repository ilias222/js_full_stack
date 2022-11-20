/**
 * Скрипт тригерра
 */

 "use strict";

 let cursorArr = [];
 let reverCursor = [];
 let loop = 1;

 const prevClick = document.querySelector('._prev_page_link');
 const nextClick = document.querySelector('._next_page_link');
 const numberClick = document.querySelector('._numerpagge_index_item_link');
 const amoreZet = document.querySelector('.amore');
 const maxKey = document.querySelector('.num5');

 class ShablProductTrigger extends ProductViev {
    constructor(product, praise, img){
        super(product, praise, img);
    }
 }
// Заполняем вторичный массив числом страниц на триггере, если уже заполнен - выходим из функции
class innerTrigger{
     static inspectorArrPush() {
         if (!reverCursor[0]){
             for (let i = 0; i < maxKey.textContent; i++){
                 reverCursor[i] = 1 + i;
             }
         }
         return;
     }

     static minMaxNumer(eve){
        if (reverCursor[0] == 1 && eve.target.classList[0] == '_prev_page_link'){
            reverCursor[0] == 1; 
            console.log(eve.target.classList[0]);
            return;
        }
        if (reverCursor[0] >= 16 && eve.target.classList[0] == '_next_page_link'){
            document.querySelector('.num' + (loop + 1)).textContent = reverCursor[loop];
            reverCursor[0] == 1; 
            console.log(eve.target.classList[0]);
            return;
        }

        for(let i = 0; i < 4; i++){
            document.querySelector('.num' + (i + 1)).textContent = reverCursor[i];
        }
        
     }
     
     // Карусель страниц при нажатии на вперед и назад
    static nextPrevClick (ev){
         innerTrigger.inspectorArrPush();
        if (ev.target.classList[0] == '_next_page_link'){
            reverCursor.push(reverCursor.shift());
            innerTrigger.minMaxNumer(ev);
            
        } else {
            reverCursor.unshift(reverCursor.pop());
            innerTrigger.minMaxNumer(ev);
        }

        console.log(reverCursor);
    }
}

prevClick.addEventListener('click', event =>{
    innerTrigger.nextPrevClick (event);
});

nextClick.addEventListener('click', event =>{
    innerTrigger.nextPrevClick (event);
});