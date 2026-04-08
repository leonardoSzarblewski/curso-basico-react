import { Link } from "react-router";

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
      <Link to={ `/detalhe/${id}` } className={TodoItemStyles.Text}>
        {label}
      </Link>

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