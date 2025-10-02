import Countdown from "@/components/countdown";
import CyclesView from "@/components/cycles/view/cycles-view";
import DefaultButton from "@/components/default-button";
import Footer from "@/components/footer/footer";
import TaskForm from "@/components/task-form/task-form";
import { useTaskContext } from "@/hooks/useTaskContext";
import type { Task } from "@/types/task-state";
import FormatSecondsToMinutes from "@/utils/format-seconds-to-minutes";
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
                formattedSecondsRemaining: FormatSecondsToMinutes(secondsRemaining),
                tasks: [...prevState.tasks, newTask]
            }
        })
    }

    const handleInterruptTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setState(prevState => {
            return {
                ...prevState,
                activeTask: null,
                secondsRemaining: 0,
                formattedSecondsRemaining: "00:00",
                tasks: prevState.tasks.map((task) => {
                    if (prevState.activeTask && prevState.activeTask.id === task.id) {
                        return { ...task, interruptDate: Date.now() }
                    }
                    return task
                })

            }
        })

    }

    return (
        <form onSubmit={handleCreateNewTask} className="flex flex-col justify-center items-center gap-2">
            <Countdown />
            <TaskForm ref={taskNameInput} />
            {state.currentCycle > 0 && <CyclesView />}
            {!state.activeTask ? (
                <DefaultButton icon="octicon:play-16" action="start" aria-label="Iniciar nova tarefa" title="Iniciar nova tarefa" type="submit" />
            ) :
                <DefaultButton
                    icon="majesticons:stop-circle-line"
                    action="stop"
                    aria-label="Interromper tarefa atual"
                    title="Interromper tarefa atual"
                    type="button"
                    onClick={handleInterruptTask}
                    className="bg-red-500 text-white"
                />
            }
            <Footer />
        </form>
    )
}
