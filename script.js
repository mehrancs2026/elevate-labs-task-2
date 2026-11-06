/* =====================================
   1. SELECT HTML ELEMENTS
   Get elements from the HTML using their IDs
===================================== */

// Select the task input field
const taskInput = document.getElementById("taskInput");

// Select the Add Task button
const addButton = document.getElementById("addButton");

// Select the task list container
const taskList = document.getElementById("taskList");


/* =====================================
   2. ADD TASK FUNCTION
   Creates and displays a new task
===================================== */

function addTask() {

    // Get the text entered by the user and remove extra spaces
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return; // Stop the function if input is empty
    }

    // Create a new list item for the task
    const li = document.createElement("li");

    // Create a span to display the task text
    const taskSpan = document.createElement("span");

    // Add the user's task text inside the span
    taskSpan.textContent = taskText;

    // Create a button to delete the task
    const deleteButton = document.createElement("button");

    // Set the delete button text
    deleteButton.textContent = "Delete";

    // Add a CSS class to the delete button
    deleteButton.classList.add("delete-btn");


    /* =====================================
       3. MARK TASK AS COMPLETED
       Clicking the task text toggles completion
    ===================================== */

    taskSpan.addEventListener("click", function () {

        // Toggle the completed class on the task
        taskSpan.classList.toggle("completed");

    });


    /* =====================================
       4. DELETE TASK FUNCTION
       Removes the selected task
    ===================================== */

    deleteButton.addEventListener("click", function () {

        // Remove the task from the webpage
        li.remove();

    });


    /* =====================================
       5. ADD ELEMENTS TO THE PAGE
    ===================================== */

    // Add the task text and delete button to the list item
    li.appendChild(taskSpan);
    li.appendChild(deleteButton);

    // Add the complete task item to the task list
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = "";

    // Put the cursor back in the input field
    taskInput.focus();

}


/* =====================================
   6. ADD BUTTON EVENT LISTENER
   Runs addTask() when the button is clicked
===================================== */

addButton.addEventListener("click", addTask);


/* =====================================
   7. ENTER KEY SUPPORT
   Allows users to add tasks by pressing Enter
===================================== */

taskInput.addEventListener("keydown", function (event) {

    // Check whether the pressed key is Enter
    if (event.key === "Enter") {

        // Call the addTask function
        addTask();

    }

});
