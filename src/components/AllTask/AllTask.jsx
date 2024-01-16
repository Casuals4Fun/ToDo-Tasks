import './AllTask.css';
import { useDispatch, useSelector } from 'react-redux';
import { handleFilter, toggleAddTaskModal, toggleFilter } from '../../state/taskReducer';
import { FaFilter } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import Card from './Card';

const AllTask = () => {
    return (
        <>
            <TaskHeader />
            <Tasks />
        </>
    )
}

const Tasks = () => {
    const { filter } = useSelector(state => state.tasks);

    const tasks = [
        { id: 1, text: 'This is first task.', status: 'Complete' },
        { id: 2, text: 'This is second task. This is second task. This is second task. This is second task.', status: 'Complete' },
        { id: 3, text: 'This is third task.', status: 'Incomplete' },
        { id: 4, text: 'This is fourth task.', status: 'Incomplete' },
        { id: 5, text: 'This is fifth task.', status: 'Complete' },
        { id: 6, text: 'This is sixth task.', status: 'Incomplete' },
        { id: 7, text: 'This is seventh task.', status: 'Complete' },
        { id: 8, text: 'This is eigth task.', status: 'Incomplete' },
        { id: 9, text: 'This is ninth task.', status: 'Complete' },
        { id: 10, text: 'This is tenth task.', status: 'Incomplete' }
    ];

    return (
        <div className='tasks__container' style={{ paddingTop: !filter && "10px" }}>
            {tasks.reverse().map((task, index) => (
                <Card task={task} key={task.id} />
            ))}
        </div>
    )
}

const TaskHeader = () => {
    const dispatch = useDispatch();
    const { openAddTaskModal, openFilter, filter } = useSelector(state => state.tasks);

    return (
        <>
            <section id="all__task">
                <div className='all__task__container'>
                    <div className='all__task__header'>
                        <h2>All Tasks</h2>
                        <div style={{ position: 'relative', display: 'flex', gap: '5px' }}>
                            <button className={`task__btn ${openAddTaskModal && "active"}`} onClick={() => {
                                document.body.style.overflow = "hidden";
                                dispatch(toggleAddTaskModal());
                            }}>
                                New Task
                            </button>
                            <button className={`task__btn filter ${openFilter && "active"}`} onClick={() => dispatch(toggleFilter())}>
                                Filter
                                <FaFilter />
                            </button>
                        </div>
                    </div>
                    {openFilter && (
                        <div className='select__filter__top'>
                            <button onClick={() => dispatch(handleFilter('Complete'))}>
                                Complete
                            </button>
                            <button onClick={() => dispatch(handleFilter('Incomplete'))}>
                                Incomplete
                            </button>
                        </div>
                    )}
                </div>
                {filter && (
                    <div className='filter__header'>
                        <button onClick={() => dispatch(handleFilter(''))}>
                            <h3>{filter}</h3>
                            <IoMdClose style={{ marginTop: '1px' }} />
                        </button>
                    </div>
                )}
            </section>

            <div
                title='Filter Tasks'
                className={`filter__btn ${openFilter && "active"}`}
            >
                {openFilter && (
                    <div className='select__filter__bottom'>
                        <button title='Filter Complete Tasks' onClick={() => dispatch(handleFilter('Complete'))}>
                            Complete
                        </button>
                        <button title='Filter Incomplete Tasks' onClick={() => dispatch(handleFilter('Incomplete'))}>
                            Incomplete
                        </button>
                    </div>
                )}
                <FaFilter size={20} onClick={() => dispatch(toggleFilter())} />
            </div>
        </>
    )
}

export default AllTask