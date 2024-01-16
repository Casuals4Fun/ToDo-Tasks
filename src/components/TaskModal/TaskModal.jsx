import './TaskModal.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddTaskModal } from '../../state/taskReducer';

const TaskModal = () => {
    const dispatch = useDispatch();
    const { openAddTaskModal } = useSelector(state => state.tasks);
    if (!openAddTaskModal) return;

    return (
        <div id="add_task">
            <button onClick={() => {
                document.body.style.overflow = "auto"
                dispatch(toggleAddTaskModal());
            }}>
                Close Add Task
            </button>
        </div>
    )
}

export default TaskModal