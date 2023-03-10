import axios from 'axios';
import React, {FC, useState, useEffect } from 'react'
import List from '../components/List';
import TodoItem from '../components/TodoItem';
import { ITodo} from '../types/types';

const TodoPage: FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])
  
    useEffect(()=> {
      fetchTodos()
    },[])
  
    async function fetchTodos() {
      try {
        const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
        setTodos(response.data)
      } catch (e) {
        alert(e)
      }
    }
    return (
        <List 
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
        />
    );
}

export default TodoPage;