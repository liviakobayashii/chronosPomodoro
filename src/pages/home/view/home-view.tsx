import Countdown from "@/components/countdown";
import CyclesView from "@/components/cycles/view/cycles-view";
import DefaultButton from "@/components/default-button";
import Footer from "@/components/footer/footer";
import TaskForm from "@/components/task-form/task-form";
import { useRef, type FormEvent } from "react";

export default function HomeView() {
    const taskNameInput = useRef<HTMLInputElement>(null)

    const handleCreateNewTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Deu certo!", taskNameInput.current?.value)
    }

    return (
        <form onSubmit={handleCreateNewTask} className="flex flex-col justify-center items-center gap-2">
            <Countdown />
            <TaskForm ref={taskNameInput} />
            <CyclesView />
            <DefaultButton fullWidth />
            <Footer />
        </form>
    )
}
