//prettier-ignore
export const countdownSeconds = seconds => ({
    type: "countdownSeconds",
    payload: seconds,
});

//prettier-ignore
export const countdownMinutes = minutes => ({
    type: "countdownMinutes",
    payload: minutes,
});

//prettier-ignore
export const setSeconds = seconds => ({
    type: "setSeconds",
    payload: seconds
});
//prettier-ignore
export const setMinutes = minutes => ({
    type: "setMinutes",
    payload: minutes,
});

//prettier-ignore
export const startBreak = minutes => ({
    type: "startBreak",
    payload:minutes
});

//prettier-ignore
export const startPomodoro = () => ({
    type: "startPomodoro",
});

export const finishBreak = () => ({
    type: "finishBreak",
});

//prettier-ignore
export const setBreakTime = minutes => ({
    type: "setBreakTime",
    payload: minutes
})

//prettier-ignore
export const setReset = minutes => ({
    type: "setReset",
    payload: minutes
})
