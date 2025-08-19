import CyclesView from "@/components/cycles/view/cycles-view";
import DefaultButton from "@/components/default-button";
import TaskForm from "@/components/task-form/task-form";

export default function HomeView() {
    return(
    <>
        <h1 className="text-[12rem] font-bold text-center ">00:00</h1>
        <TaskForm />
        <CyclesView />
        <DefaultButton fullWidth />

    </>
    )
}