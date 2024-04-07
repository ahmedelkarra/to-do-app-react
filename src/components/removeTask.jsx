import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { AllTask, GetInfoAllTask } from '../App';

function RemoveTask() {
    const { allInfo, setAllInfo } = useContext(AllTask)
    const { getInfoAllTask } = useContext(GetInfoAllTask)
    let removeTask = [...allInfo]

    const handelRemove = () => {
        const getAnsower = window.confirm(`Are you sure to delete ${getInfoAllTask.task}`)
        if (getAnsower) {
            const getInfo = removeTask.filter((ele) => ele.id !== getInfoAllTask.id)
            setAllInfo(getInfo)
        }
    }
    return (
        <>
            <FontAwesomeIcon icon={faTrashCan} className="btn btn-outline-danger fs-2 m-2" onClick={handelRemove} />
        </>
    );
}

export default RemoveTask;