{
   const tasks = [];


   const addNewTask = (newTaskContent) => {
      tasks.push({
         content: newTaskContent,
      });
      render();
   };


   const removeTask = (index) => {
      tasks.splice(index, 1);
      render();
   };


   const toggleTaskDone = (index) => {
      tasks[index].done = !tasks[index].done;
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


   const render = () => {
      let htmlString = "";
      for (const task of tasks) {
         htmlString += `
        <li
        class="ListTasks--item js-task">
        <button class="ListTasks__button ListTasks__button--toggleDone js-toggleDone">
        ${task.done ? "✔" : ""} </button>
        <span class="tasks__content ${task.done ? "listTask__content--done" : ""}"> ${task.content}</span>
        <button class="ListTasks__button ListTasks__button--remove js-remove"> 🪣 </button>
        </li>
         `;
      };
      document.querySelector(".js-tasks").innerHTML = htmlString;
      bindRemoveEvents();
      bindToggleDoneEvents();
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