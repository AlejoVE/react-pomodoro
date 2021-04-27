import {useContext} from "react";
import {PomodoroContext} from "../Context/pomodoro-context";
import {
    countdownSeconds,
    countdownMinutes,
    setSeconds,
    startBreak,
    finishBreak,
    setMinutes,
    setBreakTime,
} from "../helpers/actions";

export const useCounter = () => {
    const {pomodoroState, pomodoroDispatch} = useContext(PomodoroContext);
    const {
        minutes,
        seconds,
        isBreak,
        breakTime,
        pomodoroTime,
        isStarted,
    } = pomodoroState;

    return () => {
        const interval = setTimeout(() => {
            clearInterval(interval);

            if (!isStarted) {
                return;
            }

            if (seconds !== 0) {
                pomodoroDispatch(countdownSeconds(seconds));
                return;
            }

            if (minutes !== 0) {
                //To set 59 seconds in timer
                pomodoroDispatch(setSeconds());
                //To subtract one minute
                pomodoroDispatch(countdownMinutes(minutes));
                return;
            }

            if (isBreak) {
                pomodoroDispatch(finishBreak());
                console.log("Break is over");
                pomodoroDispatch(setMinutes(pomodoroTime));
                return;
            }
            //If seconds and minutes = 0, the pomodoro is over
            console.log("Pomodoro is over");
            pomodoroDispatch(startBreak(breakTime));
            setBreakTime(true);
        }, 1000);
    };
};
