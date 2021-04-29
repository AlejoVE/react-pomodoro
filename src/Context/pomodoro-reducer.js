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
                seconds: action.payload,
            };
        case "setPomodoroMinutes":
            return {
                ...state,
                pomodoroTime: action.payload,
            };
        case "setMinutes":
            return {
                ...state,
                minutes: action.payload,
            };
        case "setBreakTime":
            return {
                ...state,
                breakTime: action.payload,
            };

        case "startPomodoro":
            return {
                ...state,
                isStarted: true,
                isReset: false,
            };

        case "setReset":
            return {
                ...state,
                minutes: action.payload,
                seconds: 0,
                isStarted: false,
                isReset: true,
                isBreak: false,
            };
        case "setPause":
            return {
                ...state,
                isPause: action.payload,
            };
        case "finishPause":
            return {
                ...state,
                isPause: false,
            };

        case "startBreak":
            return {
                ...state,
                isBreak: true,
                minutes: action.payload,
            };
        case "finishBreak":
            return {
                ...state,
                isBreak: false,
                isStarted: false,
            };
        case "setModal":
            return {
                ...state,
                modalIsOpen: action.payload,
            };

        default:
            return state;
    }
};
