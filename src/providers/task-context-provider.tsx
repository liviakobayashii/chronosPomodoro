import { TaskContext } from "@/contexts/task-context"
import TaskReducer from "@/contexts/task-reducer"
import { initialTaskState } from "@/types/initial-state"
import { useEffect, useReducer, type ReactNode } from "react"

export function TaskContextProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(TaskReducer, initialTaskState)

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>

    )
}
