const tarea= document.getElementById('tarea');
const btn= document.getElementById('btn');
const empty= document.querySelector('.empty');




console.log(tarea.value)


btn.addEventListener('click', function(){
    const cajaTareas= document.getElementById('cajaTareas');
    console.log(tarea.value)
    cajaTareas.innerHTML= tarea.value
})

confirm("ingrese un texto");


