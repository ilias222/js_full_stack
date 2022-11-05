//Проверка полей логина и пароля, без телефона!
//+ Переделать на универсальность проверки для всех страниц
"use strict";

const formInspector = document.querySelector('.cheking_accordeont__linner_box_form__text-input-right');
const emailInspector = document.querySelector('.email');
const paswordInspector = document.querySelector('.password');
const buttonSubmit = document.querySelector('.cheking_accordeont__linner_box_form__text-input-right_box-button-reset__input-button');
const regexpEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
const regexpPasword = /......*/;
// В форме нет проверки валидности номера телефона!
// Укажи в строке - 16: if(!regxpPhone... и проверь валидацию номера телефона, в поле - емейл
const regexpPhone = /\+7\d\d\d\d\d\d\d\d\d\d/;

emailInspector.addEventListener('input', event =>{
 if(!regexpEmail.test(emailInspector.value)){
     emailInspector.style = "box-shadow: 10px 10px 10px #f16d7f;";
     console.log('error');  
} else{
    emailInspector.classList.remove('errorFormat');
    document.querySelector('.modalWindowErrorEmail').style = "display: none;"; 
    emailInspector.style = "box-shadow: none;";
}
});

paswordInspector.addEventListener('input', event =>{
    if(!regexpPasword.test(paswordInspector.value)){
        paswordInspector.style = "box-shadow: 10px 10px 10px #f16d7f;";
   } else{
        document.querySelector('.modalWindowErrorPasword').style = "display: none;"; 
        paswordInspector.classList.remove('errorFormat');
        paswordInspector.style = "box-shadow: none;";
   }
});

formInspector.addEventListener('click', event =>{
    event.preventDefault('submit');
    event.preventDefault('click');
});
buttonSubmit.addEventListener('click', ev => {
        if(emailInspector.classList[2] == 'errorFormat'){
            document.querySelector('.modalWindowErrorEmail').style = "display: block;";
            emailInspector.style = "box-shadow: 10px 10px 10px #f16d7f;";
        } else {
            document.querySelector('.modalWindowErrorEmail').style = "display: none;";
        }
        if(paswordInspector.classList[2] == 'errorFormat'){
            document.querySelector('.modalWindowErrorPasword').style = "display: block;";
            paswordInspector.style = "box-shadow: 10px 10px 10px #f16d7f;";
        } else{
            document.querySelector('.modalWindowErrorPasword').style = "display: none;";
        };
        if (emailInspector.classList[2] != 'errorFormat' && paswordInspector.classList[2] != 'errorFormat') { 
            alert('Валидация пройденна');
        };
    });
    // return alert("Передача прошла!");
