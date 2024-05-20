import { MdAdd } from "react-icons/md";
import TaskCard from "../../components/Cards/TaskCard";
import Navbar from "../../components/Navbar/Navbar";
import AddEditTasks from "./AddEditTasks";
import Modal from "react-modal";
import { useState } from "react";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
  return (
    <>
      <Navbar />
      <div className=" container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <TaskCard
            title="Go to the Jim"
            date="7th aprill"
            onEdit={() => {}}
            onDelete={() => {}}
          />
          <TaskCard
            title="Go to the Jim"
            date="7th aprill"
            onEdit={() => {}}
            onDelete={() => {}}
          />
          <TaskCard
            title="Go to the Jim"
            date="7th aprill"
            onEdit={() => {}}
            onDelete={() => {}}
          />
          <TaskCard
            title="Go to the Jim"
            date="7th aprill"
            onEdit={() => {}}
            onDelete={() => {}}
          />
          <TaskCard
            title="Go to the Jim"
            date="7th aprill"
            onEdit={() => {}}
            onDelete={() => {}}
          />
        </div>
      </div>
      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute  right-10 bottom-10"
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>
      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5"
      >
        <AddEditTasks />
      </Modal>
    </>
  );
};

export default Home;
