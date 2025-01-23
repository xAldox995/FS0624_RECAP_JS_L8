const input = document.querySelector('input')
const ul = document.getElementById("tasksList")

const addTask = function (ev) {
    ev.preventDefault()
    const newTask = document.createElement('li')
    if (input.value !== '') {
        newTask.innerHTML = input.value
        newTask.addEventListener('click', (ev) => {
            newTask.classList.toggle('complete')
        });
        const delBtn = document.createElement('button')
        delBtn.style.backgroundColor = 'black'
        delBtn.innerText = '❌'
        delBtn.addEventListener('click', (ev) => {
            ul.removeChild(newTask)
        });
        newTask.appendChild(delBtn)
        ul.appendChild(newTask)
        input.value = ''
    }
}
