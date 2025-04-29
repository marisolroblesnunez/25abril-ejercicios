//Arrray para guardar las tareas
let listaDeTareas=[];//tengo que poner que es una variable, si no no puedo modificarlo con la manera nueva de abajo
let contadorTareas= 0;
const colorUrgente="rgb(228, 10, 10) ";// f1--color picket
const ColorObligatoria="rgb(6, 34, 194)";
const colorOpcional="rgb(14, 202, 67)";

//recupero las tareas guardadas en el navegador
if(localStorage.getItem("tareasGuardadas") != null){
listaDeTareas= localStorage.getItem("tareasGuardadas");
listaDeTareas= JSON.parse(listaDeTareas);
listaDeTareas.forEach(item => {
    displayTarea(item);
    if(item.id > contadorTareas){
        contadorTareas = item.id + 1;
    }
});
}
//como estan guardadas en el formato JSON, le cambio el formato a array objetos, (que era lo que tenia)






//selecciona el boton de añadir tarea y le crea un evento para el botón
// document.getElementById("buttonAdd").addEventListener("click", function()){
//     //código de la función
// }
//para que cuando se haga click sobre el boton se ejecute la funcion crear tarea

document.getElementById("buttonAdd").addEventListener("click", crearTarea);
function crearTarea(){
    //Leer los datos del input
    let textotarea = document.getElementById("inputTarea").value;//para que cuando pongamos una tarea se mande de verdad y tenga un valor.(value es para asignarle valor y solo sirve para los formularios.<input><textarea><select>
    let tipoTarea= document.getElementById("tipoTarea").value;//para que cuando diga urgente opcional obligatorio tenga un valor de verdad
    //color

    
    //comprobar que hay datos
    // trim()elimina los espacios de principio y final del string
    textotarea = textotarea.trim();
    //comprueba que textotarea tenga algo y no este vacio
    if(textotarea===""){
    //si textotarea no tiene nada
    //mostrar mensaje
        document.getElementById("error").textContent= "No has introducido ninguna tarea"
     // document.getElementById("error").style.display="block"
    // //finaliza la ejecucion de la funcion.
        return;}
     //si llegamos aqui es porque en textotarea hay datos entonces hay que poner que no quiero que me aparezca ningun mensaje si hay datos.
    // }else if(textotarea!==""){document.getElementById("error").style.display="none";} //también puedo poner en vez de esto, else{y dentro lo mismo}
    document.getElementById("error").textContent=""; //no hace falta poner else ni else if, realmente porque dentro de la funcion he puesto un return.
    //creo que tarea sea un objeto, que tenga texto y tipo 
    const tarea={
        id:contadorTareas,//esto sirve para identificar la tarea
        texto: textotarea,
        tipo: tipoTarea,
        tareaRealizada: false,
    
    }
    contadorTareas++;

    //añadir la tarea al final del array, con el push,con esta se puede modificar una constante, pero es mejor la manera nueva 
    // listaDeTareas.push(tarea);
listaDeTareas=[...listaDeTareas,tarea];
localStorage.setItem("tareasGuardadas",JSON.stringify(listaDeTareas));
console.log(listaDeTareas);


//crear un li con la tarea y añadirlo al ul
// let liTarea = `<li>${tarea}<button class="eliminar">Eliminar</button><li>`;


// document.getElementById("listaTareas").innerHTML+=liTarea;
//creo una variable con un icono para mostrar segun sea el tipo de tarea de un color u otro 

let iconoTipo = "&#129001;";
if(tarea.tipo==="obligatorio"){
    iconoTipo= "&#128998;";
} else if(tarea.tipo==="urgente"){
iconoTipo = "&#128997;";
}
//crear un nodo de tipo li(etiqueta de html li), esto es para crear un li para que java lo pueda leer y ya podamos llamarlo con queryselector porque es una etiqueta.
//checkbox es una casilla de verificacion.

const li= document.createElement("li");//aqui creo el li
//aqui añado el contenido que va a tener el li que he creado
li.innerHTML=`

    <div data-id="${tarea.id}">
        <input  type="checkbox" class="tareaRealizada">
               
                ${iconoTipo} 
                <span class="texto-tarea">
                ${tarea.texto}
                </span>
    </div>
    <button class="eliminar">&#128465; </button>`;//&#128465; este código lo he puesto para añadirle una papelera al boton de eliminar



    //para aplicarle el color
                if(tarea.tipo==="obligatorio"){
                    li.style.backgroundColor= ColorObligatoria;
                }else if(tarea.tipo==="urgente"){
                    li.style.backgroundColor= colorUrgente;
                }
                
       //añado el elemento li como hijo     
document.getElementById("listaTareas").appendChild(li);//aqui añado li como hijo
            


li.querySelector(".eliminar").addEventListener("click", function(){
    //averiguar que id tiene la tarea
    let idTarea = li.querySelector("div").getAttribute("data-id");//para saber exactamente la tarea que estoy borrando
    listaDeTareas = listaDeTareas.filter(item => item.id != idTarea);//crea un nuevo array con todos los elementos que cumplan la condicion que hay dentro del parentesis, porque realmente para poder modificar el array sin hacer esto,
    // es igual que el push pero el push lo modifica, y esta nueva forma, crea uno nuevo. El push que es un ejemplo que he metido en -arrays.js-
    localStorage.setItem("tareasGuardadas",JSON.stringify(listaDeTareas));
    console.log(listaDeTareas)
    //borrar tarea de la pantalla
    li.remove();
//esto es para eliminar la tarea
})

li.querySelector(".tareaRealizada").addEventListener("click", function(){
//comprueba la casilla seleccionada



if(li.querySelector(".tareaRealizada").checked){
//si la casilla esta seleccionada, entonces baja la opacidad y tacha el texto
    li.style.opacity="0.5";//cambiar la opacidad
    li.querySelector(".texto-tarea").style.textDecoration="line-through";//tacha el texto
    //osea que si es verdad que esta seleccionado
    tarea.tareaRealizada= true;
}else{//aqui la tarea no esta seleccionada, entonces le subo la opacidad y ya no tacha el texto
    li.style.opacity= "1";
    li.querySelector(".texto-tarea").style.textDecoration="none";
    //aqui le digo que si es falso que esta seleccionado,,osea que si no esta seleccionado 
    tarea.tareaRealizada= false;
}
localStorage.setItem("tareasGuardadas",JSON.stringify(listaDeTareas));
console.log(listaDeTareas);
})

document.getElementById("inputTarea").value="";
}
 








