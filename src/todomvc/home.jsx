import React from 'react';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import * as actions from './action-creater';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

// 将所有dispatch绑定到Home的props中
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

// 主框架
class Home extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {}
  }

  addTodo(value, todoInput) {
    if (value) {
      this.props.actions.addItem(value);
      todoInput.setText('');
    }
  }

  onCheck(id, checked) {
    const {reopenItem, finishItem} = this.props.actions;

    if (checked) {
      finishItem(id);
    } else {
      reopenItem(id);
    }

    this.setState({});
  }

  onRemove(id) {
    this.props.actions.removeItem(id);
  }

  render() {
    const {todos} = this.props;

    return (
      <div className="todo-container">
        <TodoInput placeholder="add todo list" onSubmit={this.addTodo.bind(this)} />

        <ul className="todo-list">
          {todos.map((item, i) =>
            <TodoItem key={i}
                      data={item}
                      onCheck={this.onCheck.bind(this)}
                      onRemove={this.onRemove.bind(this)}
            />
          )}
        </ul>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);