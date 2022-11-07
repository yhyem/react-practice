import logo from './logo.svg';
import './App.css';
import EventPractice from './EventPractice'
import ValidationSample from './ValidationSample'
import { Component, useState, useRef, useCallback, useReducer } from 'react';
import produce from 'immer';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';
import Counter from './Hooks/Counter';
import Info from './Hooks/Info';
import Average from './Hooks/Averag';
import TodoTemplate from './TodoApp/TodoTemplate';
import TodoInsert from './TodoApp/TodoInsert';
import TodoList from './TodoApp/TodoList';

// function getRandomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component {
//   state = {
//     color: '#000000'
//   }

//   handleClick = () => {
//     this.setState({
//       color: getRandomColor()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤 색상</button>
//         <ErrorBoundary>
//           <LifeCycleSample color={this.state.color} />
//         </ErrorBoundary>
//       </div>
//     )
//   }
// }

// function createBulkTodos() {
//   const array = [];
//   for (let i = 0; i <= 2500; i++) {
//     array.push({
//       id: i,
//       text: `할일 :${i}`,
//       checked: false,
//     });
//   }
//   return array;
// }

// function todoReducer(todos, action) {
//   switch (action.type) {
//     case 'INSERT':
//       return todos.concat(action.todo);
//     case 'REMOVE':
//       return todos.filter(todo => todo.id !== action.id);
//     case 'TOGGLE':
//       return todos.map(todo =>
//         todo.id === action.id ? { ...todo, checked: !todo.checked }
//           : todo,
//       );
//     default:
//       return todos
//   }
// }


const App = () => {
  // const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // const nextId = useRef(2501);
  // const onInsert = useCallback(
  //   text => {
  //     const todo = {
  //       id: nextId.current,
  //       text,
  //       checked: false,
  //     };
  //     dispatch({ type: 'INSERT', todo })
  //     nextId.current += 1;
  //   },
  //   [todos],
  // );

  // const onRemove = useCallback(
  //   id => {
  //     dispatch({ type: 'REMOVE', id })
  //   },
  //   [todos],
  // );

  // const onToggle = useCallback(
  //   id => {
  //     dispatch({ type: 'TOGGLE', id })
  //   }, [],
  // )
  //const [visible, setVisible] = useState(false);

  /* 12장 immer 예제 실습 */
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setForm(
        produce(form, draft => {
          draft[name] = value;
        })
      );
    },
    [form]
  )

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };

      setData(
        produce(data, draft => {
          draft.array.push(info)
        })
      );

      setForm({
        name: '',
        username: ''
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  const onRemove = useCallback(
    id => {
      setData(
        produce(data, draft => {
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1)
        })
      );
    }, [data]
  )

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder='id'
          value={form.username}
          onChange={onChange}
        ></input>
        <input
          name="name"
          placeholder='name'
          value={form.name}
          onChange={onChange}
        ></input>
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>

    // <TodoTemplate>
    //   <TodoInsert onInsert={onInsert} />
    //   <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    // </TodoTemplate>
  )

}

export default App;
