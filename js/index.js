
window.onload =  function(){
    let viso1 = document.getElementById("visor");//Referente al visor
    let mititulo  = document.getElementById("titulo")//Referente al pie de la foto
}

//Creamos un funcion de  enlace con el html
function mifoto(num){
    //ruta de  la  img
    f = "./image/foto"+num+".jpg";
    //img que cambiara
    document.images["fotovisor"].src = f;
    //Texto que cambiara
    t = document.images["foto"+num].alt;
    //cambiar el pie de la foto 
    titulo.innerHTML = t;
}