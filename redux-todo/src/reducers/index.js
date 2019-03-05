
const initialState = {
    items: [
        { task: "Complete daily stand-up form", completed: false },
        { task: "Watch Traversy Media Redux Tutorial", completed: false }
    ]
};

function reducer(state = initialState, action) {
    console.log(action);
}

export default reducer;