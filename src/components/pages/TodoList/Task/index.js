import React from 'react'

const Task = ({
  text,
  completed,
  onClick
}) => {
  return (
    <div onClick={onClick}
      style={{
        textDecoration: completed ?
          'line-through' :
          'none',
        marginLeft: '40px',
        listStyleType: 'upper-roman'
      }}
    >
      {text}
    </div>
  )
}

export default Task;
