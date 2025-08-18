export default function TaskForm() {
  return (
    <form className="flex flex-col justify-center items-center gap-2">
      <label htmlFor="taskId">Task:</label>
      <input type="text" id="taskId" className="border-b-1 border-[#0ba170]" />
      <p className="mt-2">Nesse ciclo foque por 25min</p>
    </form>
  );
}
