import { h, app } from 'hyperapp';
import { actions } from './actions'
import TodoItem from './todo-item'
import './index.scss';

const FilterInfo = { All: 0, Todo: 1, Done: 2 }

const state = {
  todos: [],
  filter: FilterInfo.All,
  input: "",
  placeholder: "Do that thing..."
};

const view = (state, actions) => (
  <div>
    <h1>Todo</h1>
    <p>
      {Object.keys(FilterInfo)
        .map(key => (
          <span>
            <a
              id={`filter-by-${key}`}
              disabled={FilterInfo[key] === state.filter}
              href={`#filter-by-${key}`}
              onclick={() =>
                actions.filter({
                  value: FilterInfo[key]
                })
              }
            >
              {key}
            </a>{" "}
          </span>
        ))}
    </p>

    <div class="flex">
      <input
        type="text"
        autofocus
        onkeyup={e => (e.keyCode === 13 ? actions.add() : "")}
        oninput={e => actions.input({ value: e.target.value })}
        value={state.input}
        placeholder={state.placeholder}
      />
      <button onclick={actions.add}>＋</button>
    </div>

    <p>
      <ul>
        {state.todos
          .filter(
            t =>
              state.filter === FilterInfo.Done
                ? t.done
                : state.filter === FilterInfo.Todo
                  ? !t.done
                  : state.filter === FilterInfo.All
          )
          .map(t => (
            <TodoItem
              id={t.id}
              value={t.value}
              done={t.done}
              toggle={actions.toggle}
            />
          ))}
      </ul>
    </p>
  </div>
);

window.hyperappInterop = app(state, actions, view, document.body);
