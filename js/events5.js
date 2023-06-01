for(let i = 16; i < 19; i++){
    if(localStorage.getItem('user') == 'true'){
        if(localStorage.getItem("event" + i.toString()) == 'true'){
        if(i == 17){
            if(localStorage.getItem("event15") == 'true'){
                document.getElementById('15').childNodes[3].childNodes[1].classList.add("active");
                document.getElementById('15').childNodes[3].childNodes[3].classList.add("active"); 
            }
        }else{
            document.getElementById(i.toString()).childNodes[3].childNodes[1].classList.add("active");
            document.getElementById(i.toString()).childNodes[3].childNodes[3].classList.add("active");
        }
    }
    }
}