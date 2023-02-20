export default class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
  }
  addTask(task) {
    this.taskList.push(task);
  }
  removeTask() {}
}

// Project.prototype = Object.create({ name: "Samarth", age: "32" });
