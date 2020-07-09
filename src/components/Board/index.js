import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./Tasks/initialData";
import Column from "./Tasks/Column";

export class Board extends Component {
  state = initialData;

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // Checks if the there is no drop destination
    if (!destination) {
      return;
    }

    // Checks if the drop destination is the same
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Start and finish column definition
    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    // Moving the tasks in one column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    // Moving the tasks from one column to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    this.setState(newState);
    return;
  };

  render() {
    return (
      <div className="p-8 grid lg:grid-cols-5 gap-6 bg-light_gray flex-1 overflow-x-auto max-w-full">
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.columnOrder.map((columnId) => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(
              (taskId) => this.state.tasks[taskId]
            );

            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </DragDropContext>
      </div>
    );
  }
}

export default Board;
