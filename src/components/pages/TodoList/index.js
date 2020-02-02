import React from 'react'
import { connect } from 'react-redux';

import Task from './Task';
import { addTask, toggleTask } from '../../../actions/todo';

import '../../../sass/components/_button.scss'

const styles = {
  inpuTop: {
    marginLeft: '20px',
    height: '2rem'
  }
}

let AddTask = ({ onAddClick }) => {
  let input;

  return (
    <>
      <input
        ref={node => {
          input = node;
        }}
        style={styles.inpuTop}
      />
      <button
        onClick={() => {
          onAddClick(input.value)
          input.value = '';
        }}
        className="link-button"
      >
        Add task
    </button>
    </>
  )
}

const mapDispatchToAddTaskProps = dispatch => {
  return {
    onAddClick: (text) => {
      if (text) {
        dispatch(addTask(text))
      }
    }
  }
}

AddTask = connect(null, mapDispatchToAddTaskProps)(AddTask);


let TodoList = ({
  tasks,
  onTaskClick
}) => {
  return (
    <>
      <AddTask />
      <ol>
        {tasks ?
          tasks.map(task =>
            <Task
              key={task.id}
              {...task}
              onClick={onTaskClick(task.id)}
            />
          ) : null
        }
      </ol>
    </>
  )
}

const mapDispatchToTodoListProps = (dispatch) => {
  return {
    onTaskClick: (id) => () => {
      dispatch(toggleTask(id))
    },
  }
}

TodoList = connect(
  state => ({
    tasks: state.todo
  }),
  mapDispatchToTodoListProps
)(TodoList);



export default TodoList;