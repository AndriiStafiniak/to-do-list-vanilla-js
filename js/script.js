{
   let tasks = [];
   let hideDoneTasks = false;

   const removeTask = (index) => {
      tasks = [
         ...tasks.slice(0, index),
         ...tasks.slice(index + 1),
      ];
      render();
   };

   const toggleTaskDone = (index) => {
      tasks = [
         ...tasks.slice(0, index),
         {
            ...tasks[index],
            done: !tasks[index].done,
         },
         ...tasks.slice(index + 1),
      ];
      render();
   };

   const addNewTask = (newTaskContent) => {
      tasks = [...tasks, { content: newTaskContent }];
      render();
   };

   const markAllTasksDone = () => {
      tasks = tasks.map((task) => ({
         ...task,
         done: true,
      }));
      render();
   };

   const toggleHideDoneTasks = () => {
      hideDoneTasks = !hideDoneTasks;
      render();
   };

   const bindRemoveEvents = () => {
      const removeButton = document.querySelectorAll(".js-remove")

      removeButton.forEach((removeButton, index) => {
         removeButton.addEventListener("click", () => {
            removeTask(index);
         });
      });
   };

   const bindToggleDoneEvents = () => {
      const toggleDoneButtons = document.querySelectorAll(".js-toggleDone")

      toggleDoneButtons.forEach((toggleDoneButtons, index) => {
         toggleDoneButtons.addEventListener("click", () => {
            toggleTaskDone(index);
         });
      });
   };

   const renderTasks = () => {
      const taskToHTML = task =>
         `
        <li class="tasks__item ${task.done && hideDoneTasks ? "tasks__item--hidden" : " "} js-task" >
      <button class="tasks__button tasks__button--toggleDone js-toggleDone" >
         ${task.done ? "✔" : ""} 
        </button>
      <span class="tasks__content ${task.done ? " tasks__content--done" : ""}" >
         ${task.content}
        </span >
      <button class="tasks__button tasks__button--remove js-remove"> 🗑️ 
      </button>
        </li >
        `;
      const tasksElement = document.querySelector(".js-tasks");
      tasksElement.innerHTML = tasks.map(taskToHTML).join("");
   };

   const renderButtons = () => {
      const buttonsElement = document.querySelector(".buttons");

      if (!tasks.length) {
         buttonsElement.innerHTML = "";
         return;
      }

      buttonsElement.innerHTML = `
          <button
           class="buttons__button js-buttons js-toggleHideDoneTasks">
              ${hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
          </button>
          <button
              class= "buttons__button js-buttons js-markAllDone"
                  ${tasks.every(({ done }) => done) ? "disabled" : ""}>
              Ukończ wszystkie
          </button>`;
   };

   const bindButtonsEvents = () => {
      const markAllDoneButton = document.querySelector(".js-markAllDone");

      if (markAllDoneButton) {
         markAllDoneButton.addEventListener("click", markAllTasksDone);
      }
      const toggleHideDoneTasksButtons = document.querySelector(".js-toggleHideDoneTasks");

      if (toggleHideDoneTasksButtons) {
         toggleHideDoneTasksButtons.addEventListener("click", toggleHideDoneTasks);
      }
   };

   const render = () => {
      renderTasks();
      bindRemoveEvents();
      bindToggleDoneEvents();

      renderButtons();
      bindButtonsEvents();
   };

   const onForSubmit = (event) => {
      event.preventDefault();

      const newTaskElement = document.querySelector(".js-newTask");
      const newTaskContent = newTaskElement.value.trim();

      if (newTaskContent !== "") {
         addNewTask(newTaskContent);
         newTaskElement.value = "";
      };

      newTaskElement.focus();
   };

   const init = () => {
      render();

      const form = document.querySelector(".js-form");
      form.addEventListener("submit", onForSubmit)
   };
   init();
}