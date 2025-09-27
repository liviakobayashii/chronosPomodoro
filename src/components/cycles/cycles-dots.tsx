import { useTaskContext } from "@/hooks/useTaskContext"
import getNextCycle from "@/utils/get-next-cycle"
import GetNextCycleType from "@/utils/get-next-cycle-type"

export default function CyclesDots() {
    const { state } = useTaskContext()
    const cycleStep = Array.from({ length: state.currentCycle })

    const cycleDescriptionMap = {
        workTime: "foco",
        shortBreakTime: "descanso curto",
        longBreakTime: "descanso longo"
    }

    return (
        <div className="flex gap-2">
            {cycleStep.map((_, index) => {
                const nextCycle = getNextCycle({ currentCycle: index })
                const nextCycleType = GetNextCycleType(nextCycle)
                return (
                    <div key={index} aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`} title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`} className={nextCycleType}></div>
                )
            })}
        </div>
    )
}