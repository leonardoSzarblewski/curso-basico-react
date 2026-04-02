import { useState } from "react"
import { InputAdd } from "./components/inputAdd";


export function App() {
  const [isList, setList] = useState([
    {id: '1', label: 'Fazer café', complete: false},
    {id: '2', label: 'Fazer almoço', complete: false},
    {id: '3', label: 'Fazer janta', complete: false}
  ])

  const handleAddInput = (value : string) => {
    setList([ 
          ...isList, 
          { id: (isList.length + 1).toString(), complete: false, label: value}
        ])
  }


    return (
     <main>

      <InputAdd onAdd={handleAddInput}/>

      <ol>
        {isList.map((listItem) => (
          <li key={listItem.id}>
            {listItem.label}

            { listItem.complete ? 'Concluido' : ''}

            <button onClick={() => setList([...isList.map(item => ({ 
              ...item, 
              complete: item.id === listItem.id ? true : item.complete}))])}> Concluir </button>

            <button onClick={() => setList([...isList.filter(item => item.id !== listItem.id)])}> Deletar </button>
          </li>
        ))}
      </ol>
     </main>
    )
  } 
