import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";

export class Task extends Component {
  render() {
    const task = this.props.task;
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided) => (
          <div
            className="p-5 space-y-5 rounded-xl bg-white transition-shadow duration-200 flex-shrink-0 w-64 lg:w-auto overflow-x-auto"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <h5 className="block text-sm font-extrabold text-gray-900 leading-tight">
              {task.title}
            </h5>
            <p className="block text-sm font-normal text-gray-600 leading-tighter">
              {task.content}
            </p>
            {task.image && (
              <img
                src={task.image}
                className="block w-full h-48 object-cover rounded-xl"
              />
            )}
          </div>
        )}
      </Draggable>
    );
  }
}

export default Task;
