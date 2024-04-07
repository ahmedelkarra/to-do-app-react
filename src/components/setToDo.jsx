import React, { useContext } from "react";
import AddTask from "./addTask";
import '../css/addTask.css'
import { AllTask, GetInfoAllTask } from "../App";

const SetToDo = () => {
    const { allInfo } = useContext(AllTask)
    const { getInfoAllTask, setGetInfoAllTask } = useContext(GetInfoAllTask)

    const handelClick = (ele) => {
        setGetInfoAllTask(ele)
    }
    return (
        <div className="mainDiv col-4 align-self-end justify-content-center bg-primary-subtle h-75">
            <AddTask />
            <div className="allTask">
                {allInfo.map((ele) => {
                    return (
                        <h2 className={`d-flex justify-content-center align-self-center ${getInfoAllTask.id === ele.id && 'bg-primary text-light'}`} onClick={() => handelClick(ele)} key={ele.id}>{ele.task}</h2>
                    )
                })}
            </div>
        </div >
    )
}

export default SetToDo