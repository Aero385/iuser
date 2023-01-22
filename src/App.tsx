import {BrowserRouter, Route, Routes} from 'react-router-dom';
import UserPage from './components/UserPage';
import TodoPage from './components/TodoPage';
import { Link } from 'react-router-dom';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

const App = () => {
  
  return (
    <BrowserRouter>
      <div>
          <div>
            <Link to={'/users'}>Users</Link>
            <Link to={'/todos'}>Todo list</Link>
          </div>
          <Routes>
            <Route path="/users" element={<UserPage/>}/>
            <Route path="/todos" element={<TodoPage/>}/>
            <Route path="/users/:id" element={<UserItemPage/>}/>
            <Route path="/todos/:id" element={<TodoItemPage/>}/>
          </Routes>
      </div>
    </BrowserRouter>
   
  );
}

export default App;