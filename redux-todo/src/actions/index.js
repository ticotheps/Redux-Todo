export const ADD_TODO = "ADD_TODO";
export const TOGGLE_CHECKMARK = "TOGGLE_CHECKMARK";

export const addTodo = todoTask => {
    // console.log(todoTask);
    return {
        type: ADD_TODO,
        payload: todoTask
    }
};

export const toggleCheckmark = id => {
    // console.log(id);
    return {
        type: TOGGLE_CHECKMARK,
        payload: id
    };
};