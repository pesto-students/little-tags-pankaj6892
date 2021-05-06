import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Constants/actions';

const ENTER_KEY_CHAR_CODE = 13;

function TodoApp({ cart = [], addToCart }) {
  const [item, setItem] = useState([{itemid: 1, name: 'mango'}]);

  const handleAddTodo = () => {
    addToCart(item);
  };
  const handleKeyPress = (e) => {
    if (e.charCode === ENTER_KEY_CHAR_CODE) {
      handleAddTodo();
    }
  };

  return (
    <div style={{ 'padding-top': '200px' }}>
      <input
        type='text'
        value={item}
        onChange={(e) => setItem({ item: e.target.value1 })}
        onKeyPress={handleKeyPress}
        placeholder='Enter your Task'
        className='todo-input'
      />
      <button type='button' onClick={handleAddTodo}>
        Add Todo{' '}
      </button>
      <ul className='todos-container'>
        <h1>{cart}</h1>

        {/* <TodoList
          todos={todos}
          handleRemoveTodo={removeTodo}
          handleDoTodo={() => {}}
          handleUndoTodo={() => {}}
        /> */}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    cart: state.cartState.cartItem,
  };
};

const mapDispatchToProps = { addToCart };
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);

// function connect(a, b) {
//   return function (comp) {
//     return comp(a, b);
//   };
// }
