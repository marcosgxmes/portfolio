let btn = document.querySelector(".toggle");
let icon = btn.querySelector(".fa-bars");

btn.onclick = function() {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-times");
    } else { 
        icon.classList.replace("fa-times", "fa-bars");

    }
}


function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}


function clickMenu() {
if (itens.style.display == 'block') {
    itens.style.display = 'none'
}
else {
    itens.style.display = 'block'
}
}

function clickMenu1() {
    if (itens1.style.display == 'block') {
        itens1.style.display = 'none'
    }
    else {
        itens1.style.display = 'block'
    }
    }

    

    