const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      title: "Task 1",
      content: "Take out the garbage",
    },
    "task-2": {
      id: "task-2",
      title: "Task 2",
      content: "Watch my favorite show",
    },
    "task-3": {
      id: "task-3",
      title: "Task 3",
      content: "Charge my smartphone",
    },
    "task-4": {
      id: "task-4",
      title: "Task 4",
      content: "Cook dinner for the family",
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
