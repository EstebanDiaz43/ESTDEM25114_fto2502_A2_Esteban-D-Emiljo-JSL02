document.addEventListener("DOMContentLoaded", function () {
  let anyTaskDone = false; // Flag to track if any task is marked as "done"
  // Task 1
  const title1 = prompt("Enter task 1 title:");
  let status1 = prompt("Enter status");
  status1 = status1.toLowerCase();

  console.log("Title: " + title1);
  console.log("Status: " + status1);

  if (status1 !== "todo" && status1 !== "doing" && status1 !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  }

  if (status1 === "done") {
    anyTaskDone = true; // Mark that at least one task is done
  }

  // Task 2
  const title2 = prompt("Enter task 2 title:");
  let status2 = prompt("Enter status");
  status2 = status2.toLowerCase();

  console.log("Title: " + title2);
  console.log("Status: " + status2);

  if (status2 !== "todo" && status2 !== "doing" && status2 !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  }

  if (status2 === "done") {
    anyTaskDone = true; // Mark that at least one task is done
  }

  if (!anyTaskDone) {
    console.log("No tasks completed, let's get to work!");
  }
});
