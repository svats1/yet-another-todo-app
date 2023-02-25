import { Datepicker } from "vanillajs-datepicker";
import "vanillajs-datepicker/css/datepicker.css";

const taskContainer = document.querySelector(".task-container");

export default class Task {
  constructor(name) {
    this.name = name;
    this.done = false;
    this.alive = true;
    this.div;
  }
  render() {
    // Create DOM nodes
    const taskDiv = document.createElement("div");
    const inputTask = document.createElement("input");
    const dateTask = document.createElement("input");
    const priorityTask = document.createElement("div");
    const delTask = document.createElement("button");
    const checkTask = document.createElement("input");

    // Qualify DOM nodes
    inputTask.className = "input-task";
    checkTask.className = "check-task";
    dateTask.className = "date-task";
    taskDiv.className = "task";
    checkTask.type = "checkbox";
    inputTask.value = this.name;
    dateTask.textContent = "Date";
    delTask.textContent = "X";

    dateTask.value = "Set Due Date";

    // Date

    dateTask.addEventListener("click", () => {
      // dateTask.type = "input";
      const datePicker = new Datepicker(dateTask);
      console.log(datePicker);
    });

    // State persistence if previously marked Done
    if (this.done === true) {
      inputTask.disabled = true;
      checkTask.checked = true;
      dateTask.disabled = true;
    }

    // Checkbox event handler
    checkTask.addEventListener("click", () => {
      if (this.done === false) {
        inputTask.disabled = true;
        dateTask.disabled = true;
        this.done = true;
      } else {
        inputTask.disabled = false;
        dateTask.disabled = false;
        this.done = false;
      }
    });

    // Delete task event handler
    delTask.addEventListener("click", () => {
      taskContainer.removeChild(taskDiv);
      this.alive = false;
    });

    // Compose task DOM element
    taskDiv.appendChild(inputTask);
    taskDiv.appendChild(dateTask);
    taskDiv.appendChild(delTask);
    taskDiv.appendChild(checkTask);

    // Add to previous tasks in project
    taskContainer.appendChild(taskDiv);

    // Pass created div as this task object's property
    this.div = taskDiv;
  }
}
