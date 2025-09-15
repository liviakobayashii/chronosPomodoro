import { TaskContext } from "@/contexts/task-context";
import { useContext } from "react";

export function useTaskContext() {
    return (useContext(TaskContext))
}