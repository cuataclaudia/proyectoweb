var nombre;
var nombreSpan = document.getElementById('nombre');
var boton = document.getElementById('cambiarNombre');

boton.addEventListener('click', function () {
        nombre = prompt("¿Cual quieres que sea el nuevo nombre?");
        //nombreSpan.firstChild.nodeValue = nombre; 
    
   /* if(nombre!=""){
       alert("Hola " + nombre);
        console.log(nombre);
        nombreSpan.firstChild.nodeValue = nombre; 
       }else{
       alert("Debes escribir un nombre!");
         nombre = prompt("¿Cual quieres que sea el nuevo nombre?");
         //nombreSpan.firstChild.nodeValue = nombre;  
       }
    */
    if(nombre==""){
        alert("No puedes dejar tu nombre en blanco");
    }else if (!nombre); //(nombre==null)
    else{
        nombreSpan.firstChild.nodeValue = nombre; 
    }
    console.log(nombre);    
    
});