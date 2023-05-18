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
   const render = () => {
      let htmlSring = "";
      for (const task of tasks) {
         htmlSring += `
         <li>
         ${task.content}
         </li>
         `;
      }
      document.querySelector(".js-tasks").innerHTML = htmlSring;
   };
   const init = () => {
      render();
   };
   init();
}