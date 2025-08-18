import "./styles/global.css";
import { Heading } from "./components/heading/heading";
import TaskForm from "./components/task-form/task-form";
import DefaultButton from "./components/container/default-button";
import CyclesView from "./components/container/cycles/view/cycles-view";
export function App() {
  return (
<section className="flex flex-col justify-center items-center py-10 min-h-screen w-full">
  <div className="flex flex-col justify-center items-center gap-10 px-10">
    <Heading />
    <h1 className="text-9xl font-bold text-center ">00:00</h1>
    <TaskForm />
    <CyclesView />
    <DefaultButton fullWidth />
  </div>
</section>
  );
}
