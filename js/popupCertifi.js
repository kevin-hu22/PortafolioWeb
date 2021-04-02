
const contenedor1 = document.getElementById('contenedor_cert1')
const contenedor2 = document.getElementById('contenedor_cert2')
const contenedor3_1 = document.getElementById('contenedor_cert3_1')
const contenedor3_2 = document.getElementById('contenedor_cert3_2')
const contenedor4 = document.getElementById('contenedor_cert4')

const shadow1 = document.getElementById('shadow1');
const shadow2 = document.getElementById('shadow2');
const shadow3 = document.getElementById('shadow3');
const shadow4 = document.getElementById('shadow4');


function abrir(){
    document.querySelector('body').style.overflow ="hidden"
    contenedor1.classList.add('show')
    shadow1.classList.add('show')
}
function cerrar(){
    contenedor1.classList.remove('show')
    shadow1.classList.remove('show')
    document.querySelector('body').style.overflow = "auto"
}


function abrir2(){
    document.querySelector('body').style.overflow ="hidden"
    contenedor2.classList.add('show')
    shadow2.classList.add('show')
}
function cerrar2(){
    contenedor2.classList.remove('show')
    shadow2.classList.remove('show')
    document.querySelector('body').style.overflow = "auto"
}



function abrir3_1(){
    document.querySelector('body').style.overflow ="hidden";
    contenedor3_1.classList.add('show')
    shadow3.classList.add('show')
}
function cerrar3_1(){
     contenedor3_1.classList.remove('show')
     shadow3.classList.remove('show')
     document.querySelector('body').style.overflow = "auto";
}
function abrir3_2(){
    document.querySelector('body').style.overflow ="hidden";
    contenedor3_2.classList.add('show')
    shadow3.classList.add('show')
}
function cerrar3_2(){
     contenedor3_2.classList.remove('show')
     shadow3.classList.remove('show')
     document.querySelector('body').style.overflow = "auto";
}



function abrir4(){ 
    document.querySelector('body').style.overflow ="hidden"
    contenedor4.classList.add('show')
    shadow4.classList.add('show')
}
function cerrar4(){ 
    contenedor4.classList.remove('show')
    shadow4.classList.remove('show') 
    document.querySelector('body').style.overflow = "auto";
}
