import { TaskItem, Priority } from './TaskItem';

describe('TaskItem', () => {
  let task;

  beforeEach(() => {
    task = new TaskItem(1, "Test Task", "This is a test task", new Date("2023-01-01"), Priority.medium, "Testing");
  });

  test('should create a task with correct default values', () => {
    expect(task.id).toBe(1);
    expect(task.title).toBe("Test Task");
    expect(task.description).toBe("This is a test task");
    expect(task.dueDate).toEqual(new Date("2023-01-01"));
    expect(task.priority).toBe(Priority.medium);
    expect(task.isDone).toBe(false);
    expect(task.project).toBe("Testing");
  });

  test('should allow updating the title', () => {
    task.title = "Updated Title";
    expect(task.title).toBe("Updated Title");
  });

  test('should throw an error if title is empty', () => {
    expect(() => {
      task.title = "";
    }).toThrow("Title cannot be empty");
  });

  test('should throw an error if title is longer than 30 characters', () => {
    expect(() => {
      task.title = "This is a title that is longer than 30 characters";
    }).toThrow("Title cannot be longer than 30 characters");
  });

  test('should throw an error if title is shorter than 3 characters', () => {
    expect(() => {
      task.title = "Hi";
    }).toThrow("Title cannot be shorter than 3 characters");
  });

  test('should throw an error if title is not a string', () => {
    expect(() => {
      task.title = 123;
    }).toThrow("Title must be a string");
  });

  // Date tests
  test('should allow updating the due date', () => {
    task.dueDate = new Date("2023-12-02");
    expect(task.dueDate).toEqual(new Date("2023-12-02"));
  });

  test('should throw an error if due date is not a date', () => {
    expect(() => {
      task.dueDate = 123;
    }).toThrow("Due date must be a date");
  });


  // Priority tests
  test('should allow updating the priority', () => {
    task.priority = Priority.high;
    expect(task.priority).toBe(Priority.high);
  });

  test('should throw an error if priority is not a valid priority', () => {
    expect(() => {
      task.priority = "Invalid Priority";
    }).toThrow("Invalid priority");
  });

  // Project tests
  test('should allow updating the project', () => {
    task.project = "Updated Project";
    expect(task.project).toBe("Updated Project");
  });

  test('should throw an error if project is not a string', () => {
    expect(() => {
      task.project = 123;
    }).toThrow("Project must be a string");
  });

  // isDone tests
  test('should allow updating isDone', () => {
    task.markAsDone();
    expect(task.isDone).toBe(true);
  });

  test('should allow updating isDone', () => {
    task.markAsUndone();
    expect(task.isDone).toBe(false);
  });
});

