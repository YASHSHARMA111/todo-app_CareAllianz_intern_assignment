import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editTask, deleteTask } from "../State/slice/taskSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Task = () => {
  const { taskId } = useParams();
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const task = tasks[taskId];

  const [deletePopup, setDeletePopup] = useState(false);

  const setCompleted = () => {
    dispatch(
      editTask({
        taskId,
        task: {
          taskId,
          taskData: {
            title: task?.taskData.title,
            description: task?.taskData.description,
            completed: !task.taskData.completed
          }
        }
      })
    );
  };

  const deleteThisTask = () => {
    dispatch(deleteTask(taskId));
    navigate("/");
  };

  return (
    <div className="p-4">
      <div className="mt-5">
        <h1 className="text-[25px] font-medium mb-3 capitalize">
          {task?.taskData.title}
        </h1>
        <hr className="border-slate-700 mb-3" />
        <p className="text-[18px] mb-3">{task?.taskData.description}</p>
        <hr className="border-slate-700 mb-3" />
      </div>

      <div>
        <button
          onClick={setCompleted}
          className={"p-2 bg-green-400 font-medium mr-2 mb-2 rounded"}
        >
          Set as {task?.taskData.completed ? "Incompleted" : "Completed"}
        </button>
        <button
          onClick={() => {
            navigate("/edit/" + taskId);
          }}
          className={"p-2 bg-yellow-400 font-medium mr-2 mb-2 rounded"}
        >
          Edit task
        </button>
        <button
          className="p-2 bg-red-500 font-medium mb-2 rounded"
          onClick={() => setDeletePopup(true)}
        >
          Delete task
        </button>
      </div>
      {deletePopup && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            position: "absolute",
            backdropFilter: "blur(2px)",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
          className="flex
          items-center justify-center"
        >
          <div
            className="w-full mx-2
          max-w-2xl rounded p-3
          bg-white"
          >
            <h1 className="text-md mb-2">
              Are you sure you want to delete this task?
            </h1>
            <hr />
            <div className="mt-2 flex gap-2">
              <button
                className="px-2 py-1 bg-transparent border border-slate-400"
                onClick={() => setDeletePopup(false)}
              >
                Cancel
              </button>
              <button
                className="px-2 py-1 bg-red-300 rounded"
                onClick={() => deleteThisTask()}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
