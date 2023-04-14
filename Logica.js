// document.write("Se enlajo JavaScript");

const Encrintando =()=>{
    const frase = document.getElementById("frase").value;
    const titulo = document.getElementById("titulo");
    const parrafo = document.getElementById("parrafo");
    const muñeco =  document.getElementById("muñeco");

    const fraseCriptada = frase
        .replace(/e/gi, "enter")
        .replace(/i/gi, "limes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    if (frase.length !=0) {
        frase = fraseCriptada;
        titulo.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        muñeco.src = "https://png.pngtree.com/png-clipart/20190904/original/pngtree-thinking-simple-characters-free-elements-png-image_4481227.jpg";
    }else{
        muñeco.src= "img/Muñeco (1).png";
        alert("Debes ingresar algún texto");
    }

}