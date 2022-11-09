
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
import TimerPage from "./pages/TimerPage";

function Layout() {
  return (
    <div className="border">
      <Link to="/count">count</Link>
      <Link to="/todoList">todoList</Link>
      <Link to="/timer">timer</Link>
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
            <Route path="timer" element={<TimerPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App
