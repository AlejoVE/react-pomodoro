import React, {useContext, useEffect, useState} from "react";
import {PomodoroContext} from "../Context/pomodoro-context";
import {useCounter} from "../hooks/use-counter";
import {startPomodoro, setReset, setMinutes} from "../helpers/actions";

export const Timer = () => {
    const [firstRender, setFirstRender] = useState(true);
    const {pomodoroState, pomodoroDispatch} = useContext(PomodoroContext);

    let {
        minutes,
        seconds,
        isStarted,
        pomodoroTime,
        isReset,
        isPause,
        breakTime,
    } = pomodoroState;

    const startTimer = useCounter();

    useEffect(() => {
        //To avoid timer to start in the first render
        if (firstRender) {
            setFirstRender(false);
            return;
        }

        if (isReset) {
            pomodoroDispatch({
                type: "setSeconds",
                payload: 0,
            });

            return;
        }

        if (isPause) {
            return;
        }

        startTimer();
    }, [seconds, minutes, isStarted, isPause]);

    const handleClick = () => {
        pomodoroDispatch(startPomodoro());
        pomodoroDispatch({
            type: "setPause",
            payload: !isPause,
        });
    };

    const handleReset = () => {
        pomodoroDispatch(setReset(pomodoroTime));
        pomodoroDispatch({
            type: "setPause",
            payload: true,
        });
    };

    const counterPomodoroTimeDecrease = () => {
        if (pomodoroTime <= 1) {
            return;
        }
        pomodoroDispatch({
            type: "setPomodoroMinutes",
            payload: pomodoroTime - 1,
        });
        pomodoroDispatch(setMinutes(pomodoroTime - 1));
    };

    const counterPomodoroIncrease = () => {
        pomodoroDispatch({
            type: "setPomodoroMinutes",
            payload: pomodoroTime + 1,
        });
        pomodoroDispatch(setMinutes(pomodoroTime + 1));
    };

    const counterBreakTimeIncrease = () => {
        pomodoroDispatch({
            type: "setBreakTime",
            payload: breakTime + 1,
        });
    };

    const counterBreakTimeDecrease = () => {
        if (breakTime <= 1) {
            return;
        }
        pomodoroDispatch({
            type: "setBreakTime",
            payload: breakTime - 1,
        });
    };

    // if (isReset) {
    //     seconds = 0;
    // }

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className={"timer-container"}>
            <div className={"upper-container"}>
                <h1>{`${timerMinutes}:${timerSeconds}`}</h1>
                <div>
                    <button
                        className={
                            isPause ? "btn btn-success" : "btn btn-warning"
                        }
                        type={"button"}
                        onClick={handleClick}>
                        {isPause ? "Start" : "Stop"}
                    </button>
                    <button
                        className={"btn btn-danger"}
                        type={"button"}
                        onClick={handleReset}>
                        {"Reset"}
                    </button>
                </div>
            </div>
            <div className={"lower-container"}>
                <div className={"pomodoroTimer-container"}>
                    <h5>{"Set Custom Time"}</h5>
                    <h4>
                        {pomodoroTime < 10
                            ? `0${pomodoroTime}:00`
                            : `${pomodoroTime}:00`}
                    </h4>
                    <div className={"buttons-container"}>
                        <button
                            className={"btn btn-secondary"}
                            type={"button"}
                            onClick={counterPomodoroTimeDecrease}
                            disabled={isPause ? false : true}>
                            {"-"}
                        </button>
                        <button
                            className={"btn btn-secondary"}
                            type={"button"}
                            onClick={counterPomodoroIncrease}
                            disabled={isPause ? false : true}>
                            {"+"}
                        </button>
                    </div>
                </div>
                <div className={"pomodoroTimer-container"}>
                    <h5>{"Next Break Time"}</h5>
                    <h4>
                        {breakTime < 10
                            ? `0${breakTime}:00`
                            : `${breakTime}:00`}
                    </h4>
                    <div className={"buttons-container"}>
                        <button
                            className={"btn btn-secondary"}
                            type={"button"}
                            onClick={counterBreakTimeDecrease}>
                            {"-"}
                        </button>
                        <button
                            className={"btn btn-secondary"}
                            type={"button"}
                            onClick={counterBreakTimeIncrease}>
                            {"+"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
