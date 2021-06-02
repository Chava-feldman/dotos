import axios from "axios";

const initialState = {
    user: {
        _id: "null",
        name: "null",
        city: "null",
        street: "null",
        mail: "null",
        tell: "null"
    },
    todosList: [],
    currentTodo:"null",
    todosForSearch:[]
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER": {
            return {
                ...state,
                user: action.user
            }
        }
        case "SEARCH_TODOS": {
            let arr=[];
            state.todosList.forEach(ele=>{
                console.log(ele.title)
                console.log(action.txt)

                if(ele.title.includes(action.txt))
                {
                    arr.push(ele);
                }
            })
            return {
                ...state,
                todosForSearch: arr
            }
        }
        case "EDIT_TODO": {
            let arr=[];  
            state.todosList.forEach(element => {
                if(element._id==action.todo._id)
                arr.push(action.todo);
                else arr.push(element);
            });       
            let brr=[];  
            state.todosForSearch.forEach(element => {
                if(element._id==action.todo._id)
                brr.push(action.todo);
                else brr.push(element);
            });       

            console.log(state.todosList);
            return {
                ...state,
                todosList: arr,
                todosForSearch:brr,
                currentTodo:action.todo
            }
        }
        case "CURRENT_TODO": {
            return {
                ...state,
                currentTodo: action.todo
            }
        }
        case "DELETE_TODO": {
            let arr=state.todosList.filter((item)=>{                
                return item._id!=action.todo._id;
            })
            let brr=state.todosForSearch.filter((item)=>{                
                return item._id!=action.todo._id;
            })
            return {
                ...state,
                todosList: arr,
                todosForSearch:brr
            }
        }
        case "LOGOUT": {
            return {
                ...state,
                user: {
                    _id: "null",
                    name: "null",
                    city: "null",
                    street: "null",
                    mail: "null",
                    tell: "null"
                },
                todosList: [],
                currentTodo:"null",
                todosForSearch:[]
            }
        }
        case "GET_TODOS": {
            return {
                ...state,
                todosList: action.todos,
                todosForSearch:action.todos
            }
        }
        case "SET_TODO": {
            let arr=[];  
            state.todosList.forEach(element => {
                if(element._id==action.todo._id){
                    arr.push({_id:action.todo._id,userId:action.todo.userId,title:action.todo.title,body:action.todo.body,done:!action.todo.done});
                }
                else arr.push(element);
            });
            let brr=[];  
            state.todosForSearch.forEach(element => {
                if(element._id==action.todo._id){
                    brr.push({_id:action.todo._id,userId:action.todo.userId,title:action.todo.title,body:action.todo.body,done:!action.todo.done});
                }
                else brr.push(element);
            });
            return {
                ...state,
                todosList: arr,
                todosForSearch:brr
            }
        }
        case "ADD_TODO": {
            return {
                ...state,
                todosList: [...state.todosList,action.todo],
                todosForSearch:[...state.todosForSearch,action.todo]
            }
        }

    }
    return state;
}
