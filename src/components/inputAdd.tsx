import { useState } from "react"

type inputAddProps =  {
    onAdd( isValue: string ): void
}

export function InputAdd(props: inputAddProps) {
    const [isValue, setValue] = useState('');

    const handleAdd = () => {
        props.onAdd(isValue);
        setValue('');
    }

    return (
        <div>

        <input 
            value={ isValue }
            onChange={(e) => setValue(e.target.value)}
        />
        <button 
            onClick={ handleAdd }
        >
            Adicionar
            </button>
        </div>
    )
}