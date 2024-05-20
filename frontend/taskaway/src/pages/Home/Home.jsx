import { MdAdd } from "react-icons/md";
import TaskCard from "../../components/Cards/TaskCard";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
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
        onClick={() => {}}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>
    </>
  );
};

export default Home;
