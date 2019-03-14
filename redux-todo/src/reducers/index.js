import { ADD_TODO, TOGGLE_CHECKMARK } from '../actions';

const initialState = {
    items: [
        { id: 1, task: "Complete daily stand-up form", completed: false },
        { id: 2, task: "Watch Traversy Media Redux Tutorial", completed: true }
    ]
};

function reducer(state = initialState, action) {
    // console.log(action);
    switch (action.type) {
        case ADD_TODO:
            const newItem = {
                task: action.payload,
                id: state.items.length +1,
                completed: false
            };
            return {
                ...state,
                items: [...state.items, newItem]
            };
        case TOGGLE_CHECKMARK:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    }
                    return item;
                })
            }
        default:
            return state;
    }
}

export default reducer;