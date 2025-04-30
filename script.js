document.addEventListener("DOMContentLoaded", function () {
  const title = prompt("Enter task 1 title:");
  const status = prompt("Enter status");

  console.log("Title: " + title);
  console.log("Status: " + status);

  if (status !== "Todo" && status !== "Doing" && status !== "Done") {
    alert("Invalid status. Please enter 'Todo', 'Doing', or 'Done'.");
  }

  if (title === 0 && status === 0) {
    console.log("No tasks completed, let's get to work!");
  }
});
