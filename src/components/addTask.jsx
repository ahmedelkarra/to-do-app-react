import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import '../css/addTask.css'
import { AllTask } from "../App";

const AddTask = () => {
    const { allInfo, setAllInfo } = useContext(AllTask)
    const [getInputValue, setGetInputVlaue] = useState({ task: '', taskBody: '', id: Math.floor(Math.random() * 1000000000000) })
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handelAddTask = (e) => {
        if (getInputValue.task && getInputValue.taskBody) {
            setGetInputVlaue({ ...getInputValue, id: Math.floor(Math.random() * 1000000000000) })
            setAllInfo([...allInfo, getInputValue])
            e.preventDefault()
            handleClose()
        }
    }
    useEffect(() => {
        localStorage.setItem('allTask', JSON.stringify(allInfo))
    }, [allInfo])
    return (
        <div className="divButton">
            <FontAwesomeIcon icon={faPlus} variant="primary" onClick={handleShow} className="addButton p-2 fs-1 rounded-5 btn btn-success text-light" style={{ width: '30px', height: '30px' }} />
            <Modal show={show} onHide={handleClose}>
                <form onSubmit={(e) => handelAddTask(e)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Task To Do</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex flex-column gap-2">
                        <input type="text" placeholder="Title" className="fs-5 px-2 py-3" onChange={(e) => setGetInputVlaue({ ...getInputValue, task: e.target.value })} required />
                        <textarea type="text" placeholder="Body" className="fs-5 px-2 py-3" onChange={(e) => setGetInputVlaue({ ...getInputValue, taskBody: e.target.value })} required />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            ADD
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}

export default AddTask