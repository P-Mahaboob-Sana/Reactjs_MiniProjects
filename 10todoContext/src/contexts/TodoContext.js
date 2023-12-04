import {useContext, createContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
        id: 1,
        todo: "Todo msg",
        completed: false,
    }
      ],
    //   The TodoProvider component is a wrapper component that provides the TodoContext to its child components.
    // It takes the value of the TodoContext as a prop and makes it available to all the child components that are wrapped within it.
      addTodo: (todo) => {},
      updateTodo: (id,todo)  =>{},
      deleteTodo: (id) =>{},
      toggleComplete:(id)=>{}
})
// The useTodo hook is a custom hook that can be used to access the value of the TodoContext within functional components. It uses the useContext hook from React to retrieve the value of the TodoContext.
export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider