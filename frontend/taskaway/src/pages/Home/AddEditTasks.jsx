import { useState } from "react";
import { MdClose } from "react-icons/md";

const AddEditTasks = ({ noteData, type, onClose }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  // Add Task
  const addNewTask = async () => {};

  //Edit Task

  const editTask = async () => {};

  const handleAddTask = () => {
    if (!title) {
      setError("Please enter a title");
      return;
    }
    setError("");
    if (type === "edit") {
      editTask();
    } else {
      addNewTask();
    }
  };
  return (
    <div className="relative">
      <button
        className=" w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50 "
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>
      <div className="flex flex-col gap-2">
        <label className="input-label">Title</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Add a task"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      {error && <p className="text-red-500 text-xs pt-4">{error}</p>}
      <button
        className="btn-primary font-medium mt-10 p-3"
        onClick={handleAddTask}
      >
        Add
      </button>
    </div>
  );
};

export default AddEditTasks;
