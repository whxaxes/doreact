import React from 'react';
import { findDOMNode } from 'react-dom';

class TodoInput extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      text: this.props.text || ''
    }
  }

  /**
   * 监听input改动
   * @param e
   */
  onChange(e) {
    this.setText(e.target.value);
  }

  /**
   * 按键事件
   * @param {Event} e
   * @param {Function} callback
   */
  keyUp(e, callback) {
    if(e.keyCode == 13) {
      callback(e.target.value, this);
    }
  }

  /**
   * 设置内容
   * @param {String} value
   */
  setText(value) {
    if(this.state.text === value) return;

    this.setState({
      text: value
    });
  }

  render() {
    const {placeholder, onSubmit, onBlur} = this.props;

    return (
      <input className="todo-input"
             type="text"
             placeholder={placeholder || ''}
             value={this.state.text}
             onChange={this.onChange.bind(this)}
             onBlur={onBlur || (()=>null)}
             onKeyUp={e => this.keyUp(e, onSubmit)}
      />
    )
  }
}

TodoInput.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func,
  text: React.PropTypes.string,
  placeholder: React.PropTypes.string
};

export default TodoInput;