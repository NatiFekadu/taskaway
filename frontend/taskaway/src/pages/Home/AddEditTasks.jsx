import { useState } from "react";

const AddEditTasks = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="input-label">Titile</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Add a task"
        />
      </div>
      <button className="btn-primary font-medium mt-10 p-3">Add</button>
    </div>
  );
};

export default AddEditTasks;
