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
        <input type="checkbox" class='checks' onchange="contador()">
        <label class='task'>${tarea.value}</label>
        </div>
        <button onclick="eliminar()">eliminar</button>
        `;
        cajaTareas.appendChild(itemCaja);
    }else{
        alert('La tarea ya existe')
    }
})

function eliminar(){
    const tarea = document.getElementById('contenedorTarea')
    console.log(tarea)
    tarea.remove();
    contador()
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

function contador(){
    const con =document.getElementById('con');
    //const checks=document.getElementsByClassName('checks')
    const checks=document.querySelectorAll('.checks')
    let cont=0;
    for (let i =0; i < checks.length; i++) {
        if (checks[i].checked===true) {
            cont++;
            //cont=cont+1;
        }
    }
    con.textContent=cont;
}