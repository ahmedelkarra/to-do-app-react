import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AllTask, GetInfoAllTask } from '../App';

function EditTask() {
    const { allInfo, setAllInfo } = useContext(AllTask)
    const { getInfoAllTask } = useContext(GetInfoAllTask)
    const [getInputValue, setGetInputVlaue] = useState({ task: getInfoAllTask.task, taskBody: getInfoAllTask.taskBody })
    const [errorValue, setErrorValue] = useState('')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let editTask = [...allInfo]

    const handelEdite = () => {
        if (getInputValue.task && getInputValue.taskBody) {
            const getInfo = editTask.map((ele) => {
                if (ele.id === getInfoAllTask.id) {
                    return ele = { task: getInputValue.task, taskBody: getInputValue.taskBody, id: ele.id }
                } else {
                    return ele
                }
            })
            setAllInfo(getInfo)
            handleClose()
        } else {
            return setErrorValue('Please Fill Out All Inputs')
        }
    }

    useEffect(() => {
        setGetInputVlaue({ task: getInfoAllTask.task, taskBody: getInfoAllTask.taskBody })
    }, [getInfoAllTask])
    return (
        <>
            <FontAwesomeIcon icon={faPenToSquare} className="btn btn-outline-success fs-2 m-2" onClick={handleShow} />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column gap-2">
                    {errorValue && <h3 className='fs-4 text-bg-danger text-center'>{errorValue}</h3>}
                    <input type="text" placeholder="Title" className="fs-5 px-2 py-3" onChange={(e) => setGetInputVlaue({ ...getInputValue, task: e.target.value }, setErrorValue(''))} value={getInputValue.task} />
                    <textarea type="text" placeholder="Body" className="fs-5 px-2 py-3" onChange={(e) => setGetInputVlaue({ ...getInputValue, taskBody: e.target.value }, setErrorValue(''))} value={getInputValue.taskBody} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handelEdite}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTask;