import  TodoItemStyles  from "./TodoItem.module.css"

type todoItemProps = {
    id: string,
    label: string,
    complete: boolean,
    onComplete(): void
    onRemove(): void
}

export function TodoItem({ id, label, complete, onComplete, onRemove }: todoItemProps) {
    

 return(
       
    <li key={id} className={TodoItemStyles.Item} data-complete={complete}>
      <span className={TodoItemStyles.Text}>
        {label}
      </span>

      <div className={TodoItemStyles.ButtonsGroup}>
        {!complete && (
          <button onClick={onComplete} className={TodoItemStyles.ButtonComplete}>
            Concluir
          </button>
        )}
        <button onClick={onRemove} className={TodoItemStyles.ButtonRemove}>
          Remover
        </button>
      </div>
    </li>
       
) 
}