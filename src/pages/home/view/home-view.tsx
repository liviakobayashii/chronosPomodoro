import Countdown from "@/components/countdown";
import CyclesView from "@/components/cycles/view/cycles-view";
import DefaultButton from "@/components/default-button";
import Footer from "@/components/footer/footer";
import TaskForm from "@/components/task-form/task-form";
import { useTaskContext } from "@/hooks/useTaskContext";
import type { Task } from "@/types/task-state";
import getNextCycle from "@/utils/get-next-cycle";
import GetNextCycleType from "@/utils/get-next-cycle-type";
import { useRef, type FormEvent } from "react";

export default function HomeView() {
    const taskNameInput = useRef<HTMLInputElement>(null)
    const { state, setState } = useTaskContext()

    const nextCycle = getNextCycle(state)
    const nextCycleType = GetNextCycleType(nextCycle)

    const handleCreateNewTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (taskNameInput.current === null) return

        const taskName = taskNameInput.current.value.trim()

        if (!taskName) {
            alert("Digite o nome da tarefa")
            return
        }

        const newTask: Task = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: 0,
            interruptDate: 0,
            duration: state.config[nextCycleType],
            type: nextCycleType
        }
        const secondsRemaining = newTask.duration * 60

        setState(prevState => {
            return {
                ...prevState,
                config: { ...prevState.config },
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining: "00:00",
                tasks: [...prevState.tasks, newTask]
            }
        })
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
