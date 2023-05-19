{
   const tasks = [
      {
         content: "nagrac lekcje",
         done: false,
      },
      {
         content: "zjesc pierogi",
         done: true,
      },
   ];


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

   const render = () => {
      let htmlString = "";
      for (const task of tasks) {
         htmlString += `
         <li ${task.done ? "style = \"text-decoration: line-through\"" : ""}> <button class="js-remove">Usuń</button>
         ${task.content}
         </li>
         `;
      }
      document.querySelector(".js-tasks").innerHTML = htmlString;
      const removeButton = document.querySelectorAll(".js-remove")

      removeButton.forEach((removeButton, index) => {
         removeButton.addEventListener("click", () => {
            removeTask(index);
         });
      });
   };


   const onForSubmit = (event) => {
      event.preventDefault();
      const newTaskContent = document.querySelector(".js-newTask").value.trim();
      if (newTaskContent === "") {
         return;
      }
      addNewTask(newTaskContent);
   }




   const init = () => {
      render();
      const form = document.querySelector(".js-form");
      form.addEventListener("submit", onForSubmit)

   };
   init();
}