import { useTaskContext } from "@/hooks/useTaskContext"

export default function Countdown() {
    const { state } = useTaskContext()

    return (
        <h1 className="text-[12rem] font-bold text-center">
            {state.formattedSecondsRemaining}
        </h1>
    )
}
