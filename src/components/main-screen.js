import React, {useContext, useState} from "react";
// import {TimeInput} from "./time-input";

import {Timer} from "./timer";
import {PomodoroContext} from "../Context/pomodoro-context";

export const MainScreen = () => {
    const {pomodoroState, pomodoroDispatch} = useContext(PomodoroContext);
    const {pomodoroTime, breakTime} = pomodoroState;

    //TODO: set pomodoro timer to start at users preference (minutes)
    const setPomodoro = ({target}) => {
        pomodoroDispatch({
            type: "setBreakMinutes",
            payload: Number(target.value),
        });
    };

    const setBreak = ({target}) => {
        pomodoroDispatch({
            type: "setBreakTime",
            payload: Number(target.value),
        });
    };

    return (
        <div className={"container"}>
            <Timer />
            <input
                type={"number"}
                value={pomodoroTime}
                onChange={setPomodoro}
            />
            <input
                type={"number"}
                value={breakTime}
                name={"breakTime"}
                onChange={setBreak}
            />
        </div>
    );
};
