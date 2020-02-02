import React from 'react'

const Task = ({
  text,
  completed,
  onClick
}) => {
  return (
    <li onClick={onClick}
      style={{
        textDecoration: completed ?
          'line-through' :
          'none',
        marginLeft: '40px',
        listStyleType: 'upper-roman'
      }}
    >
      {text}
    </li>
  )
}

export default Task;
