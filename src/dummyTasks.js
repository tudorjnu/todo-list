import { TaskItem, Priority } from "./components/TaskItem/TaskItem.js";

let tasks = [];

// Long and short titles
const titles = [
  "Short Title",
  "Medium Length Title for Task",
  "A Very Long and Detailed Title Representing a Task with Many Characteristics and Features",
];

// Different priorities
const priorities = [Priority.low, Priority.medium, Priority.high];

// Various projects
const projects = ["Learning", "Work", "Personal"];

// Helper function to create a random date
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}

// Create sample tasks
for (let i = 0; i < titles.length; i++) {
  for (let priority of priorities) {
    for (let project of projects) {
      const dueDate = randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31));
      const description = `Description for ${titles[i]} with priority ${priority} in project ${project}`;

      tasks.push(
        new TaskItem(
          i * priorities.length * projects.length +
            priorities.indexOf(priority) * projects.length +
            projects.indexOf(project),
          titles[i],
          description,
          dueDate,
          priority,
          project,
        ),
      );
    }
  }
}

export default tasks;
