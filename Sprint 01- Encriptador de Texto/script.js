
    function intercalarClave(addr, posicion, reemplazo) 
    {
    return addr.slice(0, posicion) + reemplazo + (addr).slice(posicion);  
    }
    function removerAcentos(texto) {
        return texto.replace(/[ÀÁÂÃÄÅ]/g, 'A')
            .replace(/[àáâãäå]/g, 'a')
            .replace(/[ÈÉÊË]/g, 'E')
            .replace(/[èéêë]/g, 'e')
            .replace(/[ÌÍÎÏ]/g, 'I')
            .replace(/[ìíîï]/g, 'i')
            .replace(/[ÒÓÔÕÖ]/g, 'O')
            .replace(/[òóôõö]/g, 'o')
            .replace(/[ÙÚÛÜ]/g, 'U')
            .replace(/[ùúûü]/g, 'u');
    }
    function encriptar()
    { 

        let texto = document.getElementById("entrada-txt").value;

        for(let i = 0; i <= texto.length; i++)
        {
            let letra = texto.at(i);
            switch(letra)
            {
                case "a":
                    texto = intercalarClave(texto, i+1, "i");
                    i += 1;
                break;
                case "e":
                    texto = intercalarClave(texto, i+1, "nter");
                    i += 4;
                break;
                case "i":
                    texto = intercalarClave(texto, i+1, "mes");
                    i += 3;
                break;
                case "o":
                    texto = intercalarClave(texto, i+1, "ber");
                    i += 3;
                break;
                case "u":
                    texto = intercalarClave(texto, i+1, "fat");
                    i += 3;
                break;
            }
        }
        
        setTexto(texto);
    }
    function desencriptar(texto)
    {
        texto = document.getElementById("entrada-txt").value;

        texto = texto.replaceAll("ai", "a");
        texto = texto.replaceAll("enter", "e");
        texto = texto.replaceAll("imes", "i");
        texto = texto.replaceAll("ober", "o");
        texto = texto.replaceAll("ufat", "u");

        setTexto(texto);
    }
    //Función para presentar el texto en la caja de salida
    function setTexto(texto){
        document.getElementById("salida-txt").innerHTML = texto;
    }

    document.getElementById("entrada-txt").addEventListener('keyup',function(){
        this.value = removerAcentos(this.value);
        this.value = this.value.toLowerCase();
        },true);

    //Envento botón para encriptar
    const enc =  document.getElementById("btn-enc");
    enc.addEventListener("click",encriptar);
    //Envento botón para desencriptar
    const desenc = document.getElementById("btn-desenc");
    desenc.addEventListener("click", desencriptar)
    
    const copy = document.getElementById("btn-copiar");
    //Evento para copiar el contenido del cuadro de salida de texto.
    copy.addEventListener("click", function () {
        // Crea un campo de texto "oculto"
        let aux = document.createElement("input");
        // Asigna el contenido del elemento especificado al valor del campo
        aux.setAttribute("value", document.getElementById("salida-txt").innerHTML);
        // Añade el campo a la página
        document.body.appendChild(aux);
        // Selecciona el contenido del campo
        aux.select();
        // Copia el texto seleccionado
        document.execCommand("copy");
        // Elimina el campo de la página
        document.body.removeChild(aux);
    });

    function prompt(){
        let div = document.getElementById("copy-msg");
        div.classList.add("visible");
        setTimeout( () => {
            div.classList.remove("visible");
        }, 4000);
        console.log(div);
    }

    copy.onclick = prompt;