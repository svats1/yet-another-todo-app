// This app needs a few things:
// A project folder, that contains any number of tasks
//      Projects can be navigated on the left, added, deleted
// A task, with name, checkbox, and date
//      A task can be deleted with an X or have strike through on check
// A way to use local storage
// A way to manage user access, multiple users
//

// Approach
// Write a task object class
// Write a project object class
// Make task a child of project

//

import Project from "./project";
import Task from "./task";

const task1 = new Task();

task1.title = "Get shit done";
task1.date = "02-14-2023";
task1.done = false;

console.log(task1);

const project1 = new Project();

project1.name = "Project 1";

console.log(project1);
