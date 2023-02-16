import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, removeTodo } from '../store/todoSlice';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const [newText,setNewText] = useState(`${text}`);

   const handleChange = (e) => {
    setNewText(e.target.value);
  }

  return (
    <li className='mt-3'>
      <div className='d-flex justify-content-center align-items-baseline'>
        <input id='checkbox'
          type='checkbox'
          checked={completed}
          onChange={() => dispatch(toggleComplete({ id }))}
        />
        <input value={newText} onChange={handleChange} className='text-center ms-1 border-0'/>
        <span id='close' className='btn ps-1 pe-1 pt-0 pb-0 ms-2' onClick={() => dispatch(removeTodo({ id }))}>&times;</span>
      </div>
    </li>
  );
};

export default TodoItem;
