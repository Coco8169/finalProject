
class TaskManager {
    constructor() {
      this.cardId = 1;
      this.tasks = [];
    }
  
    addTask(title, description, assignedTo, dueDate, status) {
      const card = {
        id: this.cardId,
        title: title,
        assignedTo: assignedTo,
        description: description,
        dueDate: dueDate,
        status: status,
      };
      this.tasks.push(card);
      this.save();
      const cardElement = this.createCardElement(card);
      this.appendCardElement(cardElement);
      this.cardId++;
    }
  
    removeTask(taskId) {
      const index = this.tasks.findIndex(task => task.id === taskId);
      if (index !== -1) {
        this.tasks.splice(index, 1);
        this.save();
        this.removeCardElement(taskId);
      }
    }

    markDone(taskId) {
        const index = this.tasks.findIndex(task => task.id === taskId);
        if (index !== -1) {
            this.tasks[index].status = "done";
            this.save();
            document.getElementById(`task-status-${taskId}`).textContent = `Task Status: done`;
        }


    }
    //save to local storage
    save() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
    //
    getTasks() {
        let tasks = localStorage.getItem("tasks");
        if (tasks === null) {
            tasks = "[]";
        }
        return tasks;
    }
  
    //create card
    createCardElement(task) {
        // <div class="card" id="card-xx">
        const eleCard = document.createElement('div');
        eleCard.setAttribute('id', `card-${task.id}`);
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
        //mark as done button
        //<a href="#" class="btn btn-md"> <i class="fa fa-check-circle fa-2x"></i></a>
        if (task.status !== "done") {
        const checkButton = document.createElement('a');
        checkButton.classList.add('btn', 'btn-md');
        checkButton.addEventListener('click', function() {
            taskManager.markDone(task.id);
            checkButton.remove();
        });
        eleCardBody.appendChild(checkButton);
        const icheck = document.createElement('i');
        icheck.classList.add('fa', 'fa-check-circle', 'fa-2x');
        checkButton.appendChild(icheck);
        }
        // delete button
        /*
        <a href="#" class="btn btn-danger btn-sm"><i class="fas fa-trash fa-sm" ></i></a>
        */
        
        const deleteButton = document.createElement('a');
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.addEventListener('click', function() {
            taskManager.removeTask(task.id);
        });
        eleCardBody.appendChild(deleteButton);
        const i = document.createElement('i');
        i.classList.add('fas', 'fa-trash', 'fa-sm');
        deleteButton.appendChild(i);
        return eleCard;
    }
  
    appendCardElement(cardElement) {
      const cardDeck = document.getElementById('card-deck');
      cardDeck.appendChild(cardElement);
    }
  
    removeCardElement(taskId) {
      const cardElement = document.getElementById(`card-${taskId}`);
      if (cardElement) {
        cardElement.remove();
      }
    }

    updateCardElement(taskId, task) {

    }
  }
  
const taskManager = new TaskManager();

const localJson = taskManager.getTasks();
const examples = JSON.parse(localJson);
//display example cards
for(let i = 0; i < examples.length; i++) {
    taskManager.addTask(examples[i].title, examples[i].description, examples[i].assignedTo, examples[i].dueDate, examples[i].status);
}

function taskAdd() {
    const name = document.getElementById('name').value;

    if(name.length < 8){
        alert("Name must longer than 8 characters");
        return;
    }
    const description = document.getElementById('description').value;
    
    if(description.length < 15){
        alert("Description must longer than 15 characters");
        return;
    }
    const assignedTo = document.getElementById('assignedTo').value;
   
    if(assignedTo.length < 8){
        alert("Name must longer than 8 characters");
        return;
    }
    const dueDate = document.getElementById('dueDate').value;
    if(dueDate.length === 0){
        alert("You need to choose a date");
        return;
    }
    const status = document.getElementById('status').value;
    taskManager.addTask(name, description, assignedTo, dueDate, status);
  }


