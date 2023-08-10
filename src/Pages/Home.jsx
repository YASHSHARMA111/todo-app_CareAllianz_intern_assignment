import { useState } from "react";
import { useSelector } from "react-redux";
import { TaskCard } from "../Components/TaskCard";

const Home = () => {
  const { tasks } = useSelector((state) => state.tasks);
  const [completedTab, setCompletedTab] = useState(true);
  const tasksToShow = Object.values(tasks).filter(
    (task) => task.taskData.completed !== completedTab
  );
  return (
    <div className="p-5">
      <div>
        <div className="flex gap-4 pb-2">
          <button
            onClick={() => setCompletedTab(true)}
            className={`bg-transparent text-black ${
              completedTab ? "font-bold" : ""
            } focus:outline-none transition`}
          >
            Incompleted
          </button>
          <button
            onClick={() => setCompletedTab(false)}
            className={`bg-transparent text-black ${
              !completedTab ? "font-bold" : ""
            } focus:outline-none transition`}
          >
            Completed
          </button>
        </div>
        <hr />
      </div>
      <div>
        {tasksToShow.map((task, i) => (
          <div key={i} className="mt-3">
            <TaskCard task={task} />
          </div>
        ))}
        {tasksToShow.length === 0 && (
          <p className="mt-3 text-center text-[17px] italic">
            You don't have any {completedTab ? "incompleted" : "Completed"}{" "}
            tasks
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
