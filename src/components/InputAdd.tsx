import { useRef, useState } from "react"

import  InputAddStyles  from "./InputAdd.module.css";
import LoginStyles from "../pages/public/Login.module.css";

type inputAddProps =  {
    onAdd( isValue: string ): void
}

export function InputAdd(props: inputAddProps) {
    const InputRef = useRef<HTMLInputElement>(null)

    const [isValue, setValue] = useState('');
    const [error, setError] = useState(false);

    const handleAdd = () => {
        if (!isValue.trim()) {
            setError(true);
            return;
        }
        setError(false);
        props.onAdd(isValue);
        setValue('');
        InputRef.current?.focus()
    }

    return (
        <div className={InputAddStyles.container}>
            <div className={InputAddStyles.inputRow}>
                <input
                    value={ isValue }
                    ref={ InputRef }
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
            {error && <span className={LoginStyles.ErrorMessage}>Este campo é obrigatório, digite uma tarefa</span>}
        </div>
    )
}