
// mobx lession1
// mobx lession2 实现todoList
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import CountPage from "./pages/CountPage";
import './App.css'
import TodoListPage from "./pages/TodoListPage";

function Layout() {
  return (
    <div className="border">
      <Link to="/count">count</Link>
      <Link to="/todoList">todoList</Link>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="count" element={<CountPage />} />
            <Route path="todoList" element={<TodoListPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App
