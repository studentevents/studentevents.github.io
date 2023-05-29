const logInBtn = document.querySelector(".header__logIn__btn");
const user = document.querySelector(".header__logIn__user");
const username = document.querySelector(".header__logIn__username");
const modalWindow = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__form__close");
const modalButtons = document.querySelectorAll(".modal__form__header__item");
const modalTitle = document.querySelector(".modal__form__title");
const modalButton = document.querySelector(".modal__form__btn");
const eventsUp = document.querySelectorAll(".events__up__item__img");
const eventsBottom = document.querySelectorAll(".events__bottom__item__img");
const select = document.querySelectorAll(".select");
const message = document.querySelector(".message");
const logOut = document.querySelector(".logOut");
const error = document.querySelector(".error");
let isStudent = true;

const fadeIn = (el, timeout, display) =>{
    el.style.opacity = 0;
    el.style.display = display || 'block';
    el.style.transition = `opacity ${timeout}ms`
    setTimeout(() => {
        el.style.opacity = 1;
    }, 10);
};

const fadeM = (el, timeout, display) =>{
    el.style.opacity = 0;
    el.style.display = display;
    el.style.transition = `opacity ${timeout}ms`
    setTimeout(() => {
        el.style.opacity = 1;
    }, 10);
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`
    el.style.opacity = 0;
    setTimeout(() => {
        el.style.display = 'none';
    },timeout);
    
};

const fadeOut = (el, timeout) =>{
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`
    el.style.opacity = 0;

    setTimeout(() => {
        el.style.display = 'none';
    },timeout);
};

if(localStorage.getItem('user') == 'true'){
    user.src = '/img/user.png';
    username.textContent = 'Василий';
    logInBtn.style.display = 'none';
}

logOut.addEventListener("click", function(){
    console.log(1);
    localStorage.setItem('user', false);
    user.src = '';
    username.textContent = '';
    logInBtn.style.display = 'block';
    location.reload();
})



for(let i = 0; i < 8; i++){
    if(localStorage.getItem('user') == 'true'){
        if(localStorage.getItem("event" + i.toString()) == 'true'){
        document.getElementById(i.toString()).classList.add("active");
        select[i].classList.add("active");
    }
    }
    
}



eventsUp.forEach(el => {
    el.addEventListener("click", function(){
        if(localStorage.getItem('user') == 'true'){
            el.classList.add("active");
            select[el.id].classList.add("active");
            localStorage.setItem('event' + el.id.toString(), true);
            window.location.href = '/html/myevents.html';
        }else{
            fadeM(message, 1000, 'flex');
        }
    })
})
eventsBottom.forEach(el => {
    el.addEventListener("click", function(){
        if(localStorage.getItem('user') == 'true'){
            el.classList.add("active");
            select[el.id].classList.add("active");
            localStorage.setItem('event' + el.id.toString(), true);
            window.location.href = '/html/myevents.html';
        }else{
            fadeM(message, 1000, 'flex');
        }
    })
})
logInBtn.addEventListener("click", function(){
    fadeIn(modalWindow, 1000);
})

modalCloseBtn.addEventListener("click", function(){
    fadeOut(modalWindow, 1000);
})

modalButtons[0].classList.add("activeleft");
let choosenElement = modalButtons[0];

modalButtons.forEach(el => {
    el.addEventListener("click", function(){
    if(el == modalButtons[0]){
        el.classList.add("activeleft");
        choosenElement.classList.remove("activeright"); 
        choosenElement = el;
        modalTitle.textContent = 'Студенту';
        isStudent = true;
    }else{
        choosenElement.classList.remove("activeleft");
        el.classList.add("activeright"); 
        choosenElement = el;
        modalTitle.textContent = 'Организатору';
        isStudent = false;
    }
    })
    
})

modalButton.addEventListener("click", function(){
    if(document.querySelector(".name").value == "Василий" && document.querySelector(".password").value == '12345678'){
        document.querySelector(".name").value = '';
        document.querySelector(".password").value = '';
        fadeOut(modalWindow);
        user.src = '/img/user.png';
        username.textContent = 'Василий';
        logInBtn.style.display = 'none';
        localStorage.setItem('user', true);
        if(isStudent){
            localStorage.setItem('isStudent', true);
        }else{
            localStorage.setItem('isStudent', false);

        }
        for(let i = 0; i < 8; i++){
            if(localStorage.getItem('user') == 'true'){
                if(localStorage.getItem("event" + i.toString()) == 'true'){
                document.getElementById(i.toString()).classList.add("active");
                select[i].classList.add("active");
            }
            }
            
        }
    }else{
        fadeM(error, 1500, 'flex');
        document.querySelector(".name").value = '';
        document.querySelector(".password").value = '';
    }
})