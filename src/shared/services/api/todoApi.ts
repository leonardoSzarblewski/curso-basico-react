import axios from "axios"

const axiosInstance = axios.create()

export type Todo = {
    id: string,
    label: string,
    complete: boolean
}

type TodoWithoutId = {
    label: string,
    complete: boolean
}


export const TodoApi = {
    async getAll() {
        const response = await axiosInstance.get('/api/todos')

        
        return response.data.todos as Todo[]
        
    },

    async create(data: TodoWithoutId) {
        const response = await axiosInstance.post('/api/todos', data)
    
        return response.data.todos as Todo
        
    },

    async updateById(id: string, data: Partial<TodoWithoutId>) {
        await axiosInstance.put(`/api/todos/${id}`, data)
    
        return    
    },

     async deleteById(id: string) {
        await axiosInstance.delete(`/api/todos/${id}`)
    
        return    
    },

    async deleteAll() {
        await axiosInstance.delete('/api/todos')
    
        return    
    },
}