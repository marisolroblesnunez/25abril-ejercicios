listaDeTareas= listaDeTareas
let frutas= ["pera","manzana","fresa"];
let frutaBuscada= "manzana";
for(let i = 0; i < frutas.length ; i+++){
    if(frutas[i]=== frutaBuscada){
        frutas.splice(1);
    }
}




let tareas=[
    {id:0, textoTarea: "cazar gamusinos"},
    {id:1, textoTarea: "cazar gamusinos"},
    {id:2, textoTarea: "cazar gamusinos"},
    {id:3, textoTarea: "cazar gamusinos"},
    {id:4, textoTarea: "cazar gamusinos"},
    {id:5, textoTarea: "cazar gamusinos"},
    {id:6, textoTarea: "Mirar mariposas"},
]


let idBorrar=3;
let nuevoArray = []
for (let i=0; i<listaDeTareas.length; i++){
    if(tareas[i].id==idBorrar){
        nuevoArray.push(tareas[i]);
    }
}
//metodo para arrays
//filter
//devuelve un array con todos los lemenos que cumplan una condicion 
tareas = tarea.filter( tarea => tarea.id !=idBorrar); // esto es una nueva forma de acerlo