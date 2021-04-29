import React, {useContext, useEffect} from "react";
import {PomodoroContext} from "../Context/pomodoro-context";
import {setMinutes} from "../helpers/actions";
import Modal from "react-modal";

import {Timer} from "./timer";

export const MainScreen = () => {
    const {pomodoroState, pomodoroDispatch} = useContext(PomodoroContext);
    const {
        pomodoroTime,
        isPause,
        seconds,
        minutes,
        modalIsOpen,
        isBreak,
    } = pomodoroState;
    // const [modalIsOpen, setIsOpen] = useState(true);

    const handleClick = ({target}) => {
        pomodoroDispatch({
            type: "setPomodoroMinutes",
            payload: Number(target.value),
        });
    };

    useEffect(() => {
        pomodoroDispatch(setMinutes(pomodoroTime));
    }, [pomodoroTime]);

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };

    Modal.setAppElement("#root");

    function closeModal() {
        pomodoroDispatch({
            type: "setModal",
            payload: false,
        });
    }

    // function closeModalAndStartTimer() {
    //     pomodoroDispatch(finishBreak());
    //     pomodoroDispatch(setMinutes(pomodoroTime));
    //     pomodoroDispatch(setSeconds(0));
    //     pomodoroDispatch({
    //         type: "setPause",
    //         payload: false,
    //     });

    //     closeModal();
    //     pomodoroDispatch(startPomodoro());
    // }

    // useEffect(() => {
    //     if (firstRender) {
    //         setFirstRender(false);
    //         return;
    //     }

    //     pomodoroDispatch(startPomodoro());
    //     // pomodoroDispatch({
    //     //     type: "setPause",
    //     //     payload: !isPause,
    //     // });
    // }, [modalIsOpen]);

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = "#f00";
    // }

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className={"main-container"}>
            <h1>{"Pomodoro Timer!"}</h1>
            <h4>{"How long do you want to stay focused?"}</h4>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel={"Example Modal"}>
                <div className={"modal-container"}>
                    <h2>{"Take a Break!"}</h2>
                    <h4>{`${timerMinutes}:${timerSeconds}`}</h4>
                    <div className={"buttons-container-modal"}>
                        <button
                            type={"button"}
                            className={"btn btn-danger"}
                            onClick={closeModal}>
                            {"close"}
                        </button>
                        {/* <button
                            type={"button"}
                            className={"btn btn-primary"}
                            onClick={closeModalAndStartTimer}>
                            {"Start new Timer"}
                        </button> */}
                    </div>
                </div>
            </Modal>
            <div className={"top-buttons-container"}>
                <button
                    type={"button"}
                    className={"btn btn-primary"}
                    value={15}
                    onClick={handleClick}
                    disabled={isPause ? false : true}>
                    {"15:00"}
                </button>
                <button
                    type={"button"}
                    className={"btn btn-primary"}
                    value={30}
                    onClick={handleClick}
                    disabled={isPause ? false : true}>
                    {"30:00"}
                </button>
                <button
                    type={"button"}
                    className={"btn btn-primary"}
                    value={45}
                    onClick={handleClick}
                    disabled={isPause ? false : true}>
                    {"45:00"}
                </button>
                <button
                    type={"button"}
                    className={"btn btn-primary"}
                    value={60}
                    onClick={handleClick}
                    disabled={isPause ? false : true}>
                    {"60:00"}
                </button>
            </div>
            {isBreak ? (
                <span className={"alert alert-success mt-3"}>
                    {"Break Time "}
                </span>
            ) : (
                ""
            )}
            <Timer />
        </div>
    );
};
