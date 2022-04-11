var buttons = document.querySelectorAll(".tecla");

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

for(i = 0; i < buttons.length; i++){
    var tecla = buttons[i];
    var classeTecla = tecla.classList[1];
    const idAudio = `#som_${classeTecla}`

    tecla.onclick=function(){
        tocaSom(idAudio);
    };
}