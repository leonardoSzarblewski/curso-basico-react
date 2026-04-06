import { useState } from "react"

import  InputAddStyles  from "./InputAdd.module.css";

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
        <div className={InputAddStyles.container}>

        <input 
            value={ isValue }
            onChange={(e) => setValue(e.target.value)}
            className={InputAddStyles.input}
        />
        <button 
            onClick={ handleAdd }
            className={InputAddStyles.buttonAdd}
        >
            Adicionar
            </button>
        </div>
    )
}