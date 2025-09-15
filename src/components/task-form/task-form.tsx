import { forwardRef } from "react"

const TaskForm = forwardRef<HTMLInputElement, object>((_, ref) => {
  return (
    <>
      <label htmlFor="taskId">Task:</label>
      <input
        type="text"
        id="taskId"
        className="border-b-2 border-primary"
        ref={ref}
      />
      <p className="mt-5">Nesse ciclo foque por 25min</p>
    </>
  )
})

TaskForm.displayName = "TaskForm"

export default TaskForm
