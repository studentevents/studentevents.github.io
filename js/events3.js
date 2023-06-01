for(let i = 9; i < 13; i++){
    if(localStorage.getItem('user') == 'true'){
        if(localStorage.getItem("event" + i.toString()) == 'true'){
        document.getElementById(i.toString()).childNodes[3].childNodes[1].classList.add("active");
        document.getElementById(i.toString()).childNodes[3].childNodes[3].classList.add("active");
    }
    }
}