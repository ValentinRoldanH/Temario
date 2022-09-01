
function CambiarColor(colorr){
    document.body.style.backgroundColor = colorr;
    document.body.style.color = "black";
}


function ColorAleatorio(){
    let random1 = Math.floor(Math.random()*255);
    let random2 = Math.floor(Math.random()*255);
    let random3 = Math.floor(Math.random()*255);
    document.body.style.backgroundColor = `rgba(${random1},${random2},${random3})`;
    document.body.style.color = "black";
}

function CambiarANegro(){
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white";
}

