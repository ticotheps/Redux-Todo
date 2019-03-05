export const ADD_TODO = "ADD_TODO";
export const TOGGLE_CHECKMARK = "TOGGLE_CHECKMARK";

export const toggleCheckmark = completed => {
    console.log(completed);
    return {
        type: TOGGLE_CHECKMARK,
        payload: completed
    };
};