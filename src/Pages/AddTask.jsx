import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../Components/Button";
import { TextArea } from "../Components/TextArea";
import { TextInput } from "../Components/TextInput";
import { addTask } from "../State/slice/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

export const AddTask = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        taskId: uuid(),
        taskData: {
          title,
          description,
          completed: false
        }
      })
    );
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center p-2">
      <h1 className="text-lg mt-3">Add Task</h1>
      <form
        onSubmit={onSubmit}
        className="w-full p-2 gap-3 max-w-2xl mt-3 flex flex-col"
      >
        <TextInput
          placeholder={"Enter your title"}
          value={title}
          setter={setTitle}
        />
        <TextArea
          value={description}
          setter={setDescription}
          placeholder={"Enter your description"}
        />
        <Button title={"AddTask"} />
      </form>
    </div>
  );
};
