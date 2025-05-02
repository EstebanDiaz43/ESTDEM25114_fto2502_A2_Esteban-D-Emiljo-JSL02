document.addEventListener("DOMContentLoaded", function () {
  // Task 1
  const title1 = prompt("Enter task 1 title:");
  const status1 = prompt("Enter status");

  console.log("Title: " + title1);
  console.log("Status: " + status1);

  if (status1 !== "Todo" && status1 !== "Doing" && status1 !== "Done") {
    alert("Invalid status. Please enter 'Todo', 'Doing', or 'Done'.");
  }

  if (status1 !== "Done") {
    console.log("No task completed, let's get to work!");
  }

  // Task 2
  const title2 = prompt("Enter task 2 title:");
  const status2 = prompt("Enter status");

  console.log("Title: " + title2);
  console.log("Status: " + status2);

  if (status2 !== "Todo" && status2 !== "Doing" && status2 !== "Done") {
    alert("Invalid status. Please enter 'Todo', 'Doing', or 'Done'.");
  }

  if (status2 !== "Done") {
    console.log("No task completed, let's get to work!");
  }
});
