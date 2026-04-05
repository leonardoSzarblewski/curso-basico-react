import { useState, useEffect } from "react"
import { InputAdd } from "./components/inputAdd";
import { TodoItem } from "./components/todoItem";
import { List } from "./components/list";

import { type Todo, TodoApi } from "./shared/services/api/todoApi";


export function App() {
  const [isList, setList] = useState<Todo[]>([])
  
  useEffect(() => {
    TodoApi.getAll().then(data => setList(data))
  }, [])

  const handleAddInput = (value : string) => {

      TodoApi.create({ label: value, complete: false}).then(data => setList([...isList, data]))
  }

  const handleRemoveButton = (id : string) => {

    TodoApi.deleteById(id).then(() => setList([...isList.filter(item => item.id !== id)]))

  }

  const handleCompleteButton = (id : string) => {

    TodoApi.updateById(id, { complete: true })
      .then(() =>  setList([ ...isList.map(item => ({ ...item, complete: item.id === id ? true : item.complete }))]))
   
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
