import './TaskModal.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask, toggleAddTaskModal } from '../../state/taskReducer';
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useState } from 'react';

const TaskModal = () => {
    const dispatch = useDispatch();
    const { tempTask } = useSelector(state => state.tasks);

    const [text, setText] = useState(!tempTask.text ? "" : tempTask.text);
    const [status, setStatus] = useState(!tempTask.status ? "Incomplete" : tempTask.status);

    const handleAddTask = (e) => {
        e.preventDefault();

        if (!tempTask.id) dispatch(addTask({ text, status }));
        else dispatch(editTask({ id: tempTask.id, text, status }));
        setText("");
        setStatus("Incomplete");
    }

    return (
        <div id='add_task'>
            <div className='modal__container'>
                <div className='modal__header'>
                    <h2>Create new task</h2>
                    <button onClick={() => {
                        document.body.style.overflow = "auto"
                        dispatch(toggleAddTaskModal());
                    }}>
                        <IoReturnUpBackOutline size={25} />
                    </button>
                </div>
                <form className='modal__input__form' onSubmit={handleAddTask}>
                    <div className='modal__input'>
                        <label htmlFor="text">Task</label>
                        <textarea
                            placeholder='Enter your task here'
                            value={text}
                            onChange={e => setText(e.target.value)}
                        ></textarea>
                    </div>
                    <div className='modal__input'>
                        <label htmlFor="text">Status</label>
                        <RadioButton
                            id="complete"
                            name="complete"
                            value="Complete"
                            text="Complete"
                            onChange={() => setStatus('Complete')}
                            checked={status === "Complete"}
                        />
                        <RadioButton
                            id="incomplete"
                            name="incomplete"
                            value="Incomplete"
                            text="Incomplete"
                            onChange={() => setStatus('Incomplete')}
                            checked={status === "Incomplete"}
                        />
                    </div>
                    <button type="submit">
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    )
}

const RadioButton = ({ name, id, value, onChange, checked, text }) => {
    return (
        <label htmlFor={id} className='radio__label'>
            <input
                className='radio__input'
                type='radio'
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                checked={checked}
            />
            <span className='custom__radio' />
            <span className='radio__text'>{text}</span>
        </label>
    )
}

export default TaskModal