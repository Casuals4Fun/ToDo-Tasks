import { Draggable } from 'react-beautiful-dnd';
import { MdEdit, MdDelete, MdDragHandle, MdDragIndicator } from "react-icons/md";

const Card = ({ task, index }) => {
    return (
        <Draggable draggableId={task.id.toString()} index={index}>
            {(provided, snapshot) => (
                <div
                    className="task__card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}

                >
                    <div className="task__text">{task.text}</div>
                    <div className="task__operation">
                        <div className={`task__status ${task.status}`}>{task.status}</div>
                        <div className="task__operation__btn">
                            <button title="Edit Task">
                                <MdEdit size={20} />
                            </button>
                            <button title="Delete Task">
                                <MdDelete size={20} />
                            </button>
                            <button title="Drag Task" {...provided.dragHandleProps}>
                                <MdDragIndicator size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default Card;