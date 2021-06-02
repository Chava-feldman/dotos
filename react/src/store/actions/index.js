import axios from "axios";

export const logOut = () => {
    return {
        type: "LOGOUT"
    }
}

export const deletTodo = (todo) => {
    axios.delete("http://localhost:3000/todos/" + todo._id).then(() => {

    });
    return {
        type: "DELETE_TODO",
        todo
    }
}

export const setDone = (todo) => {
    axios.put("http://localhost:3000/todos/" + todo._id, { _id: todo._id, userId: todo.userId, title: todo.title, body: todo.body, done: !todo.done });
    return {
        type: "SET_TODO",
        todo
    }
}

export const editTodo = (todo) => {
    axios.put("http://localhost:3000/todos/" + todo._id, { _id: todo._id, userId: todo.userId, title: todo.title, body: todo.body, done: todo.done });
    return {
        type: "EDIT_TODO",
        todo
    }
}

export const currentTodo = (todo) => {
    return {
        type: "CURRENT_TODO",
        todo
    }
}

export const searchTodos = (txt) => {
    return {
        type: "SEARCH_TODOS",
        txt
    }
}

export const currentUser = (user) => {
    return {
        type: "ADD_USER",
        user
    }
}
export const addUser = (user) => {    
    return (dispatch) => {
        axios.post("http://localhost:3000/users/",(user)).then((succ) => {
            console.log(succ);
            dispatch(currentUser(succ.data));
        }).catch((er) => {
            console.log(er.message)
        })
    }
}
export const getTodos = (todos) => {
    return {
        type: "GET_TODOS",
        todos
    }
}
export const addTodoToStore = (todo) => {
    return {
        type: "ADD_TODO",
        todo
    }
}
export const addTodo = (todo) => {
    return (dispatch) => {
        console.log(todo);
        axios.post("http://localhost:3000/todos/", (todo)).then((succ) => {
            console.log(succ);
            dispatch(addTodoToStore(succ.data));
        }).catch((er) => {
            console.log(er.message)
        })
    }

}

export const isValid = (txtName, txtMail) => {

    return (dispatch) => {
        axios.get("http://localhost:3000/users/" + txtName + "/" + txtMail).then((succ) => {
            console.log(succ);
            if (succ.data.length > 0) {
                dispatch(currentUser(succ.data[0]))
                axios.get("http://localhost:3000/todos/" + succ.data[0]._id).then((succ2) => {
                    console.log(succ2);
                    dispatch(getTodos(succ2.data))
                });
            }
        }).catch((er) => {
            console.log(er.message)
        })
    }
}
