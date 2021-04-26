export const pomodoroReducer = (state = {}, action) => {
    switch (action.type) {
        case "countdownSeconds":
            return {
                ...state,
                seconds: action.payload - 1,
            };

        case "countdownMinutes":
            return {
                ...state,
                minutes: action.payload - 1,
            };
        case "setSeconds":
            return {
                ...state,
                seconds: 59,
            };
        case "setMinutes":
            return {
                ...state,
                minutes: 25,
            };
        case "startBreak":
            return {
                ...state,
                isBreak: true,
                minutes: 1,
            };
        case "finishBreak":
            return {
                ...state,
                isBreak: false,
            };

        default:
            return state;
    }
};
