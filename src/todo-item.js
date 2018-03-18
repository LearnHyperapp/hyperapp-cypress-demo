import { h } from 'hyperapp';
const TodoItem = ({ id, value, done, toggle }) => (
  <li
    class={done && "done"}
    onclick={e =>
      toggle({
        value: done,
        id: id
      })
    }
  >
    {value}
  </li>
);

export default TodoItem
