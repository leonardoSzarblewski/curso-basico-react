import { useEffect, useState } from "react"
import { TodoApi, type Todo } from "../shared/services/api/todoApi"
import { InputAdd } from "../components/InputAdd"
import { List } from "../components/List"
import { TodoItem } from "../components/TodoItem"
import { PageLayout } from "../shared/layout/pageLayout/PageLayout"
import { ButtonClearTask } from "../components/ButtonClearTask"

 


export function Home() {
    const [isList, setList] = useState<Todo[]>([])
      
    useEffect(() => {
        TodoApi.getAll().then(data => setList(data))
    }, [])
    
   const handleAddInput = (value : string) => {
      if (!value.trim()) return;
    
      TodoApi.create({ label: value, complete: false}).then(data => setList([...isList, data]))

    }
    
    const handleRemoveButton = (id : string) => {
    
        TodoApi.deleteById(id).then(() => setList([...isList.filter(item => item.id !== id)]))
    
    }
    
    const handleCompleteButton = (id : string) => {
    
        TodoApi.updateById(id, { complete: true })
          .then(() =>  setList([ ...isList.map(item => ({ ...item, complete: item.id === id ? true : item.complete }))]))
       
    }

    const handleClearButtonTasks = () => {
      TodoApi.deleteAll().then(() => setList([]))
    }
    
    
    return (
        <PageLayout title='Lista de Tarefas'>
    
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

          {isList.length > 1 && <ButtonClearTask clearTask={handleClearButtonTasks}/>}

         </PageLayout>
    )
}