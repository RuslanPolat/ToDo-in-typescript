type AddTodo = (newTodo:string) => void

type Todo = {
    text: string;
    complate: boolean
}

type ToggleComplete = (selectTodo: Todo) => void;