export type Task = {
    id: string
    name: string
    duration: number
    startDate: number
    completeDate: number
    interruptDate: number
    type: keyof TaskState['config']
}
export type TaskState = {
    tasks: Task[]
    secondsRemaining: number
    formattedSecondsRemaining: string
    activeTask: Task | null
    currentCycle: number
    config: {
        workTime: number
        shortBreakTime: number
        longBreakTime: number
    }
}