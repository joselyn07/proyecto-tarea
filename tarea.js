confirm("ingrese un texto");

const tarea= document.getElementById('tarea');
const btn= document.getElementById('btn');
const color=document.getElementById('color')
console.log(tarea.value)

btn.addEventListener('click', function(){
    if (verificar(tarea.value)) {
        const cajaTareas= document.getElementById('cajaTareas');
        console.log(tarea.value)
        const itemCaja=document.createElement('div');
        itemCaja.className='contenedorTarea';
        itemCaja.id = 'contenedorTarea'
        itemCaja.innerHTML= `
        <div id='Tarea'>
        <input type="checkbox" id="uno">
        <label class='task' for="uno">${tarea.value}</label>
        </div>
        <button onclick="eliminar()" onclick="myFunction()">eliminar</button>
        `;
        cajaTareas.appendChild(itemCaja);
    }else{
        alert('La tarea ya existe')
    }
    

})

function eliminar(){
    const tarea = document.getElementById('contenedorTarea')
    console.log(tarea)

    tarea.remove()
}

function verificar(task){
    let tasks= document.querySelectorAll('.task')
    for (let contador = 0; contador < tasks.length; contador++) {
        if (tasks[contador].textContent===task) {
            return false
        }
    }
    return true
}

