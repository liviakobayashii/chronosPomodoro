import { TaskContext } from "@/contexts/task-context"
import { initialTaskState } from "@/types/initial-state"
import { useState, type ReactNode } from "react"

export function TaskContextProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState(initialTaskState)

    return (
        <TaskContext.Provider value={{ state, setState }}>
            {children}
        </TaskContext.Provider>

    )
}
