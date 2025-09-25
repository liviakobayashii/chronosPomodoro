import type { Task } from "@/types/task-state";

export default function GetNextCycleType(currentCycle: number): Task['type'] {
    if (currentCycle % 8 === 0) return "longBreakTime"
    if (currentCycle % 2 === 0) return "shortBreakTime"
    return "workTime"
}