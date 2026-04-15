import ButtonClearStyles from "./ButtonClear.module.css";

type buttonProps = {
    clearTask(): void
}

export function ButtonClearTask({ clearTask }: buttonProps) {
    return(
        <button onClick={() => clearTask()} className={ButtonClearStyles.ButtonRemoveAll}>
            Limpar Tarefas
        </button>
    )
}