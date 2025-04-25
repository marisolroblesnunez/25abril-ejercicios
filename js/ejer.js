//crear un evento para el botón
// document.getElementById("buttonAdd").addEventListener("click", function()){
//     //código de la función
// }

document.getElementById("buttonAdd").addEventListener("click", crearTarea);
function crearTarea(){
    //Leer los datos del input
    let textotarea = document.getElementById("inputTarea").value;
    let tipoTarea= document.getElementById("tipoTarea").value;//para que cuando diga urgente opcional obligatorio tenga un valor de verdad
    //color
    const colorUrgente="rgb(228, 10, 10) ";// f1--color picket
    const ColorObligatoria="rgb(6, 34, 194)";
    const colorOpcional="rgb(14, 202, 67)";
    
    //comprobar que hay datos
    textotarea = textotarea.trim();
    if(textotarea===""){
        //mostrar mensaje
        document.getElementById("error").textContent= "No has introducido ninguna tarea"
        return;
    }
    
    const tarea={
        texto: textotarea,
        tipo: tipoTarea
    
    }

//crear un li con la tarea y añadirlo al ul
// let liTarea = `<li>${tarea}<button class="eliminar">Eliminar</button><li>`;


// document.getElementById("listaTareas").innerHTML+=liTarea;

let iconoTipo = "&#129001;";
if(tarea.tipo==="obligatorio"){
    iconoTipo= "&#128998;";
} else if(tarea.tipo==="urgente"){
iconoTipo = "&#128997;";
}

const li= document.createElement("li");
li.innerHTML=`
    <div>
        <input  type="checkbox" class="tareaRealizada">
                ${iconoTipo} 
                ${tarea.texto}
    </div>
                <button class="eliminar">&#128465; </button>`;//&#128465; este código lo he puesto para añadirle una papelera al boton de eliminar
                //para aplicarle el color
                if(tarea.tipo==="obligatorio"){
                    li.style.backgroundColor= ColorObligatoria;
                }else if(tarea.tipo==="urgente"){
                    li.style.backgroundColor= colorUrgente;
                }
                
            
document.getElementById("listaTareas").appendChild(li);

li.querySelector(".eliminar").addEventListener("click", function(){
    li.remove();//esto es para eliminar la tarea
})

li.querySelector(".tareaRealizada").addEventListener("click", function(){

    if(li.querySelector(".tareaRealizada").checked){
    li.style.opacity="0.5";
    tarea.realizada= false;
}else{
    li.style.opacity= "1";
    tarea.realizada= true;
}
})

document.getElementById("inputTarea").value="";
}

