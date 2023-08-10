import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Header } from "./Components/Header";
import { Providers } from "./Providers";
import { AddTask } from "./Pages/AddTask";
import { Task } from "./Pages/Task";
import { EditTask } from "./Pages/EditTask";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full relative bg-black">
      <Header />
      <div className="bg-gray-300 min-h-[50vh] m-3 w-full m-auto max-w-3xl">
        {children}
      </div>
    </div>
  );
};

const wrap = (Element) => {
  return <Layout>{Element}</Layout>;
};

export default function App() {
  return (
    <div className="App">
      <Providers>
        <Routes>
          <Route path="/" element={wrap(<Home />)} />
          <Route path="/add" element={wrap(<AddTask />)} />
          <Route path="/task/:taskId" element={wrap(<Task />)} />
          <Route path="/edit/:taskId" element={wrap(<EditTask />)} />
        </Routes>
      </Providers>
    </div>
  );
}
