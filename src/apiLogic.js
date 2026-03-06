// src/apiLogic.js
export const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00"];
};

export const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_TIMES') {
        return ["17:00", "18:00", "19:00", "20:00"];
    }
    return state;
};