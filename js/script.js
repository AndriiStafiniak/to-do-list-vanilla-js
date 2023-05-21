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


   const bindEvents = () => {
      const removeButton = document.querySelectorAll(".js-remove")

      removeButton.forEach((removeButton, index) => {
         removeButton.addEventListener("click", () => {
            removeTask(index);
         });
      });

      const toggleDoneButtons = document.querySelectorAll(".js-done");

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
         <li ${task.done ? "style = \"text-decoration: line-through\"" : ""}> 
         <button class = "js-done">Zrobione?</button> ${task.content} <button class="js-remove">Usuń</button>
         </li>
         `;
      };
      document.querySelector(".js-tasks").innerHTML = htmlString;
      bindEvents();
   };


   const onForSubmit = (event) => {
      event.preventDefault();
      const newTaskContent = document.querySelector(".js-newTask").value.trim();
      if (newTaskContent === "") {
         return;
      };
      addNewTask(newTaskContent);
   };


   const init = () => {
      render();
      const form = document.querySelector(".js-form");
      form.addEventListener("submit", onForSubmit)
   };
   init();
}