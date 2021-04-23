import {useState, useEffect, useContext} from "react";
import {PomodoroContext} from "../Context/pomodoro-context";

//prettier-ignore
const countdownSeconds = seconds => ({
    type: "countdownSeconds",
    payload: seconds,
});

//prettier-ignore
const countdownMinutes = minutes => ({
    type: "countdownMinutes",
    payload: minutes,
});

const setSeconds = () => ({
    type: "setSeconds",
});

export const useCounter = () => {
    const {pomodoroState, pomodoroDispatch} = useContext(PomodoroContext);
    const {minutes, seconds} = pomodoroState;

    return () => {
        const interval = setTimeout(() => {
            clearInterval(interval);

            if (seconds !== 0) {
                pomodoroDispatch(countdownSeconds(seconds));
            }

            if (minutes !== 0) {
                if (seconds === 0) {
                    pomodoroDispatch(setSeconds);
                    pomodoroDispatch(countdownMinutes(minutes));
                }
            }

            if (minutes === 0 && seconds === 0) {
                console.log("Pomodoro is over");
            }
        }, 1000);
    };
};
