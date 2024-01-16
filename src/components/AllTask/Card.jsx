import { Draggable } from 'react-beautiful-dnd';
import { MdEdit, MdDelete, MdDragIndicator } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { toggleAddTaskModal, removeTask } from '../../state/taskReducer';

const Card = ({ task, index }) => {
    const dispatch = useDispatch();

    return (
        <Draggable draggableId={task.id.toString()} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                >
                    <div className='task__card'>
                        <div className='task__text'>{task.text}</div>
                        <div className='task__operation'>
                            <div className={`task__status ${task.status}`}>{task.status}</div>
                            <div className='task__operation__btn'>
                                <button title="Edit Task" onClick={() => dispatch(toggleAddTaskModal(task))}>
                                    <MdEdit size={20} />
                                </button>
                                <button title="Delete Task" onClick={() => dispatch(removeTask(task.id))}>
                                    <MdDelete size={20} />
                                </button>
                                <button title="Drag Task" {...provided.dragHandleProps}>
                                    <MdDragIndicator size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className='task__date'>{task.date}</p>
                </div>
            )}
        </Draggable>
    );
};

export default Card;