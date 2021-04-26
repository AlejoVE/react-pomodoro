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

export const setSeconds = () => ({
    type: "setSeconds",
});

export const startBreak = () => ({
    type: "startBreak",
});

export const finishBreak = () => ({
    type: "finishBreak",
});
