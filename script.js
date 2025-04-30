document.addEventListener("DOMContentLoaded", function () {
  const title = prompt("Enter task 1 title:");
  const status = prompt("Enter status");

  console.log("Title: " + title);
  console.log("Status: " + status);

  if (status !== "Todo" && status !== "Doing" && status !== "Done") {
    alert("Invalid status. Please enter 'Todo', 'Doing', or 'Done'.");
  }
});
