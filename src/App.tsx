import { useState } from "react"
import { InputAdd } from "./components/inputAdd";
import { TodoItem } from "./components/todoItem";
import { List } from "./components/list";

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

  const handleRemoveButton = (id : string) => {
    setList([
        ...isList.filter(item => item.id !== id
    )])
  }

  const handleCompleteButton = (id : string) => {
    setList([
       ...isList.map(item => ({ 
       ...item, 
       complete: item.id === id ? true : item.complete
    }))])
  }


    return (
     <main>

      <InputAdd onAdd={handleAddInput}/>

      <List>
        {isList.map((listItem) => (

          <TodoItem
            key={ listItem.id }

            id={ listItem.id }
            label={ listItem.label }   
            complete={ listItem.complete }  
            
            onComplete={() => handleCompleteButton( listItem.id )}
            onRemove={() => handleRemoveButton( listItem.id )}
          />      
        ))}
      </List>

     </main>
    )
  } 
