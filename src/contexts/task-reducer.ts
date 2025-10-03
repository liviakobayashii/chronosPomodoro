import type { TaskState } from "@/types/task-state";
import { TaskActionTypes, type TaskActionModel } from "./task-actions";
import getNextCycle from "@/utils/get-next-cycle";
import FormatSecondsToMinutes from "@/utils/format-seconds-to-minutes";

export default function TaskReducer(state: TaskState, action: TaskActionModel) {
    switch (action.type) {
        case TaskActionTypes.START_TASK: {
            const newTask = action.payload
            const nextCycle = getNextCycle(state)
            const secondsRemaining = newTask.duration * 60

            return {
                ...state,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining: FormatSecondsToMinutes(secondsRemaining),
                tasks: [...state.tasks, newTask]
            }
        }
        case TaskActionTypes.INTERRUPT_TASK: {
            return {
                ...state,
                activeTask: null,
                secondsRemaining: 0,
                formattedSecondsRemaining: "00:00",
                tasks: state.tasks.map((task) => {
                    if (state.activeTask && state.activeTask.id === task.id) {
                        return { ...task, interruptDate: Date.now() }
                    }
                    return task
                })

            }
        }
        case TaskActionTypes.RESET_STATE: {
            return state
        }
    }
    return state
}