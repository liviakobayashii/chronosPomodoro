import "./styles/global.css";
import { Heading } from "./components/heading/heading";
import TaskForm from "./components/task-form/task-form";
export function App() {
  return (
    <section className="flex flex-col justify-center items-center py-10 ">
      <div className="container flex flex-col justify-center items-center gap-20">
        <Heading />
        <h1 className="text-9xl font-bold text-center ">00:00</h1>
        <TaskForm />
      </div>
    </section>
  );
}
