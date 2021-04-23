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
                seconds: 60,
            };
        case "setMinutes":
            return {
                ...state,
                minutes: 25,
            };
        case "setBreak":
            return {
                ...state,
                isBreak: true,
                breakTime: 5,
            };

        default:
            return state;
    }
};
