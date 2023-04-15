// document.write("Se enlajo JavaScript");

const Encrintando =()=>{
    const frase = document.getElementById("frase").value;
    const titulo = document.getElementById("titulo");
    const parrafo = document.getElementById("parrafo");
    const muñeco =  document.getElementById("muñeco");

    const fraseCriptada = frase
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    if (document.getElementById("frase").value.length != 0) {
        document.getElementById("frase").value = fraseCriptada;
        document.getElementById("titulo").textContent ="Texto Encriptado";
        document.getElementById("titulo").value = titulo;
        document.getElementById("parrafo").textContent =" ";
        document.getElementById("parrafo").value = parrafo;
        document.getElementById("muñeco").src = "https://d22k5h68hofcrd.cloudfront.net/magefan_blog/Como_cifrar_correos_y_enviar_mensajes_seguros.jpg";
    }else{
        document.getElementById("muñeco").src= "img/Muñeco (1).png";
        swal("Porfa llena el campo", "Debes ingresar un texto", "warning");
    }

}

const Desencriptar =()=>{
    const frase = document.getElementById("frase").value;
    const titulo = document.getElementById("titulo");
    const parrafo = document.getElementById("parrafo");
    const muñeco =  document.getElementById("muñeco");

    const fraseDesCriptada = frase
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    if (document.getElementById("frase").value.length != 0) {
        document.getElementById("frase").value = fraseDesCriptada;
        document.getElementById("titulo").textContent ="Texto Desencriptado";
        document.getElementById("titulo").value = titulo;
        document.getElementById("parrafo").textContent =" ";
        document.getElementById("parrafo").value = parrafo;
        
        document.getElementById("muñeco").src = "https://elceo.com/wp-content/uploads/2020/11/smartphone.jpg";
    }else{
        document.getElementById("muñeco").src= "img/Muñeco (1).png";
        swal("Porfa llena el campo", "Debes ingresar un texto", "warning");
    }

}