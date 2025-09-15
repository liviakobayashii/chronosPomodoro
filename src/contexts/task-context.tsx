
import { initialTaskState } from "@/types/initial-state"
import type { TaskState } from "@/types/task-state"
import { createContext, } from "react"


const initialContextValue = {
    state: initialTaskState,
    setState: () => { }

}

type TaskContextProps = {
    state: TaskState
    setState: React.Dispatch<React.SetStateAction<TaskState>>
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue)


