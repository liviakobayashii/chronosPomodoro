export default function TaskForm() {
  return (
    <form className="flex flex-col justify-center items-center gap-2">
      <label htmlFor="taskId">Task:</label>
      <input type="text" id="taskId" className="border-b-2 border-[#0ba170]" />
      <p className="mt-5">Nesse ciclo foque por 25min</p>
    </form>
  );
}
