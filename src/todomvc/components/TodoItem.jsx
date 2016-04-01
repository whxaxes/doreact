import React from 'react';
import { findDOMNode } from 'react-dom';
import TodoInput from './TodoInput';

class TodoItem extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      editing: false
    }
  }

  render() {
    const {data, onCheck, onRemove} = this.props;

    return (
      <li className={data.finished ? 'finished' : ''}>
        <input type="checkbox" onChange={e => onCheck(data.id, e.target.checked)}/>
        &nbsp;&nbsp;
        <span>{data.text}</span>
        &nbsp;&nbsp;
        <button title="delete todo" onClick={() => onRemove(data.id)}>×</button>
      </li>
    )
  }
}

export default TodoItem;