
import { initialTaskState } from "@/types/initial-state"
import type { TaskState } from "@/types/task-state"
import { createContext, } from "react"
import type { TaskActionModel } from "./task-actions"


const initialContextValue = {
    state: initialTaskState,
    dispatch: () => { }

}

type TaskContextProps = {
    state: TaskState
    dispatch: React.Dispatch<TaskActionModel>
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue)


