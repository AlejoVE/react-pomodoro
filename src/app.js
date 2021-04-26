import React, {useReducer} from "react";

import {MainScreen} from "./components/main-screen";
import {PomodoroContext} from "./Context/pomodoro-context";
import {pomodoroReducer} from "./Context/pomodoro-reducer";

export const App = () => {
    const initialState = {
        isBreak: false,
        minutes: 0,
        seconds: 5,
        breakTime: 5,
    };

    const [pomodoroState, pomodoroDispatch] = useReducer(
        pomodoroReducer,
        initialState,
    );

    return (
        <PomodoroContext.Provider value={{pomodoroState, pomodoroDispatch}}>
            <div>
                <MainScreen />
            </div>
        </PomodoroContext.Provider>
    );
};
