import React, {useContext, useEffect, useState} from "react";
import {PomodoroContext} from "../Context/pomodoro-context";
import {useCounter} from "../hooks/use-counter";
import {startPomodoro} from "../helpers/actions";

export const Timer = () => {
    const [firstRender, setFirstRender] = useState(true);
    const [isPause, setIsPause] = useState(false);
    const {pomodoroState, pomodoroDispatch} = useContext(PomodoroContext);

    const {minutes, seconds, isBreak, isStarted} = pomodoroState;

    const startTimer = useCounter();

    const handleStart = () => {
        pomodoroDispatch(startPomodoro());
        setIsPause(false);
    };

    //To call the function startTimer just when the state change
    useEffect(() => {
        startTimer();
    }, [isStarted]);

    const handlePause = () => {
        setIsPause(true);
    };

    useEffect(() => {
        //To avoid timer to start in the first render
        if (firstRender) {
            setFirstRender(false);
            return;
        }

        if (isPause) {
            return;
        }

        startTimer();
    }, [seconds, minutes]);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div>
            <h1>{`${timerMinutes}:${timerSeconds}`}</h1>
            <button type={"button"} onClick={handleStart}>
                {"Start"}
            </button>
            <button type={"button"} onClick={handlePause}>
                {"Pause"}
            </button>
            {isBreak ? "Break Time!" : ""}
        </div>
    );
};
