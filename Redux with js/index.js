  
  const redux = require("redux");

//   create actions
  const ADD_TOD0 = "add todo";
  const TOGGLE_TODO = "toggle todo";

//   action creater

const addTodo = (text)=>({text,type:"ADD_TOD0"});
const toggleTodo = (index)=>({index, type:"TOGGLE_TODO"});

// Reducer

const initialState = {todos:[]};

const todoReducer = (state= initialState,action)=>{
    switch(action.type){
        case ADD_TOD0:
          return{
            ...state,
            todos:[...state.todos,{text:action.text,completed:false}]
          }
        case TOGGLE_TODO:
          return{
            ...state,
            todos:state.todos.map((todo,i)=>{
           if(i==action.index){
            todo.completed =!todo.completed;
           }
           return todo;             
            })
          }
        default :
        return state;
    }
}


// creating store

const store = redux.createStore(todoReducer);

store.dispatch(addTodo("study at 9"));
store.dispatch(addTodo("sleep at 12"));
store.dispatch(toggleTodo(0));

console.log(store.getState()); 
