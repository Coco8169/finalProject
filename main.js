

tasksJson = '[ {"title": "Example task", "assignedTo": "Coco", "description": "task assigned to Coco", "dueDate": "10/6/2023", "status": "inprocess"}]';

let cardId = 1;
let tasks = JSON.parse(tasksJson);


const cardDeck = document.getElementById('card-deck');
// display cards
for(let i = 0; i < tasks.length; i++) {
    let card = creatCardElement(tasks[i]);
    cardDeck.appendChild(card);
}
// display card
function creatCardElement(task) {
    task.id = cardId;
    // <div class="card">
    const eleCard = document.createElement('div');
    eleCard.classList.add('card');
    // <div class="card-body bg-light">
    const eleCardBody = document.createElement('div');
    eleCardBody.classList.add('card-body', 'bg-light');
    eleCard.appendChild(eleCardBody);
    //<h5 class="card-title" id="task-title">Task Name</h5>
    const eleCardTitle = document.createElement('h5');
    eleCardTitle.classList.add('card-title');
    eleCardTitle.setAttribute('id', `task-title-${cardId}`);
    eleCardTitle.textContent = task.title;
    eleCardBody.appendChild(eleCardTitle);
    //<h6 class="card-subtitle mb-2 text-muted" id="assigned-to">Assigned to: </h6>
    const eleCardAssignedTo = document.createElement('h6');
    eleCardAssignedTo.classList.add('card-subtitle', 'mb-2', 'text-muted');
    eleCardAssignedTo.setAttribute('id', `assigned-to-${cardId}`);
    eleCardAssignedTo.textContent = `Assigned to:  ${task.assignedTo}`;
    eleCardBody.appendChild(eleCardAssignedTo);
    //<p class="card-text" id="task-description">Task description</p>
    const eleCardDescription = document.createElement('p');
    eleCardDescription.classList.add('card-text');
    eleCardDescription.setAttribute('id', `task-description-${cardId}`);
    eleCardDescription.textContent = `Task Description: ${task.description}`;
    eleCardBody.appendChild(eleCardDescription);
    //<p class="card-text" id="due-date">Due date: </p>
    const eleCardDueDate = document.createElement('p');
    eleCardDueDate.classList.add('card-text');
    eleCardDueDate.setAttribute('id', `due-date-${cardId}`);
    eleCardDueDate.textContent = `Task Duedate: ${task.dueDate}`;
    eleCardBody.appendChild(eleCardDueDate);
    //<p class="card-text" id="task-status">Status: </p>
    const eleCardStatus = document.createElement('p');
    eleCardStatus.classList.add('card-text');
    eleCardStatus.setAttribute('id', `task-status-${cardId}`);
    eleCardStatus.textContent = `Task Status: ${task.status}`;
    eleCardBody.appendChild(eleCardStatus);
    // delete button
    /*

   <a href="#" class="btn-danger btn-sm"><i class="fas fa-trash fa-sm" ></i></a>
    */
   const deleteButton = document.createElement('a');
   deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
   deleteButton.addEventListener('click', function() {
    eleCard.remove();
  });
   eleCardBody.appendChild(deleteButton);
   const i = document.createElement('i');
   i.classList.add('fas', 'fa-trash', 'fa-sm');
   deleteButton.appendChild(i);
   cardId++;
    return eleCard;
    
}

function taskAdd () {
const name = document.getElementById('name').value;
if(name.length == 0){
    alert("Please input name");
    return;
}
if(name.length > 8){
    alert("Name is too long");
    return;
}
const description = document.getElementById('description').value;
if(description.length == 0){
    alert("Please input description");
    return;
}
if(description.length > 50){
    alert("Description is too long");
    return;
}
const assignedTo = document.getElementById('assignedTo').value;
if(assignedTo.length == 0){
    alert("Please input name");
    return;
}
if(assignedTo.length > 8){
    alert("Name is too long");
    return;
}
const dueDate = document.getElementById('dueDate').value;
const status = document.getElementById('status').value;
let card = {
    title: name,
    assignedTo: assignedTo,
    description: description,
    dueDate: dueDate,
    status: status,
}
tasks.push(card);
let cardEle = creatCardElement(card);
   cardDeck.appendChild(cardEle);
}

