import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />}></Route>
        <Route path="/tasks" element={<TasksPage />}></Route>
        <Route path="/tasks-create" element={<TaskFormPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;