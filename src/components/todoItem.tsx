type todoItemProps = {
    id: string,
    label: string,
    complete: boolean,
    onComplete(): void
    onRemove(): void
}

export function TodoItem({ id, label, complete, onComplete, onRemove }: todoItemProps) {
    

 return(
       
    <li key={ id }>
        
        { label }
            
        { complete ? 'Concluido' : ''}

        <button onClick={ onComplete }> Concluir </button>

        <button onClick={ onRemove }> Deletar </button>
    </li>
       
) 
}