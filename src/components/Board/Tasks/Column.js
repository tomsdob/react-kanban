import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

export class Column extends Component {
  render() {
    return (
      <div className="max-w-full overflow-x-auto">
        <h3 className="mb-4 text-xl font-semibold text-gray-900 leading-tight">
          {this.props.column.title}
        </h3>
        <Droppable droppableId={this.props.column.id}>
          {(provided) => (
            <div
              className="space-x-5 lg:space-x-0 lg:space-y-5 flex lg:flex-col"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
              <button className="block p-5 text-sm font-medium text-gray-400 hover:text-gray-500 border-2 border-gray-400 hover:border-gray-500 border-dashed rounded-xl w-full focus:outline-none focus:shadow-outline transition-color duration-200 whitespace-no-wrap">
                Create a new task
              </button>
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

export default Column;
