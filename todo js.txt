(function(){
    let saveButton = document.getElementById('saveButton')
    let inputEle = document.getElementById('todo-item-input')
    let todoItemsWrapper = document.getElementById('todo-items')
    let todoItems=[]
    function initializetodoItems(){
        let todoItems = JSON.parse(localStorage.getItem('todoItems'))
        if(todoItems && todoItems.length){
            for (let item in todoItems){
                renderNewTodoItem(item.value)
            }
        }
    }
    function renderNewTodoItem(value){
        const newToDoDiv=document.createElement('div')
        newToDoDiv.innerHTML=`<p class='todo-item'>${value}</p>`
        todoItemsWrapper.appendChild(newToDoDiv)
    }
    function saveDataToLocalStorage(){
        localStorage.setItem('todoItems',JSON.stringify(todoItems))
    }
    initializetodoItems()

    saveButton.addEventListener('click',function(event){
        todoItems.push({
            id:todoItems.length+1,
            value:inputEle.value
        })
        saveDataToLocalStorage()
        renderNewTodoItem(inputEle.value)
        inputEle.value=''
    })
})()