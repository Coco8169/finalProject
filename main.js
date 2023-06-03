

tasksJson = '[ {"title": "task1", "assignedTo": "Coco", "description": "task assigned to Coco", "dueDate": "10/6/2023", "status": "inprocess"}, \
{"title": "task2", "assignedTo": "Coco", "description": "task assigned to Coco", "dueDate": "12/6/2023", "status": "inprocess"} ]';

const tasks = JSON.parse(tasksJson);


const cardDeck = document.getElementById('card-deck');
// display cards
for(let i = 0; i < tasks.length; i++) {
    let card = creatCardElement(tasks[i]);
    cardDeck.appendChild(card);
}
// display card
function creatCardElement(task) {
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
    eleCardTitle.setAttribute('id', `task-title-${task.id}`);
    eleCardTitle.textContent = task.title;
    eleCardBody.appendChild(eleCardTitle);
    //<h6 class="card-subtitle mb-2 text-muted" id="assigned-to">Assigned to: </h6>
    const eleCardAssignedTo = document.createElement('h6');
    eleCardAssignedTo.classList.add('card-subtitle', 'mb-2', 'text-muted');
    eleCardAssignedTo.setAttribute('id', `assigned-to-${task.id}`);
    eleCardAssignedTo.textContent = `Assigned to:  ${task.assignedTo}`;
    eleCardBody.appendChild(eleCardAssignedTo);
    //<p class="card-text" id="task-description">Task description</p>
    const eleCardDescription = document.createElement('p');
    eleCardDescription.classList.add('card-text');
    eleCardDescription.setAttribute('id', `task-description-${task.id}`);
    eleCardDescription.textContent = `Task Description: ${task.description}`;
    eleCardBody.appendChild(eleCardDescription);
    //<p class="card-text" id="due-date">Due date: </p>
    const eleCardDueDate = document.createElement('p');
    eleCardDueDate.classList.add('card-text');
    eleCardDueDate.setAttribute('id', `due-date-${task.id}`);
    eleCardDueDate.textContent = `Task Duedate: ${task.dueDate}`;
    eleCardBody.appendChild(eleCardDueDate);
    //<p class="card-text" id="task-status">Status: </p>
    const eleCardStatus = document.createElement('p');
    eleCardStatus.classList.add('card-text');
    eleCardStatus.setAttribute('id', `task-status-${task.id}`);
    eleCardStatus.textContent = `Task Status: ${task.status}`;
    eleCardBody.appendChild(eleCardStatus);
    // delete button
    /*

    <button class="delete">
        <i class="far fa-trash-alt" style="font-size: 24px; color: red;"></i>
    </button>
    */
   const deleteButton = document.createElement('button');
   deleteButton.classList.add('delete');
   eleCardBody.appendChild(deleteButton);
   const i = document.createElement('i');
   i.classList.add('far', 'fa-trash-alt');
   i.setAttribute('style',"font-size: 24px; color: red;" );
   deleteButton.appendChild(i);
    return eleCard;
    
}

function taskAdd () {

}

