import { useState } from "react"

type inputAddProps =  {
    onAdd( isValue: string ): void
}

export function InputAdd(props: inputAddProps) {
    const [isValue, setValue] = useState('')

    return (
        <div>

        <input 
            value={ isValue }
            onChange={(e) => setValue(e.target.value)}
        />
        <button 
            onClick={() => { props.onAdd(isValue), setValue('') }}
        >
            Adicionar
            </button>
        </div>
    )
}