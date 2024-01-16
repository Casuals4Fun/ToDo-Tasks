import { createSlice, nanoid } from '@reduxjs/toolkit';

const storedTasks = localStorage.getItem('tasks');
const initialTasks = storedTasks ? JSON.parse(storedTasks) : [
    { id: 1, text: 'This is first task.', status: 'Complete' },
    { id: 2, text: 'This is second task.', status: 'Complete' },
    { id: 3, text: 'This is third task.', status: 'Incomplete' },
    { id: 4, text: 'This is fourth task.', status: 'Incomplete' },
    { id: 5, text: 'This is fifth task.', status: 'Complete' },
    { id: 6, text: 'This is sixth task.', status: 'Incomplete' },
    { id: 7, text: 'This is seventh task.', status: 'Complete' },
    { id: 8, text: 'This is eigth task.', status: 'Incomplete' },
    { id: 9, text: 'This is ninth task.', status: 'Complete' },
    { id: 10, text: 'This is tenth task.', status: 'Incomplete' }
];

const initialState = {
    openAddTaskModal: false,
    openFilter: false,
    filter: "",
    tasks: initialTasks
};

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        toggleAddTaskModal: (state) => {
            state.openFilter = false;
            state.openAddTaskModal = !state.openAddTaskModal;
        },
        toggleFilter: (state) => {
            state.openFilter = !state.openFilter
        },
        handleFilter: (state, action) => {
            state.openFilter = false;
            state.filter = action.payload;
        },
        addTask: (state, action) => {
            const task = {
                id: nanoid(),
                text: action.payload.text,
                date: action.payload.date
            };
            state.tasks.push(task);
        },
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        removeTask: (state, action) => {
            const id = action.payload;
            state.tasks = state.tasks.filter(task => task.id !== id);
        }
    }
});

export const {
    toggleAddTaskModal,
    toggleFilter,
    handleFilter,
    addTask,
    setTasks,
    removeTask
} = taskSlice.actions;

export default taskSlice.reducer;