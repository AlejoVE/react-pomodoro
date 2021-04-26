import React, {useContext, useEffect, useState} from "react";
import {PomodoroContext} from "../Context/pomodoro-context";
import {useCounter} from "../hooks/use-counter";

export const Timer = () => {
    const [firstRender, setFirstRender] = useState(true);
    const {pomodoroState} = useContext(PomodoroContext);

    const {minutes, seconds, isBreak} = pomodoroState;

    const startTimer = useCounter();

    const handleClick = () => {
        startTimer();
    };

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false);
            return;
        }
        startTimer();
    }, [seconds, minutes]);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div>
            <h1>{`${timerMinutes}:${timerSeconds}`}</h1>
            <button type={"button"} onClick={handleClick}>
                {"Start"}
            </button>
            {isBreak ? "Break Time!" : ""}
        </div>
    );
};
