import React from 'react'

const Todolist = (props) => {
  return (
    <React.Fragment>
      <div className="todo_style">
        <i className="fa fa-times" aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id)
          }} />
        <li>{props.text}</li>
      </div>
    </React.Fragment>
  )
}

export default Todolist