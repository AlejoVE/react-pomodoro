import React, {useContext, useEffect} from "react";
import {PomodoroContext} from "../Context/pomodoro-context";
import {useCounter} from "../hooks/use-counter";

export const Timer = () => {
    const {pomodoroState} = useContext(PomodoroContext);

    const {minutes, seconds} = pomodoroState;

    const startTimer = useCounter();

    useEffect(() => {
        startTimer();
    }, [seconds, minutes]);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div>
            <h1>{`${timerMinutes}:${timerSeconds}`}</h1>
        </div>
    );
};
