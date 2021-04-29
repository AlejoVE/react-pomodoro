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
    let {
        minutes,
        seconds,
        isBreak,
        breakTime,
        pomodoroTime,
        isStarted,
        isReset,
    } = pomodoroState;

    return () => {
        const interval = setTimeout(() => {
            clearInterval(interval);

            if (!isStarted || isReset) {
                return;
            }

            if (seconds !== 0) {
                pomodoroDispatch(countdownSeconds(seconds));
                return;
            }

            if (minutes !== 0) {
                //To set 59 seconds in timer
                pomodoroDispatch(setSeconds(59));
                //To subtract one minute
                pomodoroDispatch(countdownMinutes(minutes));
                return;
            }

            //TODO: when Break is finish, set isPause to true
            if (isBreak) {
                pomodoroDispatch(finishBreak());
                console.log("Break is over");
                pomodoroDispatch(setMinutes(pomodoroTime));
                pomodoroDispatch({
                    type: "setPause",
                    payload: true,
                });
                return;
            }
            //If seconds and minutes = 0, the pomodoro is over
            console.log("Pomodoro is over");
            pomodoroDispatch(startBreak(breakTime));
            setBreakTime(true);
            pomodoroDispatch({
                type: "setModal",
                payload: true,
            });
        }, 1000);
    };
};