//voy a crear un funcion para que se me queden guardadas las tareas que meto en la pantalla, y se guarden en el navegador siempre que lo abra.
function displayTarea(tarea){
    let iconoTipo = "&#129001;";
if(tarea.tipo==="obligatorio"){
    iconoTipo= "&#128998;";
} else if(tarea.tipo==="urgente"){
iconoTipo = "&#128997;";
}
//crear un nodo de tipo li(etiqueta de html li), esto es para crear un li para que java lo pueda leer y ya podamos llamarlo con queryselector porque es una etiqueta.
//checkbox es una casilla de verificacion.

const li= document.createElement("li");//aqui creo el li
//aqui añado el contenido que va a tener el li que he creado
li.innerHTML=`

    <div data-id="${tarea.id}">
        <input  type="checkbox" class="tareaRealizada">
               
                ${iconoTipo} 
                <span class="texto-tarea">
                ${tarea.texto}
                </span>
    </div>
    <button class="eliminar">&#128465; </button>`;//&#128465; este código lo he puesto para añadirle una papelera al boton de eliminar
                //para aplicarle el color
                if(tarea.tipo==="obligatorio"){
                    li.style.backgroundColor= ColorObligatoria;
                }else if(tarea.tipo==="urgente"){
                    li.style.backgroundColor= colorUrgente;
                }

                if(tarea.tareaRealizada==true){
                    li.style.opacity ='0.5';
                    //tacha el texto
                    li.querySelector('.texto-tarea').style.textDecoration = "line-through";
                    //marcar el checkbox como seleccionado
                    li.querySelector('.tareaRealizada').checked = true;
                }
                
       //añado el elemento li como hijo     
document.getElementById("listaTareas").appendChild(li);//aqui añado li como hijo
            


li.querySelector(".eliminar").addEventListener("click", function(){
    //averiguar que id tiene la tarea
    let idTarea = li.querySelector("div").getAttribute("data-id");//para saber exactamente la tarea que estoy borrando
    listaDeTareas = listaDeTareas.filter(item => item.id != idTarea);//crea un nuevo array con todos los elementos que cumplan la condicion que hay dentro del parentesis, porque realmente para poder modificar el array sin hacer esto,
    // es igual que el push pero el push lo modifica, y esta nueva forma, crea uno nuevo. El push que es un ejemplo que he metido en -arrays.js-
    localStorage.setItem("tareasGuardadas",JSON.stringify(listaDeTareas));
    console.log(listaDeTareas)
    //borrar tarea de la pantalla
    li.remove();
//esto es para eliminar la tarea
})

li.querySelector(".tareaRealizada").addEventListener("click", function(){
//comprueba la casilla seleccionada



if(li.querySelector(".tareaRealizada").checked){
//si la casilla esta seleccionada, entonces baja la opacidad y tacha el texto
    li.style.opacity="0.5";//cambiar la opacidad
    li.querySelector(".texto-tarea").style.textDecoration="line-through";//tacha el texto
    //osea que si es verdad que esta seleccionado
    tarea.tareaRealizada= true;
}else{//aqui la tarea no esta seleccionada, entonces le subo la opacidad y ya no tacha el texto
    li.style.opacity= "1";
    li.querySelector(".texto-tarea").style.textDecoration="none";
    //aqui le digo que si es falso que esta seleccionado,,osea que si no esta seleccionado 
    tarea.tareaRealizada= false;
}
localStorage.setItem("tareasGuardadas",JSON.stringify(listaDeTareas));
console.log(listaDeTareas);
})

document.getElementById("inputTarea").value="";
}
