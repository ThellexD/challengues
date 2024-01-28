let textarea = document.getElementById('textoIntroducido'); 
const encriptar = document.getElementById('encriptar'); 
const desencriptar = document.getElementById('desencriptar'); 
let contenedor = document.querySelector('.seccion1');
const clon = document.querySelector('.seccion2');
let almacenTexto = document.getElementById('clonText');

//Agrandar el textarea a medida que se va escriibiendo en este
textarea.addEventListener('input', function() { 
  this.style.height = 'auto'; 
  this.style.height = (this.scrollHeight) + 'px'; 
});

//funcion que permite encriptar el texto
encriptar.addEventListener('click', function encriptarFuncion() {
    let textoIngresado = document.getElementById('textoIntroducido').value; 
    const clave = ''
    const textoEncriptado = CryptoJS.AES.encrypt(textoIngresado,clave).toString();
    contenedor.style.display = 'none';
    clon.style.display = 'block';
    almacenTexto.value = textoEncriptado;

})


//funciion para desencriptar
desencriptar.addEventListener('click', function desencriptarFuncion() {
        const textoEncriptado = document.getElementById('clonText').value;
        clave = ''; // Clave de encriptación
        const textoDesencriptadoBytes = CryptoJS.AES.decrypt(textoEncriptado, clave);
        const textoDesencriptado = textoDesencriptadoBytes.toString(CryptoJS.enc.Utf8);
        almacenTexto.value = textoDesencriptado;
})


