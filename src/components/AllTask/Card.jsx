import { MdEdit, MdDelete } from "react-icons/md";

const Card = ({ task }) => {
    return (
        <div className='task__card'>
            <div className='task__text'>
                {task.text}
            </div>
            <div className='task__operation'>
                <div className={`task__status ${task.status}`}>
                    {task.status}
                </div>
                <div className='task__operation__btn'>
                    <button title="Edit Task"><MdEdit size={20} /></button>
                    <button title="Delete Task"><MdDelete size={20} /></button>
                </div>
            </div>
        </div>
    )
}

export default Card