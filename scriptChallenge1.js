
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

    var botonencriptar = document.querySelector ("#btn-encriptar");
    botonencriptar.addEventListener("click",function(event){
        event.preventDefault();
        console.log("usted hizo click en encriptar");
    });

    var botondesencriptar = document.querySelector ("#btn-desencriptar");
    botondesencriptar. addEventListener("click",function(event){
        event.preventDefault();
        console.log("usted hizo click en desencriptar");
    
    });

var textoEntrada = document.querySelector('#input-texto')
var entradaMensaje = document.querySelector('#msg')

var entrada = document.querySelector('#input');
var btnEncriptar = document.querySelector('#btn-encriptar');

var btnDesencriptar = document.querySelector('#btn-desencriptar');
var btnCopiar = document.querySelector('#btn-copy');
var copiado = document.querySelector('#texto-copiado');

// replace = reemplazar //

 btnEncriptar.addEventListener('click',encriptar);   
  btnDesencriptar.addEventListener('click',desencriptar);     
    btnCopiar.addEventListener('click',() => {
        copiarTexto();
    });       
  
    function encriptar(){
        function encriptarTexto(entrada){
            let nuevaEntrada='';
            let vocales = { 'a': 'ai' , 'e': 'enter','i': 'imes','o': 'ober','u': 'ufat'}
            nuevaEntrada = entrada.replace(/[aeiou]/g, i => vocales[i]);
            return nuevaEntrada;
        }
        entradaMensaje.value= encriptarTexto(textoEntrada.value);
    }
    
    
    function desencriptar(){
        function desencriptarTexto(entrada){
            let nuevaEntrada='';
            let vocalesEncriptadas = { 'ai': 'a' , 'enter':'e','imes': 'i','ober':'o' ,'ufat':'u' }
            nuevaEntrada = entrada.replace(/ai|enter|imes|ober|ufat/g, i => vocalesEncriptadas[i]);
            return nuevaEntrada;
        }
        entradaMensaje.value= desencriptarTexto(textoEntrada.value);
    }
    
    function copiarTexto () {
        entradaMensaje.select();
        entradaMensaje.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(entradaMensaje.value);
        copiarTexto.textContent= 'Texto copiado con éxito ! 😉';
        setTimeout(() => {
            copiado.textContent = '';
            window.location.reload();
          }, 1000);
        navigator.reset();
    
      } 
            
    