import { TaskContext } from "@/contexts/task-context"
import { initialTaskState } from "@/types/initial-state"
import { useEffect, useState, type ReactNode } from "react"

export function TaskContextProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState(initialTaskState)

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <TaskContext.Provider value={{ state, setState }}>
            {children}
        </TaskContext.Provider>

    )
}
