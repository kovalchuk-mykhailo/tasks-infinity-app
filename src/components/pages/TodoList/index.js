import React, { /* useEffect, */ Component } from 'react'
import { connect } from 'react-redux';

import Task from './Task';
import AddTask from './AddTask';
import { toggleTask, loadTasks } from '../../../actions/todo';

import '../../../sass/components/_button.scss'
import '../../../sass/components/_form.scss'


class TodoList extends Component {

  // useEffect(() => {
  //   console.log('mount TodoList');
  //   // onTasksLoad();
  // }, []);

  componentDidMount() {
    console.log("Todo mount");
    if (this.props.tasks.length === 0)
      this.props.onTasksLoad();
  }

  render() {
    const { tasks, onTaskClick } = this.props;
    return (
      <div className="todo-main">
        <AddTask />
        <ol>
          {tasks ?
            tasks.map(task =>
              <Task
                key={task.id}
                text={task.text}
                completed={task.completed}
                onClick={onTaskClick(task.id)}
              />
            ) : null
          }
        </ol>
      </div>
    )
  }
}

const mapStateToTodoListProps = (state) => ({
  tasks: state.todo
});

const mapDispatchToTodoListProps = (dispatch) => ({
  onTaskClick: (id) => () => {
    dispatch(toggleTask(id))
  },
  onTasksLoad: () => {
    dispatch(loadTasks())
  }
});

TodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);

export default TodoList;