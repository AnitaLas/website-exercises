function menu(name){
    let exerciseResults = document.getElementsByClassName("exerciseResult");
    for(let rs of exerciseResults){
        rs.style.display = "none";
    }

    let elem = document.getElementById(name);
    elem.style.display = "block";
    // elem.classList.add
}

menu("exerciseResult1")

let bt1 = document.getElementById('bt1')
//bt1.addEventListener('click', menu('article1')) // ten lisner wywoła funkcje
bt1.addEventListener('click', () => {menu('exerciseResult1')})

let bt2 = document.getElementById("bt2");
bt2.addEventListener('click', () => {menu("exerciseResult2")})

let bt3 = document.getElementById("bt3");
bt3.addEventListener('click', () => {menu("exerciseResult3")})