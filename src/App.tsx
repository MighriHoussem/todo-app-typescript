import { useCallback, useState, useMemo, useEffect } from 'react';
import './App.css';
import Card from '@mui/material/Card';
import AddTodo from './components/AddTodo';
import { Todo } from './components/Todo';

import TodoContext from './TodoContext';
import TodoList from './components/TodoList';

function App() {

  const [todoList, setTodoList] = useState<Array<Todo>>([]);


  const handleAdd = useCallback((todo: string) => {
    let tempTodo: Partial<Todo> = {
      id: Math.floor(Math.random() * 1000),
      label: todo
    };
    setTodoList([...todoList, tempTodo as Todo]);
  }, [todoList]);

  const countTodos = useMemo(() => {
    return todoList.length;
  }, [todoList])

  useEffect(() => {

  }, []);


  return (
    <div className="App">
      <TodoContext.Provider value={todoList}>
        <Card variant="outlined" style={{ marginTop: '2%', paddingTop: '2%', paddingBottom: '2%' }}>
          <AddTodo
            handleAddTodo={handleAdd}
          />
          <p style={{ marginTop: '1%', marginBottom: '1%' }}>
            {countTodos ? `${countTodos} Todos exists on List` : 'No Todos on List'}
          </p>
          <TodoList
          />
        </Card>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
