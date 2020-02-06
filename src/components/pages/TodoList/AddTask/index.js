import React from 'react'
import { connect } from 'react-redux';

import { addTaskRequest, setCurrentTask } from '../../../../actions/todo';

import '../../../../sass/components/_button.scss'

const styles = {
  inpuTop: {
    marginLeft: '20px',
    height: '2rem'
  }
}

let AddTask = ({ userId, onAddClick }) => {
  let input;

  const handleClick = () => {
    const text = input.value;
    console.log("???????????userID ?? : ", userId);
    if (text) {
      onAddClick(userId, input.value, (new Date()).toLocaleDateString());
      input.value = '';
    }
  }

  return (
    <>
      <input
        ref={node => {
          input = node;
        }}
        style={styles.inpuTop}
      />
      <button
        onClick={handleClick}
        className="link-button"
      >
        Add task
    </button>
    </>
  )
}

const mapStateToAddTaskProps = state => ({
  userId: state.loggedUser.id
});

const mapDispatchToAddTaskProps = dispatch => {
  return {
    onAddClick: (userId, text, createdDate) => {
      dispatch(setCurrentTask(userId, text, createdDate));
      dispatch(addTaskRequest());
    }
  }
}

AddTask = connect(
  mapStateToAddTaskProps,
  mapDispatchToAddTaskProps
)(AddTask);

export default AddTask;