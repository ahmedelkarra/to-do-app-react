import React, { useContext, useEffect } from "react";
import RemoveTask from "./removeTask";
import EditTask from "./editTask";
import { AllTask, GetInfoAllTask } from "../App";

const InfoToDo = () => {
    const { getInfoAllTask, setGetInfoAllTask } = useContext(GetInfoAllTask)
    const { allInfo } = useContext(AllTask)
    useEffect(() => {
        setGetInfoAllTask(allInfo[0] || [])
    }, [allInfo, setGetInfoAllTask])
    return (
        <div className="col-8 align-self-end bg-light h-75">
            {allInfo?.length !== 0 && <div className="d-flex justify-content-around align-items-center my-5">
                <h2 className="fs-4 m-2 " style={{ textWrap: "pretty", wordWrap: "break-word", textAlign: "center", width: "60%" }}>{getInfoAllTask?.task}</h2>
                <div>
                    <EditTask />
                    <RemoveTask />
                </div>
            </div>}
            {allInfo?.length !== 0 && <p className="fs-5 col-12 align-self-end mx-auto w-75 h-50" style={{ textWrap: "balance", wordWrap: "break-word", textAlign: "start", overflow: "auto" }}>{getInfoAllTask?.taskBody}</p>}
            {allInfo?.length === 0 && <h2 className="col-12 text-center pt-3">Please Enter Task To Do</h2>}
        </div>
    )
}

export default InfoToDo