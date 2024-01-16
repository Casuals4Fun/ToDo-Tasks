import './AllTask.css';
import { useDispatch, useSelector } from 'react-redux';
import { handleFilter, toggleAddTaskModal, toggleFilter } from '../../state/taskReducer';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { setTasks } from '../../state/taskReducer';
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
    const { filter, tasks } = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const onDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) {
            return;
        }

        const sourceIndex = tasks.length - 1 - source.index;
        const destinationIndex = tasks.length - 1 - destination.index;

        if (sourceIndex !== destinationIndex) {
            const newTasks = Array.from(tasks);
            const [removed] = newTasks.splice(sourceIndex, 1);
            newTasks.splice(destinationIndex, 0, removed);
            dispatch(setTasks(newTasks));
            localStorage.setItem('tasks', JSON.stringify(newTasks));
        }
    };
    const reversedTasks = [...tasks].reverse();

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="tasks">
                {(provided, snapshot) => (
                    <div
                        className='tasks__container'
                        style={{ paddingTop: !filter && "10px" }}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {reversedTasks.length > 0 ? reversedTasks.map((task, index) => (
                            <Card task={task} index={index} key={task.id} />
                        )) : (
                            <p>No {filter} tasks yet...</p>
                        )}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

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
                onClick={e => {
                    e.stopPropagation();
                    dispatch(toggleFilter());
                }}
            >
                {openFilter && (
                    <div className='select__filter__bottom'>
                        <button title='Filter Complete Tasks' onClick={e => {
                            e.stopPropagation();
                            dispatch(handleFilter('Complete'));
                        }}>
                            Complete
                        </button>
                        <button title='Filter Incomplete Tasks' onClick={e => {
                            e.stopPropagation();
                            dispatch(handleFilter('Incomplete'));
                        }}>
                            Incomplete
                        </button>
                    </div>
                )}
                <FaFilter size={20} />
            </div>

        </>
    )
}

export default AllTask